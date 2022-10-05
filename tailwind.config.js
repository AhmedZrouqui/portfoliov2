/** @type {import('tailwindcss').Config} */
module.exports = {
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
      }
    },
  },
  plugins: [],
}
