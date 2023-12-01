/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'vanilla-cream': '#FFF5E1',
        'soft-mint-green': "#C5E1A5",
        'lavendar':"#E1BEE7",
        'bone-white':'#F9F6EE',
        'off-white':'#FAF9F6'
      },
      fontFamily:{
        loginpage:["Agbalumo","Dancing Script", "Neucha", "sans-serif"],
      }
    },
  },
  plugins: [],
}