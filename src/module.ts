import { defineNuxtModule, addComponentsDir, addImportsDir, createResolver, installModule } from '@nuxt/kit';

export interface ModuleOptions {
  /**
   * Version to display in the footer
   * @default '1.0.0'
   */
  version?: string;
  
  /**
   * Logo URL for the header
   * @default ''
   */
  logoURL?: string;
  
  /**
   * Enable or disable the module
   * @default true
   */
  enabled?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt-xui/layout-ui',
    configKey: 'nuxtXui',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    version: '1.0.0',
    logoURL: '',
    enabled: true
  },
  async setup(options, nuxt) {
    if (!options.enabled) {
      return;
    }

    const resolver = createResolver(import.meta.url);

    // Add runtime config
    nuxt.options.runtimeConfig.public.nuxtXui = {
      version: options.version,
      logoURL: options.logoURL
    };

    // Register components
    await addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      pathPrefix: false,
      prefix: '',
      global: true
    });

    // Add composables
    addImportsDir(resolver.resolve('./runtime/composables'));

    // Add stores
    addImportsDir(resolver.resolve('./runtime/stores'));

    // Ensure peer dependencies are installed
    await installModule('@nuxt/ui');
    await installModule('@nuxtjs/i18n', {
      langDir: resolver.resolve('./runtime/locales'),
      locales: [
        { code: 'en', iso: 'en-US', file: 'en.ts', name: 'English' },
        { code: 'es', iso: 'es-ES', file: 'es.ts', name: 'Español' },
        { code: 'fr', iso: 'fr-FR', file: 'fr.ts', name: 'Français' }
      ],
      defaultLocale: 'en',
      strategy: 'no_prefix'
    });
    await installModule('@pinia/nuxt');
    await installModule('@pinia-plugin-persistedstate/nuxt');

    // Configure @nuxt/ui icons
    nuxt.options.ui = nuxt.options.ui || {};
    nuxt.options.ui.icons = [
      'heroicons',
      'svg-spinners',
      'pepicons-pop',
      'material-symbols',
      'circle-flags',
      'line-md',
      ...(nuxt.options.ui.icons || [])
    ];
  }
});
