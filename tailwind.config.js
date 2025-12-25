/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',  // 72px
        22: '5.5rem',  // 88px
        26: '6.5rem',  // 104px
        28: '7rem',    // 112px
        30: '7.5rem',  // 120px
        32: '8rem',    // 128px
        36: '9rem',    // 144px
        50: '12.5rem', // 200px
        60: '15rem',   // 240px
      },
    },
  },
  plugins: [],
};
