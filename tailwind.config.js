/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#192551",
          secondary: "#0e7490",
          accent: "#0ddd14",
          neutral: "#1D1D25",
          "base-100": "#FDFCFD",
          info: "#8694DA",
          success: "#2BBF67",
          warning: "#EA8B06",
          error: "#FB043E",
        },
        mytheme: {
          primary: "#192551",
          secondary: "#0e7490",
          accent: "#9e2f00",
          neutral: "#1A1820",
          "base-100": "#F5EAF5",
          info: "#598BE8",
          success: "#166041",
          warning: "#F8A94F",
          error: "#E13E33",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
