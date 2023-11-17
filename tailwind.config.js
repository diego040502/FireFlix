/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors:{
      primary: '#e50914',
      secondary: '#141414',
      terciary: '#e5e5e5',
      black: '#09090b',
      gray: 'rgba(109, 109, 110, 0.7)',
      lightgray: 'rgb(189 188 188 / 0.5%)',
      transparent: 'rgba(20, 20, 20, 0.95)'
    },
    extend: {
      backgroundImage: {
        'jojos': 'url(https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/11/Jojos-Bizarre-Adventure_-Stone-Ocean-estrena-trailer-en-el-Netflix-Festival-Japan.jpg)',
        'lockwood': 'url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/01/agencia-lockwood-2935584.jpg?tf=3840x)',
        'sherlock': 'url(https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/07/Sherlock.jpeg)'
      }
    },
  },
  plugins: [],
}

