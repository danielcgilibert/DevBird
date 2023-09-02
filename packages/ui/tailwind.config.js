import sharedConfig from 'tailwind-config/tailwind.config'

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  content: ['./src/**/*.{jsx,tsx}']
}
