/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Saira", "sans-serif"],
        content: ["Saira Condensed", "sans-serif"],
        misc: ["Fira Sans", "sans-serif"],
      },
      backgroundImage: {
        pokeball: "url('../src/img/pokebola_logo.svg')",
      },
      colors: {
        pokered: "#FF3838",
        pokewhite: "#fafafa",
        pokeblack: "rgba(46, 46, 46, 0.72)",
        pokeyellow: "#FFBD52",
        poketeal: "#2EFF6A",
        pokeorange: "#FF7230",
        pokeblue: "#4AA9FF",
        pokegreen: "#54DC25",
      },
      keyframes: {
        pulso: {
          "0%": { transform: "scale(0.85)", opacity: "0.9" },
          "25%": { transform: " scale(0.9)", opacity: "1" },
          "50%": { transform: "scale(0.85)", opacity: "0.9" },
          "75%": { transform: " scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.85)", opacity: "0.9" },
        },
        pulso1: {
          "0%": { transform: "scale(0.85)", opacity: "0.9" },
          "25%": { transform: " scale(0.9)", opacity: "0.9" },
          "50%": { transform: "scale(0.85)", opacity: "0.9" },
          "75%": { transform: " scale(0.9)", opacity: "0.9" },
          "100%": { transform: "scale(0.85)", opacity: "0.9" },
        },
        pulso2: {
          "0%": { transform: "scale(0.9)" },
          "70%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.9)" },
        },
        pulso3: {
          "0%": { transform: "scale(0.92)" },
          "25%": { transform: "scale(0.88)" },
          "50%": { transform: "scale(0.90)" },
          "75%": { transform: "scale(0.92)" },
          "100%": { transform: "scale(0.94)" },
        },
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
      },
      animation: {
        pulso: "pulso 3.2s ease-in-out infinite",
        pulso1: "pulso1 1.5s infinite",
        pulso2: "pulso2 1s infinite",
        shake: "shake 0.8s infinite alternate",
        pulso3: "pulso3 3.5s infinite",
        bgtransition: "background-color 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
