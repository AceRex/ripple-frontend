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
      assets1: "#e0f8ea",
      assets2: "#39a266",
      assets3: "#edf5ff",
      assets4: "#468eef",
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
    extend: {
      backgroundImage: {
        curves: "url('./src/Assets/Images/vector (2).png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
