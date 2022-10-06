/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        paper: '#F4F2EC',
        cappucino: '#ECE4D4',
        blakish: '#3D3D3D',
        cream: '#ECE4CC',
        primary: "#B4B4A6",
        lighter: '#ECECDC'
      },
      fontFamily: {
        magilio: ['Magilio', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      maxWidth: {
        '1920px': '1920px',
        '1020px': '1020px' 
      },
      width: {
        '325px': '325px'
      },
      height: {
        '240px': '240px'
      },
      spacing: {
        '-10px': '-10px'
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [],
}
