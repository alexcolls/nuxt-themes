export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '../src/module'  // nuxt-ux module LAST to avoid conflicts
  ],
  
  devtools: { enabled: true },
  
  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.ts' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.ts' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.ts' }
    ],
    defaultLocale: 'en',
    langDir: 'locales'
  },
  
  // nuxt-ux configuration
  nuxtUx: {
    version: '0.2.0',
    logoURL: 'https://nuxt.com'
  },

  compatibilityDate: '2024-10-20'
});
