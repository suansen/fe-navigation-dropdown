module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "neutral-almost-white": "hsl(0, 0%, 98%)",
        "neutral-medium-gray": "hsl(0, 0%, 41%)",
        "neutral-almost-black": "hsl(0, 0%, 8%)"
      },
      fontFamily: {
        primary: ["Epilogue", "sans-serif"]
      },
      screens: {
        xs: "375px"
      }
    }
  },
  plugins: []
};
