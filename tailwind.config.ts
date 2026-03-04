import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      /* ============================================
         Cores — espelham os CSS vars do globals.css
         ============================================ */
      colors: {
        background:  'var(--background)',
        surface:     'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        'surface-subtle':   'var(--surface-subtle)',

        accent: {
          DEFAULT: 'var(--accent)',
          hover:   'var(--accent-hover)',
          light:   'var(--accent-light)',
          muted:   'var(--accent-muted)',
        },

        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted:     'var(--text-muted)',
          inverse:   'var(--text-inverse)',
        },

        border: {
          DEFAULT: 'var(--border)',
          subtle:  'var(--border-subtle)',
          accent:  'var(--border-accent)',
        },

        success: {
          DEFAULT: 'var(--success)',
          light:   'var(--success-light)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          light:   'var(--warning-light)',
        },
        error: {
          DEFAULT: 'var(--error)',
          light:   'var(--error-light)',
        },
      },

      /* ============================================
         Tipografia
         ============================================ */
      fontFamily: {
        sans:    ['DM Sans', 'Geist', 'system-ui', 'sans-serif'],
        display: ['Sora', 'DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4rem)',   { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)',   { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 3.5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.75' }],
        'body-md':    ['1rem',     { lineHeight: '1.7'  }],
        'body-sm':    ['0.9375rem', { lineHeight: '1.65' }],
        'caption':    ['0.8125rem', { lineHeight: '1.5'  }],
      },

      /* ============================================
         Border Radius
         ============================================ */
      borderRadius: {
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        full: 'var(--radius-full)',
      },

      /* ============================================
         Box Shadows
         ============================================ */
      boxShadow: {
        sm:     'var(--shadow-sm)',
        md:     'var(--shadow-md)',
        lg:     'var(--shadow-lg)',
        accent: 'var(--shadow-accent)',
      },

      /* ============================================
         Transições
         ============================================ */
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      /* ============================================
         Animações (complemento ao Framer Motion)
         ============================================ */
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        pulse_accent: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(91, 106, 248, 0.3)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(91, 106, 248, 0)' },
        },
      },

      animation: {
        'fade-in':     'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
        'slide-left':  'slideInLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
        'pulse-accent': 'pulse_accent 2s ease-in-out infinite',
      },

      /* ============================================
         Espaçamento extra
         ============================================ */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      /* ============================================
         Max Width
         ============================================ */
      maxWidth: {
        content: '1200px',
        narrow:  '780px',
        wide:    '1400px',
      },
    },
  },
  plugins: [],
}

export default config