/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  safelist: ["section-red", "section-yellow", "section-green", "section-blue"],
  theme: {
    extend: {
      textColor: {
        prim: "var(--text);",
        alt: "var(--text-alt);",
      },
      backgroundColor: {
        section: "var(--bg);",
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1152px",
        xl: "1440px",
        "2xl": "1920px",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "toggle-default": "url(../img/toggle-def.png)",
        "toggle-close": "url(../img/toggle-close.png)",
      },
      animation: {
        grow: "grow",
        beat: "beat 2s infinite",
        loading: "loading 2s",
        disappear: "disappear 2s forwards",
        appear: "appear 4s",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        beat: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.05)" },
          "20%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.05)" },
          "40%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" },
        },
        loading: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        disappear: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
        appear: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
