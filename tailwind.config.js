/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      skew: {  
        '5': '5deg',    // Adding custom skew of 5 degrees  
        '10': '10deg',  // Adding custom skew of 10 degrees  
        '20': '20deg',  // Adding custom skew of 15 degrees  
        '25': '25deg',  // Adding custom skew of 20 degrees  
      },  
    },
  },
  plugins: [],
}
