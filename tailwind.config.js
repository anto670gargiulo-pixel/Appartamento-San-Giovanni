/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./dintorni.html",
    "./contatti.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Celeste (primary, prevalente) ── */
        "sky":        "#5ba4c9",
        "sky-light":  "#e8f4fa",
        "sky-dark":   "#3a7fa8",
        "sky-muted":  "#9dcae0",

        /* ── Marrone (accent, secondario) ── */
        "brown":       "#8b6f5c",
        "brown-light": "#a8917e",
        "brown-dark":  "#6b5243",
        "brown-muted": "#d4c4b8",

        /* ── Bianchi & Neutri ── */
        "white":       "#ffffff",
        "white-warm":  "#fdfcfa",
        "ink":         "#2a2a28",
        "ink-light":   "#6b6b68",
        "ink-faint":   "#9a9a96",

        /* ── Funzionali (invariati) ── */
        "error":       "#ba1a1a",
        "whatsapp":    "#25D366",
      },
      borderRadius: {
        "sm":   "0.25rem",
        DEFAULT: "0.5rem",
        "md":   "0.75rem",
        "lg":   "1rem",
        "xl":   "1.25rem",
        "2xl":  "1.5rem",
        "3xl":  "2rem",
        "full": "9999px",
      },
      boxShadow: {
        "editorial":   "0 24px 64px rgba(42, 42, 40, 0.06)",
        "editorial-sm": "0 8px 32px rgba(42, 42, 40, 0.05)",
        "editorial-lg": "0 32px 80px rgba(42, 42, 40, 0.08)",
        "card":        "0 4px 24px rgba(91, 164, 201, 0.08)",
        "warm":        "0 12px 32px rgba(139, 111, 92, 0.10)",
      },
      spacing: {
        "unit":       "8px",
        "gutter":     "16px",
        "section-short":  "64px",
        "section":        "96px",
        "section-tall":   "128px",
        "container-sm":   "24px",
        "container-lg":   "80px",
      },
      fontFamily: {
        "serif":  ["'Playfair Display'", "Georgia", "serif"],
        "sans":   ["'Outfit'", "system-ui", "sans-serif"],
      },
      fontSize: {
        /* Display — Hero titles */
        "display-xl":  ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg":  ["clamp(2.5rem, 4.5vw, 3.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md":  ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],

        /* Headings */
        "heading-lg":  ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "400", fontStyle: "italic" }],
        "heading-md":  ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.4", fontWeight: "600" }],

        /* Body */
        "body-lg":  ["1.125rem", { lineHeight: "1.8", fontWeight: "400" }],
        "body-md":  ["1rem",     { lineHeight: "1.7", fontWeight: "400" }],
        "body-sm":  ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],

        /* Labels / Kickers */
        "kicker":   ["0.75rem", { lineHeight: "1", letterSpacing: "0.2em", fontWeight: "600" }],
        "label":    ["0.8125rem", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      maxWidth: {
        "editorial": "1200px",
        "prose":     "680px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
