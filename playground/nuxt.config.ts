export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '../src/module'  // nuxt-xui module LAST to avoid conflicts
  ],
  
  devtools: { enabled: true },
  
  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'es', iso: 'es-ES', name: 'Español' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' }
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
