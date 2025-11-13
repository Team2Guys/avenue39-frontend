/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      screens: {
        cxs: "320px",
        cxxs: "375px",
      },
    },
  },
  plugins: [],
};
