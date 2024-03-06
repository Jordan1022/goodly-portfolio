import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        // Add other font families as needed
      },
      animation: {
        typewriter: "typewriter 2s steps(40) 1s 1 normal both",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
      colors: {
        "green": "#22342E",
        "white": "#FFFFFF",
        "gold": "#F4C85F",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
