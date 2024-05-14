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
      colors: {
        primaryC: "#d1b06b",
        secondaryC: "#1F2732",
      },
    },
  },
  plugins: [],
};
