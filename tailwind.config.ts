import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#087ca2",
                  
          "secondary": "#e3d9da",
                  
          "accent": "#0e1c36",
                  
          "neutral": "#B95D59",
                  
          "base-100": "#809cb0",
                  
          "info": "#ffffff",
                  
          "success": "#84cc16",
                  
          "warning": "#fde047",
                  
          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require('daisyui'),],
};
export default config;
