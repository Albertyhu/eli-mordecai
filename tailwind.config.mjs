/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      xm: { min: "360px" },
      fontFamily: {
        primaryF: "Cormorant Garamond",
        secondaryC: "Outfit",
      },
      backgroundImage: {
        historyBG: "url('/assets/images/history-background.webp')",
        historyBG_mobile:
          "url('/assets/images/history-background-mobile.webp')",
      },
      colors: {
        primaryC: "#d1b06b",
        secondaryC: "#1F2732",
      },
    },
  },
  plugins: [],
};
