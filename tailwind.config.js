/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode support
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--primary-50) / <alpha-value>)",
          75: "rgb(var(--primary-75) / <alpha-value>)",
          100: "rgb(var(--primary-100) / <alpha-value>)",
          200: "rgb(var(--primary-200) / <alpha-value>)",
          300: "rgb(var(--primary-300) / <alpha-value>)",
          400: "rgb(var(--primary-400) / <alpha-value>)",
          500: "rgb(var(--primary-500) / <alpha-value>)",
        },
        neutral: {
          10: "rgb(var(--neutral-10) / <alpha-value>)",
          20: "rgb(var(--neutral-20) / <alpha-value>)",
          30: "rgb(var(--neutral-30) / <alpha-value>)",
          50: "rgb(var(--neutral-50) / <alpha-value>)",
          100: "rgb(var(--neutral-100) / <alpha-value>)",
          200: "rgb(var(--neutral-200) / <alpha-value>)",
          300: "rgb(var(--neutral-300) / <alpha-value>)",
          500: "rgb(var(--neutral-500) / <alpha-value>)",
        },
        success: {
          50: "rgb(var(--success-50) / <alpha-value>)",
          75: "rgb(var(--success-75) / <alpha-value>)",
          100: "rgb(var(--success-100) / <alpha-value>)",
          200: "rgb(var(--success-200) / <alpha-value>)",
          300: "rgb(var(--success-300) / <alpha-value>)",
          400: "rgb(var(--success-400) / <alpha-value>)",
          500: "rgb(var(--success-500) / <alpha-value>)",
        },
        danger: {
          50: "rgb(var(--danger-50) / <alpha-value>)",
          75: "rgb(var(--danger-75) / <alpha-value>)",
          100: "rgb(var(--danger-100) / <alpha-value>)",
          200: "rgb(var(--danger-200) / <alpha-value>)",
          300: "rgb(var(--danger-300) / <alpha-value>)",
          400: "rgb(var(--danger-400) / <alpha-value>)",
          500: "rgb(var(--danger-500) / <alpha-value>)",
        },
        warning: {
          50: "rgb(var(--warning-50) / <alpha-value>)",
          75: "rgb(var(--warning-75) / <alpha-value>)",
          100: "rgb(var(--warning-100) / <alpha-value>)",
          200: "rgb(var(--warning-200) / <alpha-value>)",
          300: "rgb(var(--warning-300) / <alpha-value>)",
          400: "rgb(var(--warning-400) / <alpha-value>)",
          500: "rgb(var(--warning-500) / <alpha-value>)",
        },
        info: {
          50: "rgb(var(--info-50) / <alpha-value>)",
          75: "rgb(var(--info-75) / <alpha-value>)",
          100: "rgb(var(--info-100) / <alpha-value>)",
          200: "rgb(var(--info-200) / <alpha-value>)",
          300: "rgb(var(--info-300) / <alpha-value>)",
          400: "rgb(var(--info-400) / <alpha-value>)",
          500: "rgb(var(--info-500) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};

