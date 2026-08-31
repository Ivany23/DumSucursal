const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      const ext = path.extname(name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        files.push(name);
      }
    }
  }
  return files;
}

async function optimizeImages() {
  console.log('🔍 Scanning public/images directory...');
  const files = getFiles(targetDir);
  console.log(`📁 Found ${files.length} images to optimize.\n`);

  let totalOriginalBytes = 0;
  let totalOptimizedBytes = 0;
  let processedCount = 0;

  for (const file of files) {
    const originalSize = fs.statSync(file).size;
    totalOriginalBytes += originalSize;
    const ext = path.extname(file).toLowerCase();
    const tempFile = `${file}.tmp`;

    try {
      let pipeline = sharp(file);
      const metadata = await pipeline.metadata();

      // Resize if wider or taller than 1200px (standard max for product display)
      if (metadata.width > 1200 || metadata.height > 1200) {
        pipeline = pipeline.resize(1200, 1200, {
          fit: 'inside',
          withoutEnlargement: true,
        });
      }

      if (ext === '.png') {
        pipeline = pipeline.png({
          compressionLevel: 9,
          palette: true,
          quality: 85,
        });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({
          quality: 80,
          effort: 6,
        });
      } else {
        // .jpg / .jpeg
        pipeline = pipeline.jpeg({
          quality: 80,
          mozjpeg: true,
        });
      }

      await pipeline.toFile(tempFile);
      const newSize = fs.statSync(tempFile).size;

      // Only overwrite if optimized file is smaller or equal
      if (newSize <= originalSize) {
        fs.renameSync(tempFile, file);
        totalOptimizedBytes += newSize;
        const savingsPct = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
        console.log(`✅ [${++processedCount}/${files.length}] ${(originalSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB (-${savingsPct}%): ${path.basename(file)}`);
      } else {
        fs.unlinkSync(tempFile);
        totalOptimizedBytes += originalSize;
        console.log(`ℹ️ [${++processedCount}/${files.length}] Kept original (${(originalSize / 1024).toFixed(0)}KB): ${path.basename(file)}`);
      }
    } catch (err) {
      if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
      totalOptimizedBytes += originalSize;
      console.error(`❌ Error optimizing ${file}:`, err.message);
    }
  }

  const initialMB = (totalOriginalBytes / (1024 * 1024)).toFixed(2);
  const finalMB = (totalOptimizedBytes / (1024 * 1024)).toFixed(2);
  const totalSavedMB = ((totalOriginalBytes - totalOptimizedBytes) / (1024 * 1024)).toFixed(2);
  const totalSavedPct = (((totalOriginalBytes - totalOptimizedBytes) / totalOriginalBytes) * 100).toFixed(1);

  console.log('\n========================================');
  console.log(`🎉 Optimization Complete!`);
  console.log(`📦 Original Size:  ${initialMB} MB`);
  console.log(`⚡ Optimized Size: ${finalMB} MB`);
  console.log(`🔥 Space Saved:    ${totalSavedMB} MB (-${totalSavedPct}%)`);
  console.log('========================================\n');
}

optimizeImages();
