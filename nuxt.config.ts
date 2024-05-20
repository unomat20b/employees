import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vuetify-components': ['vuetify/components'],
          },
        },
      },
    },
  },
  ssr: true, // Включение серверного рендеринга
  app: {
    baseURL: '/' // Базовый URL для вашего приложения
  },
});