/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#caed80",
        
"secondary": "#e07fc3",
        
"accent": "#ccf731",
        
"neutral": "#151320",
        
"base-100": "#f8f9fb",
        
"info": "#5d86ee",
        
"success": "#1dbf86",
        
"warning": "#c3a304",
        
"error": "#f93452",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

