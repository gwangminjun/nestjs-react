/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily:{
        'lilitaOne':['LilitaOne'],
        'OpenSans' : ['OpenSans'],
        'fantasy':['fantasy'],
        'Monoton':['Monoton'],
        'Itim':['Itim'],
      },
      backgroundImage: {
        'loginright': "url('./static/img/login-Right.jpg)",
      }
    },
  },
  plugins: [],
}

