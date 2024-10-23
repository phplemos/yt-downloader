/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "azure-radiance": {
          50: "#f0f8fe",
          100: "#dceffd",
          200: "#c2e3fb",
          300: "#97d3f9",
          400: "#66baf4",
          500: "#439cee",
          600: "#3584e4",
          700: "#256ad0",
          800: "#2455a9",
          900: "#224a86",
          950: "#192e52",
        },
      },
    },
  },
  plugins: [],
};
