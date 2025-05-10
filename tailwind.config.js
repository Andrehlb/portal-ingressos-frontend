// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Isso permite o Tailwind escanear seus componentes React
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }