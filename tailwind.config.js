/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "image-from": "rgb(0, 255, 164)",
        "image-to": "rgb(166, 104, 255)",
      },
      minHeight: {
        home: "calc(-175px + 100vh)",
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        tamil: ["Kavivanar", "cursive"],
      },
      boxShadow: {
        image: "0 .5rem 1rem rgba(0,0,0,.4)",
      },
      keyframes: {
        wave: {
          "0%, 60% 100%": { transform: "rotate( 0.0deg)" },
          "10%, 30%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
        },
      },
      animation: {
        wave: "wave 2.5s infinite",
      },
    },
  },
  plugins: [],
};
