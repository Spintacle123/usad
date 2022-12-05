/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
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
        'fade-in': 'fadeIn 3s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            marginLeft: '-10px',
            opacity: 0
          },
          '100%': {
            marginLeft: '0px',
            opacity: 1
           },
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
