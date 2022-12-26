/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffa500",

          secondary: "#ffa500",

          accent: "#db2877",

          neutral: "#222222",

          "base-100": "#f9f2ed",

          info: "#b9bcc3",

          success: "#db2877",

          warning: "#F5CA2E",

          error: "#E02E4F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {},
  },
};
