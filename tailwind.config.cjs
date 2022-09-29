/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        red: "#a4232e",
        darkred: "#751a21",
        gold: "#bd9441",
        blue: "#1f1e5b",
        darkblue: "#0b0b20",
      },
    },
  },
  plugins: [],
};
