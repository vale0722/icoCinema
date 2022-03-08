module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pop: {
          100: "#faf4d7",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
