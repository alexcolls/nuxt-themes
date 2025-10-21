# Quick Installation Guide

**Compatibility:** ✅ Nuxt 3 | ✅ Nuxt 4

## Option 1: Using .npmrc (Recommended)

Create a `.npmrc` file in your project root:

```
legacy-peer-deps=true
```

Then install:

```bash
npm install @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
npm install @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
npm install @nuxt-xui
```

## Option 2: Using --legacy-peer-deps Flag

```bash
npm install --legacy-peer-deps @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
npm install --legacy-peer-deps @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
npm install --legacy-peer-deps @nuxt-xui
```

## Configure nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt-xui", // MUST be last
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "es", iso: "es-ES", name: "Español" },
      { code: "fr", iso: "fr-FR", name: "Français" },
    ],
    defaultLocale: "en",
  },

  nuxtXui: {
    version: "1.0.0",
    logoURL: "https://your-site.com",
  },
});
```

## Start Using Components

All components are auto-imported:

```vue
<template>
  <div>
    <LayoutHeader />
    <main>
      <CommonContainer>
        <CommonTxtTitle>Hello World</CommonTxtTitle>
        <CommonBtnGradient>Get Started</CommonBtnGradient>
      </CommonContainer>
    </main>
    <LayoutFooter />
  </div>
</template>
```

## Troubleshooting

### Error: ERESOLVE could not resolve

**Solution:** Use `--legacy-peer-deps` flag or create `.npmrc` file.

### Components not auto-importing

**Solution:** Ensure `@nuxt-xui` is the **last** module in your `modules` array.

### "Cannot find module" errors

**Solution:** Install all peer dependencies first before installing the module.

---

For more details, see [README.md](./README.md) and [GETTING_STARTED.md](./GETTING_STARTED.md)
