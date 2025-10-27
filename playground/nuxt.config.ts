export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '../src/module'  // nuxt-xui module LAST to avoid conflicts
  ],
  
  devtools: { enabled: true },
  
  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'es', language: 'es-ES', name: 'Español' },
      { code: 'fr', language: 'fr-FR', name: 'Français' }
    ],
    defaultLocale: 'en'
  },
  
  // nuxt-xui configuration
  nuxtXui: {
    version: '0.2.0',
    logoURL: 'https://nuxt.com'
  },

  compatibilityDate: '2024-10-20'
});
