'use client';

import React from 'react';

/**
 * CSS-only floating particles replacing the Three.js WebGL scene.
 * Saves ~600KB of JavaScript (three.js) while producing a visually similar effect.
 * Uses CSS @keyframes + transform (GPU-accelerated, zero JS overhead).
 */
export const HeroScene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* CSS-based floating particle field */}
      <div className="hero-particles" aria-hidden="true">
        {/* Blue particles */}
        <span className="particle particle-blue" style={{ '--x': '12%', '--y': '18%', '--d': '8s', '--delay': '0s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '28%', '--y': '72%', '--d': '12s', '--delay': '1.2s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '45%', '--y': '35%', '--d': '10s', '--delay': '0.5s', '--size': '5px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '62%', '--y': '58%', '--d': '14s', '--delay': '2.1s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '78%', '--y': '22%', '--d': '9s', '--delay': '0.8s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '88%', '--y': '68%', '--d': '11s', '--delay': '3.2s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '35%', '--y': '82%', '--d': '13s', '--delay': '1.8s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '55%', '--y': '12%', '--d': '10s', '--delay': '0.3s', '--size': '5px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '72%', '--y': '45%', '--d': '15s', '--delay': '2.5s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '18%', '--y': '55%', '--d': '11s', '--delay': '1.5s', '--size': '4px' } as React.CSSProperties} />

        {/* Sky blue particles */}
        <span className="particle particle-sky" style={{ '--x': '22%', '--y': '32%', '--d': '9s', '--delay': '0.7s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '42%', '--y': '78%', '--d': '13s', '--delay': '2.3s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '68%', '--y': '15%', '--d': '11s', '--delay': '1.1s', '--size': '5px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '85%', '--y': '42%', '--d': '10s', '--delay': '0.4s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '52%', '--y': '62%', '--d': '14s', '--delay': '3.0s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '8%', '--y': '75%', '--d': '12s', '--delay': '1.9s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '38%', '--y': '25%', '--d': '9s', '--delay': '0.6s', '--size': '5px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '92%', '--y': '55%', '--d': '15s', '--delay': '2.8s', '--size': '3px' } as React.CSSProperties} />

        {/* White sparkle particles */}
        <span className="particle particle-white" style={{ '--x': '15%', '--y': '45%', '--d': '10s', '--delay': '0.9s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '48%', '--y': '28%', '--d': '12s', '--delay': '2.0s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '75%', '--y': '65%', '--d': '8s', '--delay': '0.2s', '--size': '5px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '32%', '--y': '88%', '--d': '14s', '--delay': '3.5s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '58%', '--y': '8%', '--d': '11s', '--delay': '1.4s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '82%', '--y': '35%', '--d': '13s', '--delay': '2.6s', '--size': '3px' } as React.CSSProperties} />

        {/* Additional ambient particles for density */}
        <span className="particle particle-blue" style={{ '--x': '5%', '--y': '40%', '--d': '16s', '--delay': '4.0s', '--size': '2px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '95%', '--y': '20%', '--d': '12s', '--delay': '3.8s', '--size': '2px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '50%', '--y': '50%', '--d': '18s', '--delay': '1.0s', '--size': '6px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '25%', '--y': '60%', '--d': '14s', '--delay': '2.2s', '--size': '2px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '65%', '--y': '80%', '--d': '10s', '--delay': '0.1s', '--size': '2px' } as React.CSSProperties} />
        <span className="particle particle-blue" style={{ '--x': '40%', '--y': '15%', '--d': '13s', '--delay': '3.3s', '--size': '3px' } as React.CSSProperties} />
      </div>

      <style jsx>{`
        .hero-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          opacity: 0;
          will-change: transform, opacity;
          animation: float var(--d) var(--delay) infinite ease-in-out;
        }

        .particle-blue {
          background: #0066FF;
          box-shadow: 0 0 8px 2px rgba(0, 102, 255, 0.4);
        }

        .particle-sky {
          background: #3B82F6;
          box-shadow: 0 0 6px 2px rgba(59, 130, 246, 0.35);
        }

        .particle-white {
          background: #FFFFFF;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.5);
        }

        @keyframes float {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.5);
          }
          15% {
            opacity: 0.75;
          }
          50% {
            opacity: 0.6;
            transform: translate3d(
              calc(20px * sin(var(--d, 10s))),
              -30px,
              0
            ) scale(1);
          }
          85% {
            opacity: 0.75;
          }
          100% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};
