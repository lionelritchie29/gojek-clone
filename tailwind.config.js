module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#101820",
        primary: "rgba(0,136,13,1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
