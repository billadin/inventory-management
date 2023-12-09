/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#59A52C",
        
"secondary": "#0082ff",
        
"accent": "#001bff",
        
"neutral": "#FFFFF",
        
"base-100": "#ffffff",
        
"info": "#00a5d3",
        
"success": "#00ffba",
        
"warning": "#ffa000",
        
"error": "#ff4a5b",
        },
      },
    ],
  },
};

