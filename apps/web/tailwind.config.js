const sharedConfig = require('tailwind-config/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // include shared ui
    '../../packages/ui/**/*.{jsx,tsx}'
  ]
}
