module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#101820",
        primary: "rgba(0,136,13,1)",
        secondaryLight: "#182430",
      },
    },
    fontFamily: {
      sans: ['"Maison Neue"', "sans-serif"],
      extended: ['"Maison Neue Extended"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
