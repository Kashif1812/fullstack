/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");
// const withForms = require("@tailwindcss/forms")({strategy:'class'});
// const withDarkMode = require("tailwindcss-dark-mode");

module.exports = {
  darkMode: "class",
  // darkMode: "media",
  content: [
    "./src/*/.{html,js,jsx}",
    
  ],

  theme: {
    colors: {
      lightblue: "#e7f0f7",
      lightwhite: "#fbf8f6",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      blue: "#4c3ed8",
      silver: "#ecebff",
      bermuda: "#78dcca",
      gray: "#f5f5f6",
      lightgray: "#747579",
      lightpurple: "#857be4",
      hoverpurple: "#edecfb",
      dot: "#f7c32e",
      bordergray: "#9b9c9f",
      darkteal: "#002e25",

      backgroundwhite: "#f8f6f2",
      textgray: "#838f8c",
      lightteal: "#396c61",

      red: "#d6293e",
      black: "#000000",
      darkblue: "#0f172a",
      loginborder: "#e5e5e5",
      lightgreen: "#e6f8f3",
      peach: "#fbe9eb",
      lightred: "#fbe9eb",
      skyblue: "#e7f6f8",
      goldstar: "#f7c32e",
      gold: "#ffc20e",
      bluegray: "#222529",
      darkgray: "#4b4b4b",
      darkgray2: "#333333",
      darkgray1: "#191b1d",
      hovergray:"#404040",
      brightgreen: "#0cbc87",
      lightgray1: "#dfdfe3",
      lightgray2: "#c8c8c8",
      facebook: "#5D82D1",
      instagram: "#C22B72",
      twitter: "#40BFF5",
      blueteal: "#01485c",
      linkedin: "#238CC8",
      darkteal2: "#004c3f",
      tan: "#f5efe0",
      teal:"#19423a",
      hoverteal:"#f6f9f8",
      lightgreen1: "#aabbad",
      lightorange: "#fff2e7",
      orange: "#fda36d",
      aqua: "#d1e7dd",
      darkgreen: "#146c43",
      turquese: "#17a2b8",
      brown: "#333333",
      borderred: "#cf364a",
      lightwhite: "#f8f8f8",
    },
    screens: {
      // 'sm': [{'min':'300px', 'max':'380px'  }],

      // 'md': '568px',

      xl: [{ min: "1150px", max: "2648px" }],

      lg: [{ min: "260px", max: "1149px" }],
    },
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui'],
      // 'serif': ['ui-serif', 'Georgia', ...],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      dmsans: ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      productsansr: ["productsans-regular"],
      productsansb: ["productsans-bold"],
    },
    extend: {
      // ...
      darkMode: "class",
    },
    extend:
    {
      backgroundImage:{
        loginbackground:"url('https://thumbs.dreamstime.com/z/vendor-management-hologram-futuristic-interface-concept-augmented-virtual-vendor-management-hologram-futuristic-interface-concept-99393326.jpg?w=1200')",
      }
    }
  },
  plugins: [],
};