// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#11453B",
      primaryLight: "#f0f7eb",
      primaryShade: "#d9ebcd",
      dark: "#292A29",
      light: "#ffffff",
      secondary: "#EA4E4B",
      secondaryLight: "#ffe9e7",
      invert: "#B4A572",
    },
    fontFamily: {
      headingBlack: ["MadeMellowBlack"],
      headingBold: ["MadeMellowBold"],
      headingLight: ["MadeMellowLight"],
      headingMd: ["MadeMellowMedium"],
      headingRg: ["MadeMellowRegular"],
      headingSB: ["MadeMellowSemibold"],
      body: ["AeonikRegular"],
      bodyBold: ["Aeonik"],
      bodyLight: ["AeonikLight"],

    },
    extend: {},
  },
  plugins: [],
};
