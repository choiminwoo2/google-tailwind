/** @type {import('tailwindcss').Config} */


const px0_50 = { ...Array.from(Array(51)).map((_, i) => `${i}px`) };
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        gray:{
          "btn": '#f8f9fa',
          "outline": '#dadce0',
          "footer" : '#f2f2f2'
        }
      },
      fontsize: px0_50,
      borderWidth: {
        "0.75": "0.75px"
      },
      boxShadow: {
        '3xl' : '0px 0px 5px 0.6px rgba(0,0,0,0.2);'
      }
    },
  },
  plugins: [],
}

