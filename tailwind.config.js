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
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
