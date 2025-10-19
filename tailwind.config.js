/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        jet: "hsl(0, 0%, 4%)",
        charcoal: "hsl(0, 0%, 10%)",
        umbra: "hsl(221, 12%, 14%)",
        fog: "hsl(216, 4%, 51%)",
        dove: "hsl(222, 19%, 86%)",
        sunset: "hsl(22, 100%, 51.6%)",
        dawn: "hsl(37, 100%, 76%)"
      }
    }
  },
  plugins: []
};
