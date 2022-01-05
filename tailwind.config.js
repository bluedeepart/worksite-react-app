module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        sm: "415px",
        desc: "calc(100% - (415px + 60px))",
      },
      flexBasis: {
        sm: "415px",
        desc: "calc(100% - 415px)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: "415px",
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    borderRadius: {
      2: "2px",
      5: "5px",
      10: "10px",
    },
    backgroundImage: {
      checkmark: "url('/src/assets/images/checkmarkVerified.svg')",
    },
    colors: {
      white: "#ffffff",
      black: "000000",
      prime: "#005DF9",
      text_color: "#8F9BB3",
      dark: "#15192A",
      "dark-2": "#191F30",
      surface: "#1F273C",
    },
  },
  plugins: [
    require("tailwindcss"),
    require("postcss"),
    require("autoprefixer"),
  ],
};
