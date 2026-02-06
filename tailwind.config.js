module.exports = {
      darkMode: 'class', // Enable dark mode using the 'class' strategy
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              200: '#93c5fd', // Light blue for dark mode
              300: '#60a5fa', // Lighter blue for light mode
              400: '#3b82f6', // Slightly darker blue for hover states
              DEFAULT: '#1e40af', // Default primary color
            },
            secondary: '#1e3a8a',
            accent: '#3b82f6',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
