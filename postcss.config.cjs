module.exports = {
  plugins: [
    require('postcss-nested'), // Enable nesting first
    require('tailwindcss'),    // Then configure Tailwind CSS
    // Other PostCSS plugins if needed
  ],
};