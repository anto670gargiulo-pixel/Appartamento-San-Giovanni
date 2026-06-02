/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-bright": "#f9f9f9",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#dadada",
        "on-tertiary-fixed-variant": "#4a463f",
        "on-surface-variant": "#42474c",
        "on-tertiary-container": "#3e3b34",
        "primary": "#486173",
        "on-primary-fixed-variant": "#304a5a",
        "surface-tint": "#486173",
        "secondary-fixed": "#ffdbd0",
        "on-tertiary-fixed": "#1e1b15",
        "surface-container-highest": "#e2e2e2",
        "on-secondary-container": "#795950",
        "on-tertiary": "#ffffff",
        "inverse-primary": "#b0cade",
        "primary-container": "#8fa9bc",
        "error-container": "#ffdad6",
        "outline-variant": "#c2c7cc",
        "outline": "#73787c",
        "tertiary-fixed-dim": "#ccc6bc",
        "surface-container": "#eeeeee",
        "secondary-container": "#fed3c7",
        "primary-fixed": "#cbe6fa",
        "surface-container-high": "#e8e8e8",
        "surface": "#f9f9f9",
        "primary-fixed-dim": "#b0cade",
        "on-primary-container": "#253e4e",
        "secondary": "#77574d",
        "on-primary-fixed": "#011e2d",
        "secondary-fixed-dim": "#e7bdb1",
        "on-secondary-fixed": "#2c160e",
        "on-background": "#1a1c1c",
        "inverse-on-surface": "#f0f1f1",
        "error": "#ba1a1a",
        "tertiary": "#625e56",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "surface-container-low": "#f3f3f4",
        "on-primary": "#ffffff",
        "inverse-surface": "#2f3131",
        "tertiary-container": "#aba59c",
        "surface-variant": "#e2e2e2",
        "on-error-container": "#93000a",
        "background": "#f9f9f9",
        "tertiary-fixed": "#e8e2d8",
        "on-surface": "#1a1c1c",
        "on-secondary-fixed-variant": "#5d4037"
      },
      borderRadius: {
        "sm": "0.125rem",
        "DEFAULT": "0.25rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      boxShadow: {
        "ambient": "0px 12px 24px rgba(93, 64, 55, 0.08)"
      },
      spacing: {
        "unit": "8px",
        "gutter": "16px",
        "section-gap-mobile": "48px",
        "section-gap-desktop": "96px",
        "container-padding-mobile": "24px",
        "container-padding-desktop": "80px"
      },
      fontFamily: {
        "body-md": ["Inter"],
        "display-lg": ["Playfair Display"],
        "body-lg": ["Inter"],
        "label-sm": ["Inter"],
        "headline-lg-mobile": ["Playfair Display"],
        "headline-md": ["Playfair Display"],
        "headline-lg": ["Playfair Display"]
      },
      fontSize: {
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "500"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
