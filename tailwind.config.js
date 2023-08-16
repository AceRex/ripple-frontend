// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#11453B",
      dark: "#292A29",
      light: "#ffffff",
      secondary: "#EA4E4B",
      invert: "#B4A572",
    },
    fontFamily: {
      headingBlack: ["MadeMellowBlack"],
      headingBold: ["MadeMellowBold"],
      headingLight: ["MadeMellowLight"],
      headingMedium: ["MadeMellowMedium"],
      headingReg: ["MadeMellowRegular"],
      headingSB: ["MadeMellowSemibold"],
      body: ["AeonikRegular"],
      bodyBold: ["Aeonik"],
      bodyLight: ["AeonikLight"],
    },
    extend: {},
  },
  plugins: [],
};
