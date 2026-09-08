import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard3D } from '@/components/cards/GlassCard3D';
import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  Users,
  Store,
  Layers,
  Sparkles,
  Building2,
  CheckCircle2,
} from 'lucide-react';

export default function SobrePage() {
  const metrics = [
    { value: '1.200+', label: 'Produtos em Exposição', desc: 'Do dia a dia a referências gourmet' },
    { value: '8', label: 'Secções Especializadas', desc: 'Corredores temáticos e climatizados' },
    { value: '100%', label: 'Garantia de Autenticidade', desc: 'Fornecedores homologados e certificados' },
    { value: '365', label: 'Dias de Portas Abertas', desc: 'Disponibilidade e acolhimento contínuo' },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Confiança & Transparência',
      desc: 'Relações duradouras com famílias e parceiros comerciais através do rigor na origem dos produtos.',
      box: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      bar: 'from-emerald-400 to-emerald-600',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Qualidade Inegociável',
      desc: 'Critérios rígidos de seleção, refrigeração adequada e frescura comprovada em cada lote.',
      box: 'bg-amber-50 border-amber-200 text-amber-600',
      bar: 'from-amber-400 to-orange-500',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Organização Moderna',
      desc: 'Estrutura pensada para que encontre tudo o que necessita com facilidade, rapidez e conforto.',
      box: 'bg-sky-50 border-sky-200 text-sky-600',
      bar: 'from-sky-400 to-[#0066FF]',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Acolhimento & Respeito',
      desc: 'Atendimento atencioso e humano, pronto a prestar orientações personalizadas aos clientes.',
      box: 'bg-purple-50 border-purple-200 text-purple-600',
      bar: 'from-purple-400 to-fuchsia-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 1. HERO STORYTELLING */}
        <SectionTitle
          badge="A Nossa Identidade"
          title="Quem Somos"
          subtitle="A DUM Sociedade Lda é um armazém moderno com características de supermercado, focado exclusivamente na experiência de compra presencial de excelência."
        />

        {/* Narrative & Brand Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-28">
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A] mb-6 leading-snug">
              Proporcionamos uma experiência organizada, moderna e de confiança para famílias e empresas.
            </h3>
            
            <p className="text-base text-[#475569] font-light leading-relaxed mb-6">
              Nascemos da convicção de que fazer compras presenciais não deve ser uma tarefa monótona ou caótica, mas sim uma experiência agradável num ambiente higienizado, visualmente inspirador e com diversidade genuína.
            </p>

            <p className="text-base text-[#475569] font-light leading-relaxed mb-8">
              No armazém DUM, cada corredor é planeado para oferecer circulação fluida, iluminação acolhedora e uma curadoria de produtos alimentares, bebidas, laticínios, congelados, higiene e limpeza que atendem desde a rotina doméstica aos maiores abastecimentos institucionais.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] block mb-2">
                O Nosso Diferencial
              </span>
              <p className="text-sm text-[#0B1B3A] font-medium leading-relaxed">
                O nosso compromisso é com o atendimento humano, a inspeção visual dos produtos e a garantia de que sai da nossa loja com exatamente o que procurava.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] mb-6 shadow-xs">
                  <Building2 className="w-8 h-8" />
                </div>
                <span className="text-xs text-[#0066FF] font-bold tracking-widest uppercase block mb-1">
                  Infraestrutura DUM Sociedade Lda
                </span>
                <h4 className="text-2xl font-bold text-[#0B1B3A] mb-2">
                  Excelência & Conforto no Ponto de Venda
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Espaço amplo, segurança garantida, controlo de temperatura rigoroso e gôndolas perfeitamente setorizadas.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 pt-6 border-t border-slate-100 mt-6">
                <div className="flex items-center gap-2 text-xs text-[#0066FF]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0066FF]" />
                  <span className="text-[#0B1B3A] font-semibold">Climatização Contínua</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0066FF]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0066FF]" />
                  <span className="text-[#0B1B3A] font-semibold">Estacionamento Acessível</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0066FF]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0066FF]" />
                  <span className="text-[#0B1B3A] font-semibold">Inspeção de Lotes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0066FF]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0066FF]" />
                  <span className="text-[#0B1B3A] font-semibold">Atendimento Dedicado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. NÚMEROS DE IMPACTO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {metrics.map((m, i) => {
            const metricStyles = [
              { value: 'text-[#0066FF]', ring: 'from-[#0066FF]/10 to-transparent', dot: 'bg-[#0066FF]' },
              { value: 'text-emerald-600', ring: 'from-emerald-500/10 to-transparent', dot: 'bg-emerald-500' },
              { value: 'text-purple-600', ring: 'from-purple-500/10 to-transparent', dot: 'bg-purple-500' },
              { value: 'text-amber-500', ring: 'from-amber-400/10 to-transparent', dot: 'bg-amber-500' },
            ][i % 4];
            return (
              <GlassCard3D key={i} className="h-full" intensity={6}>
                <div className={`p-8 text-center h-full flex flex-col justify-center bg-gradient-to-br ${metricStyles.ring} bg-white`}>
                  <span className={`text-4xl sm:text-5xl font-extrabold font-serif ${metricStyles.value} mb-2 block`}>
                    {m.value}
                  </span>
                  <span className="text-sm font-bold text-[#0B1B3A] uppercase tracking-wider mb-2 block">
                    {m.label}
                  </span>
                  <span className="text-xs text-slate-500 font-normal">
                    {m.desc}
                  </span>
                </div>
              </GlassCard3D>
            );
          })}
        </div>

        {/* 3. MISSÃO & VISÃO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          <GlassCard3D className="h-full" intensity={6}>
            <div className="p-8 md:p-10 h-full flex flex-col justify-between bg-gradient-to-br from-white to-[#F0F7FF]">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#0066FF]/25">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] block mb-2">
                  Propósito
                </span>
                <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">
                  A Nossa Missão
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Oferecer à comunidade e às empresas uma experiência física de compra acolhedora, com máxima variedade de produtos essenciais e de qualidade superior, garantindo sempre fiabilidade, bom atendimento e frescura.
                </p>
              </div>
            </div>
          </GlassCard3D>

          <GlassCard3D className="h-full" intensity={6}>
            <div className="p-8 md:p-10 h-full flex flex-col justify-between bg-gradient-to-br from-white to-purple-50">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/25">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600 block mb-2">
                  Futuro
                </span>
                <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">
                  A Nossa Visão
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Ser o armazém de referência e primeira escolha em compras presenciais, reconhecido pelo padrão cinematográfico de organização, respeito pelo cliente e solidez institucional.
                </p>
              </div>
            </div>
          </GlassCard3D>
        </div>

        {/* 4. VALORES FUNDAMENTAIS */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] block mb-2">
              Pilares
            </span>
            <h3 className="text-3xl font-bold text-[#0B1B3A]">
              Os Nossos Valores
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <GlassCard3D key={i} className="h-full" intensity={6}>
                <div className="p-6 h-full flex flex-col justify-between bg-white">
                  <div>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${v.box}`}>
                      {v.icon}
                    </div>
                    <h4 className="text-base font-bold text-[#0B1B3A] mb-2">{v.title}</h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${v.bar} opacity-60`} />
                </div>
              </GlassCard3D>
            ))}
          </div>
        </div>

        {/* 5. CONVITE À VISITA */}
        <div className="p-10 rounded-3xl bg-white border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] mx-auto mb-4">
            <Store className="w-7 h-7 text-[#0066FF]" />
          </div>
          <h3 className="text-2xl font-bold text-[#0B1B3A] mb-3">
            Venha Conhecer a Nossa Equipa
          </h3>
          <p className="text-sm text-slate-600 font-normal max-w-xl mx-auto mb-8">
            Estamos preparados para o receber de braços abertos. Visite as nossas instalações e descubra a diferença de comprar na DUM.
          </p>
          <MagneticButton href="/localizacao" variant="primary" size="lg">
            Ver Localização do Armazém
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
