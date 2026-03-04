import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        santrio: {
          // Backgrounds
          bg: "#F0F2F5",
          "bg-alt": "#E8EAEF",
          white: "#FFFFFF",

          // Primária (Azul Índigo)
          primary: "#4F5CFF",
          "primary-hover": "#3A45E0",
          "primary-light": "#A5B4FC",
          "primary-muted": "#C7D2FE",
          "primary-subtle": "#EEF0FF",

          // Textos
          dark: "#1A1A2E",
          "text-primary": "#1A1A2E",
          "text-secondary": "#6B7280",
          "text-tertiary": "#9CA3AF",

          // Bordas e divisores
          border: "#E5E7EB",
          "border-light": "#F3F4F6",

          // Feedback
          success: "#10B981",
          "success-light": "#D1FAE5",
          warning: "#F59E0B",
          "warning-light": "#FEF3C7",
          error: "#EF4444",
          "error-light": "#FEE2E2",

          // Footer / Seções escuras
          "dark-bg": "#1A1A2E",
          "dark-surface": "#2A2A42",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-md": ["1.5rem", { lineHeight: "1.35" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
        "container-px": "1.5rem",
      },
      maxWidth: {
        "container": "1200px",
        "container-sm": "960px",
        "content": "720px",
      },
      borderRadius: {
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 10px 25px rgba(0, 0, 0, 0.06), 0 4px 10px rgba(0, 0, 0, 0.04)",
        "button": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "button-primary": "0 4px 14px rgba(79, 92, 255, 0.35)",
        "nav": "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;