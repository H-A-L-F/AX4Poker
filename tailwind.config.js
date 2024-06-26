/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // colors: {
      //   text: "#FDF0D5",
      //   background: "#003049",
      //   primary: "#C1121F",
      //   secondary: "#780000",
      //   accent: "#669BBC",
      // },
      colors: {
        'text': {
          50: '#fef6e7',
          100: '#fdedce',
          200: '#fadb9e',
          300: '#f8ca6d',
          400: '#f6b83c',
          500: '#f4a60b',
          600: '#c38509',
          700: '#926407',
          800: '#614205',
          900: '#312102',
          950: '#181101',
        },
        'background': {
          50: '#e5f6ff',
          100: '#ccedff',
          200: '#99dbff',
          300: '#66c9ff',
          400: '#33b8ff',
          500: '#00a6ff',
          600: '#0085cc',
          700: '#006399',
          800: '#004266',
          900: '#002133',
          950: '#00111a',
        },
        'primary': {
          50: '#fde8e9',
          100: '#fbd0d3',
          200: '#f6a2a7',
          300: '#f2737b',
          400: '#ee4450',
          500: '#e91624',
          600: '#bb111d',
          700: '#8c0d15',
          800: '#5d090e',
          900: '#2f0407',
          950: '#170204',
        },
        'secondary': {
          50: '#ffe5e5',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000',
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
          950: '#1a0000',
        },
        'accent': {
          50: '#edf3f7',
          100: '#dce8ef',
          200: '#b8d1e0',
          300: '#95b9d0',
          400: '#71a2c1',
          500: '#4e8bb1',
          600: '#3e6f8e',
          700: '#2f536a',
          800: '#1f3847',
          900: '#101c23',
          950: '#080e12',
        },
       },       
      textColor: {
        'default': '#FDF0D5' // default text colornya copas dr color diatas
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
