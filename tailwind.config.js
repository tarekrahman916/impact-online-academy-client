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

          accent: "#ed50d5",

          neutral: "#312B36",

          "base-100": "#E2E1EA",

          info: "#6298DA",

          success: "#17726B",

          warning: "#DBA00A",

          error: "#F96048",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
