import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        dum: {
          // Nova Paleta: Azul Claro + Branco (Opção 3)
          primary: '#0066FF',      // Azul claro moderno (navbar, botões)
          primaryHover: '#0052CC', // Azul hover
          primaryDark: '#003D99',  // Azul escuro
          
          // Backgrounds neutros
          bg: {
            DEFAULT: '#FFFFFF',      // Branco puro
            secondary: '#F0F7FF',    // Azul muito claro (cards hover)
            tertiary: '#F9FAFB',     // Cinza ultra claro
          },
          
          // Texto
          text: {
            primary: '#111827',      // Preto
            secondary: '#6B7280',    // Cinza médio
            light: '#9CA3AF',        // Cinza claro
          },
          
          // Acentos dinâmicos (misturados de Opção 4)
          accent: {
            success: '#22C55E',      // Verde fresco
            error: '#FF4444',        // Vermelho energia
            warning: '#FF9800',      // Laranja
            info: '#0066FF',         // Azul (match primary)
            muted: '#9CA3AF',        // Cinza neutro
          },
          
          // Cores por categoria
          category: {
            mercearia: '#7CB342',    // Verde oliva
            bebidas: '#0066FF',      // Azul
            laticinios: '#FF8C00',   // Laranja
            limpeza: '#06B6D4',      // Verde turquesa
            snacks: '#DC2626',       // Vermelho
            infantil: '#A855F7',     // Roxo
            higiene: '#06B6D4',      // Verde turquesa
            congelados: '#0EA5E9',   // Azul claro
          },
          
          // Premium (herança — agora tons de azul)
          premium: {
            gold: '#0066FF',
            goldLight: '#93C5FD',
          },
          
          // Legacy (mantém compatibilidade)
          dark: '#FFFFFF',           // Branco agora
          darker: '#F9FAFB',         // Cinza claro
          surface: '#FFFFFF',        // Branco
          surfaceLight: '#F0F7FF',   // Azul muito claro
          card: 'rgba(0, 102, 255, 0.05)',  // Azul com opacidade
          border: 'rgba(0, 102, 255, 0.1)', // Borda azul sutil
          borderHover: 'rgba(0, 102, 255, 0.25)',
          emerald: {
            DEFAULT: '#06B6D4',
            light: '#22C55E',
            deep: '#0066FF',
            glow: '#0052CC',
          },
          gold: {
            DEFAULT: '#0066FF',
            light: '#93C5FD',
            dark: '#1E40AF',
            glow: 'rgba(0, 102, 255, 0.15)',
          },
          cream: '#FFFFFF',
          muted: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-gradient': 'linear-gradient(135deg, #0066FF 0%, #0052CC 50%, #003D99 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'ruby-gradient': 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
        'amber-gradient': 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
        'purple-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        'accent-gradient': 'linear-gradient(135deg, #0066FF 0%, #22C55E 100%)',
        'white-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 247, 255, 0.9) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(0, 102, 255, 0.25)',
        'glow-gold': '0 0 25px rgba(0, 102, 255, 0.2)',
        'glow-green': '0 0 25px rgba(34, 197, 94, 0.2)',
        'card-modern': '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px rgba(0, 102, 255, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
