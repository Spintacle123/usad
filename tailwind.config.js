/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jakartaSansRegular: ["JakarSansRegular"],
        jakartaSansBold: ["JakarSansBold"],
        jakartaSansMedium: ["JakarSansMedium"],
        jakartaSansSemiBold: ["JakarSansSemiBold"],
      },
      colors:{
        "dark-blue": "#512657"
      },
      animation: {
        'fade-in': 'fadeIn 1s ease',
        'to-down': 'toDown 0.5s linear',
        'fade-in-up': 'fadeInUp 0.7s ease',
        'to-left': 'toLeft 0.7s',
        'to-left-bounce': 'toLeftBounce 0.7s ease'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            marginBottom: '-20px',
            marginLeft: '-10px',
            opacity: 0
          },
          '100%': {
            marginBottom: '0px',
            marginLeft: '0px',
            opacity: 1
           },
        },
        toDown: {
          '0%': {
            marginTop: '-30px',
            opacity: 1
          },
          '100%': {
            marginTop: '0px',
            opacity: 1
           },
        },
        fadeInUp: {
          '0%': {
            marginBottom: '-200px',
            opacity: 1
          },
          '30%':{
            marginBottom: '200px',
            opacity: 1
          },
          '100%': {
            marginBottom: '0px',
            opacity: 1
           },
        },
        toLeft: {
          '0%': {
            marginRight: '-10rem',
            opacity: 1
          },
          '100%': {
            marginRight: '0rem',
            opacity: 1
           },
        },
        toLeftBounce: {
          '0%': {
            marginBottom: '-50px',
            opacity: 1
          },
          '100%': {
            marginBottom: '0px',
            opacity: 1
           },
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
