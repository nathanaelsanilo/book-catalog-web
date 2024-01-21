import forms from '@tailwindcss/forms';
import headlessUi from '@headlessui/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [forms, headlessUi],
};
