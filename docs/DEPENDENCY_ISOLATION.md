# Dependency Isolation

This document explains how `@nuxt-xui` manages dependencies to avoid conflicts with parent applications.

## Architecture

The module uses **peer dependencies** instead of automatically installing dependencies. This prevents conflicts and version mismatches with the parent Nuxt application.

## How It Works

### ❌ What We DON'T Do

```ts
// WRONG - This causes conflicts
await installModule("@nuxt/ui");
await installModule("@nuxtjs/i18n");
await installModule("@pinia/nuxt");
```

### ✅ What We DO

```ts
// RIGHT - Hook into existing modules
nuxt.hook('i18n:registerModule', (register) => {
  register({
    langDir: resolver.resolve('./runtime/locales'),
    locales: [...]
  });
});

// Configure Nuxt UI only if it exists
if (nuxt.options.ui) {
  nuxt.options.ui.icons = [...existingIcons, ...ourIcons];
}
```

## Installation Order

**Critical:** The parent app must install peer dependencies BEFORE installing this module.

### Step 1: Install Peer Dependencies

```bash
npm install @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
npm install @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
```

### Step 2: Install the Module

```bash
npm install @nuxt-xui
```

### Step 3: Configure `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui", // 1. Install Nuxt UI first
    "@nuxtjs/i18n", // 2. Install i18n
    "@pinia/nuxt", // 3. Install Pinia
    "@pinia-plugin-persistedstate/nuxt", // 4. Install Pinia persistence
    "@nuxt-xui", // 5. Install nuxt-xui LAST
  ],

  // Configure i18n
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "es", iso: "es-ES", name: "Español" },
      { code: "fr", iso: "fr-FR", name: "Français" },
    ],
    defaultLocale: "en",
  },

  // Configure nuxt-xui
  nuxtXui: {
    version: "1.0.0",
    logoURL: "https://your-site.com",
  },
});
```

## Why This Matters

### 1. **Avoids Version Conflicts**

If the parent app uses `@nuxt/ui@2.21.0` and we try to install `@nuxt/ui@2.20.0`, there would be conflicts.

### 2. **Prevents Duplicate Registrations**

Installing the same module twice (once by parent, once by us) can cause:

- Duplicate components
- Double-registered stores
- Conflicting configurations

### 3. **Respects Parent Configuration**

The parent app might have custom i18n settings. We hook into their setup instead of overriding it.

### 4. **Cleaner Module Resolution**

Each module is installed once at the parent level, making the `node_modules` structure cleaner.

## Troubleshooting

### Error: "Cannot find module '@nuxt/ui'"

**Cause:** Peer dependencies not installed.

**Solution:** Install peer dependencies first:

```bash
npm install @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
```

### Error: "Module '@nuxtjs/i18n' is not compatible"

**Cause:** Wrong module order in `nuxt.config.ts`.

**Solution:** Ensure `@nuxt-xui` is the **last** module in the array.

### Components Not Auto-Importing

**Cause:** Module not properly registered.

**Solution:** Check that all peer dependencies are installed and the module is in the `modules` array.

## For Module Developers

If you're forking or modifying this module:

1. **Never use `installModule()`** for peer dependencies
2. **Always hook into existing modules** using Nuxt hooks
3. **Check if modules exist** before configuring them
4. **Document peer dependencies** clearly
5. **Add version constraints** in `package.json` peerDependencies

## Technical Details

### Module Registration

The module registers itself without force-installing dependencies:

```ts
export default defineNuxtModule<ModuleOptions>({
  async setup(options, nuxt) {
    // Add our components
    await addComponentsDir({...});

    // Hook into i18n (if it exists)
    nuxt.hook('i18n:registerModule', (register) => {
      register({ locales: [...] });
    });

    // Configure Nuxt UI (if it exists)
    if (nuxt.options.ui) {
      nuxt.options.ui.icons = [...];
    }
  }
});
```

### Component Resolution

Components are registered globally with no prefix:

```ts
await addComponentsDir({
  path: resolver.resolve("./runtime/components"),
  pathPrefix: false,
  prefix: "", // No prefix - components use their folder names
  global: true, // Auto-imported globally
});
```

This means:

- `Auth/Login.vue` → `<AuthLogin />`
- `Common/BtnGradient.vue` → `<CommonBtnGradient />`
- `Layout/Header.vue` → `<LayoutHeader />`

## Related Files

- `src/module.ts` - Main module setup
- `package.json` - Peer dependencies list
- `README.md` - Installation instructions
- `playground/nuxt.config.ts` - Example configuration

---

**Remember:** Always install peer dependencies BEFORE installing this module! 🚀
