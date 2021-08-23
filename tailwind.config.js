module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/7": "30%",
      },
    },
    fontFamily: {
      digital: ["digital-7"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
