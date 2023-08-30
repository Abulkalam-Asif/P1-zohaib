/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      // => @media (max-width: 1536px) { ... }
      'xl': { 'max': '1280px' },
      // => @media (max-width: 1280px) { ... }
      'lg': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }
      'md': { 'max': '768px' },
      // => @media (max-width: 768px) { ... }
      'sm': { 'max': '640px' },
      // => @media (max-width: 640px) { ... }
      'xs': { 'max': '480px' },
      // => @media (max-width: 640px) { ... }
    },
    extend: {
      borderWidth: {
        "1": "1px",
      },
      transitionProperty: {
        'right': 'right',
        'height': 'height',
      },
      fontSize: {
        "xxs": "0.5rem"
      },
      fontFamily: {
        primary: ['Lato', 'sans-serif']
      },
      colors: {
        darkBlue: "#0058b2",
        lightBlue: "#1287ff",
        extraLightBlue: "#ebf2f9",
        darkGreen: "#208924",
        lightGreen: "#46b04a"
      },
      brightness: {
        30: '.30',
      },
      minWidth: {
        10: "10rem",
        17: "17rem",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}