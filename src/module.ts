import { defineNuxtModule, addComponentsDir, addImportsDir, createResolver } from '@nuxt/kit';

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
    name: '@alexcolls/nuxt-ux',
    configKey: 'nuxtUx',
    compatibility: {
      nuxt: '^3.0.0 || ^4.0.0'
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
    nuxt.options.runtimeConfig.public.nuxtUx = {
      version: options.version,
      logoURL: options.logoURL
    };

    // Register components
    await addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      // Keep path segments in component names (e.g., Layout/Header -> UxLayoutHeader)
      // pathPrefix defaults to true
      prefix: 'Ux',
      global: true
    });

    // Backward-compat alias for Common/* components used internally (e.g., <CommonTxtColor>)
    await addComponentsDir({
      path: resolver.resolve('./runtime/components/Common'),
      pathPrefix: false,
      prefix: 'Common',
      global: true
    });

    // Add composables
    addImportsDir(resolver.resolve('./runtime/composables'));

    // Alias for Layout/* as <Layout*>
    await addComponentsDir({
      path: resolver.resolve('./runtime/components/Layout'),
      pathPrefix: false,
      prefix: 'Layout',
      global: true
    });

    // Alias for Auth/* as <Auth*>
    await addComponentsDir({
      path: resolver.resolve('./runtime/components/Auth'),
      pathPrefix: false,
      prefix: 'Auth',
      global: true
    });

    // Add locales for i18n (if i18n is installed by parent)
    nuxt.hook('i18n:registerModule', (register) => {
      register({
        langDir: resolver.resolve('./runtime/locales'),
        locales: [
          { code: 'en', file: 'en.ts' },
          { code: 'es', file: 'es.ts' },
          { code: 'fr', file: 'fr.ts' }
        ]
      });
    });

    // Configure @nuxt/ui icons (if Nuxt UI is installed by parent)
    if (nuxt.options.ui && typeof nuxt.options.ui === 'object') {
      if (!nuxt.options.ui.icons) {
        nuxt.options.ui.icons = [];
      }
      const existingIcons = Array.isArray(nuxt.options.ui.icons) ? nuxt.options.ui.icons : [];
      nuxt.options.ui.icons = [
        'heroicons',
        'svg-spinners',
        'pepicons-pop',
        'material-symbols',
        'circle-flags',
        'line-md',
        ...existingIcons
      ];
    }
  }
});
