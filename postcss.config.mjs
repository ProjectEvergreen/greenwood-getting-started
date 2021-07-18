export default {
  plugins: [
    (await import('tailwindcss')).default,
    (await import('autoprefixer')).default
  ]
};