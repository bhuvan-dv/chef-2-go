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
        'off-white':'#FAF9F6',
        'main-background':'#fefefe',
      },
      fontFamily:{
        'loginpage':["Agbalumo","Dancing Script", "Neucha", "sans-serif"],
        'navbar-right':['Questa Sans', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Tahoma', 'sans-serif'],
        'left-navbar-link':['Morion', 'Arial Narrow', 'Arial', 'sans-serif'],
        'Nova-Square':'Nova Square',
        'Morion':'Morion'
      },
      textColor:{
        'lavendar':"#E1BEE7",
        'bone-white':'#F9F6EE',
        'off-white':'#FAF9F6',
        'soft-mint-green': "#39514f",
      },
    },
  },
  plugins: [],
}