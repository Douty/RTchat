/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Poppins']
      }
      
    },
    colors: {
      "celadon":"#A7D3A6",
      "mindaro":"#CFE795",
      "olivine":"#A8BB7A",
    },
    screens:{
      'tablet':'768px',
      'desktop':'1024px',
      
    }
  },
  plugins: [],
}

