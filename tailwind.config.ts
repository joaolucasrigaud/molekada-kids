import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#a8e0ff',
        'blue-medium': '#5fb8ff',
        'blue-dark': '#2c4c7c',
        'orange-light': '#ffcba8',
        'orange-vibrant': '#ff7a3d',
        'orange-vibrant-dark': '#e05f25',
        'yellow-light': '#fff8e1',
        'yellow-medium': '#ffe082',
        'green-light': '#a8ffcb',
        'green-medium': '#5fff8f',
        'gray-light': '#f8f9fa',
        'gray-medium': '#e9ecef',
        'gray-dark': '#343a40',
      },
      fontFamily: {
        heading: ["Nunito", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;