// https://nuxt.com/docs/api/configuration/nuxt-config
import {definePreset} from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {}
    }
});

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/css/global.css",
  "primeicons/primeicons.css",
],
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
  ],
  primevue: {
      options: {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.dark'
        }
      }
    }
  },

  runtimeConfig: {
    public: {
    BASE_URL: process.env.BASE_URL || 'https://api.example.com',
    env: process.env.NUXT_PUBLIC_ENV || "development",

    },
    private: {
    API_KEY: process.env.NUXT_API_KEY,
    },
},

})