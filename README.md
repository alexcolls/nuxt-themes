# @nuxt-xui/layout-ui

A comprehensive Nuxt 4 module providing reusable Layout and Common UI components built with Nuxt UI.

> **Compatibility:** Nuxt 4 (primary) | Nuxt 3 (supported) ✅

## Features

- 🎨 **50+ Ready-to-Use Components** - Auth, Layout, and Common components (Buttons, Loaders, Text, etc.)
- 🌙 **Dark Mode Support** - Fully integrated theme switching with system preference detection
- 🌍 **i18n Ready** - Multi-language support (English, Spanish, French)
- 💾 **State Persistence** - Pinia stores with automatic state persistence
- 🎯 **TypeScript** - Full TypeScript support
- 🔧 **Highly Configurable** - Customize colors, themes, and behavior
- ⚡ **Auto-Import** - All components and composables are auto-imported
- 🔐 **Authentication UI** - Ready-to-use login components with animations

## Installation

**Compatibility:** Nuxt 3 & Nuxt 4 ✅

> 📖 **Quick Reference:** See [INSTALL.md](./docs/INSTALL.md) for a condensed installation guide  
> 🔧 **Architecture Details:** Read [DEPENDENCY_ISOLATION.md](./docs/DEPENDENCY_ISOLATION.md) to understand how this module manages dependencies

### 1. Install Required Dependencies

This module has **peer dependencies** that must be installed in your parent Nuxt app first:

```bash
npm install --legacy-peer-deps @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
```

> **Note:** Use `--legacy-peer-deps` flag or create a `.npmrc` file with `legacy-peer-deps=true` to avoid peer dependency conflicts.

### 2. Install Icon Collections

Install the required icon collections:

```bash
npm install --legacy-peer-deps @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
```

### 3. Install the Module

```bash
npm install --legacy-peer-deps @nuxt-xui
```

**Or create a `.npmrc` file** in your project root:

```
legacy-peer-deps=true
```

Then install normally:

```bash
npm install @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
npm install @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
npm install @nuxt-xui
```

### 4. Configure Your App

Add the required modules and nuxt-xui to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt-xui", // Add this LAST
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

**Important:** Add `@nuxt-xui` as the **last module** in the modules array to avoid conflicts.

## Quick Start

Once installed and configured, all components are auto-imported and ready to use:

```vue
<template>
  <div>
    <LayoutHeader />
    <main>
      <CommonContainer>
        <CommonTxtTitle>Welcome</CommonTxtTitle>
        <CommonBtnGradient>Get Started</CommonBtnGradient>
      </CommonContainer>
    </main>
    <LayoutFooter />
  </div>
</template>
```

## Configuration

### Module Options

```ts
export default defineNuxtConfig({
  nuxtXui: {
    // Version displayed in footer
    version: "1.0.0",

    // Logo URL for header click action
    logoURL: "https://your-site.com",

    // Enable or disable the module
    enabled: true,
  },
});
```

### Environment Variables

You can also configure the module using environment variables (place in `.env`):

```env
NUXT_PUBLIC_NUXT_XUI_VERSION=1.0.0
NUXT_PUBLIC_NUXT_XUI_LOGO_URL=https://your-site.com
```

## Components

All components are **auto-imported** and ready to use without any imports. Total: **50+ components**.

### 🔐 Authentication Components (1)

| Component   | Description                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------- |
| `AuthLogin` | Full-featured animated login form with hover interactions, validation, and success/error states |

**Example:**

```vue
<AuthLogin :on-login="handleLogin" />
```

### 🎨 Layout Components (10)

| Component             | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `LayoutHeader`        | Fixed header with logo and menu                             |
| `LayoutFooter`        | Fixed footer with copyright and theme controls              |
| `LayoutLogo`          | Configurable logo component (supports slot for custom logo) |
| `LayoutTheme`         | Theme control panel                                         |
| `LayoutThemeBtnLight` | Light/Dark/System theme switcher                            |
| `LayoutThemeBtnLang`  | Language selector dropdown                                  |
| `LayoutThemeBtnColor` | Primary color picker                                        |
| `LayoutThemeBtnAudio` | Audio volume controls                                       |
| `LayoutThemeBtnVideo` | Video background controls                                   |
| `LayoutThemeBtnAuth`  | Authentication status display                               |

**Example:**

```vue
<LayoutHeader />
<main>
  <!-- Your content -->
</main>
<LayoutFooter />
```

### 🔘 Button Components (11)

| Component            | Description                              |
| -------------------- | ---------------------------------------- |
| `CommonBtnGradient`  | Gradient styled button with icon support |
| `CommonBtnIcon`      | Icon-only button                         |
| `CommonBtnAccept`    | Pre-styled accept/confirm button         |
| `CommonBtnCancel`    | Pre-styled cancel button                 |
| `CommonBtnClose`     | Close button with icon                   |
| `CommonBtnAdd`       | Add/create button with plus icon         |
| `CommonBtnEdit`      | Edit button with pencil icon             |
| `CommonBtnDelete`    | Delete button with trash icon            |
| `CommonBtnUpload`    | Upload button with upload icon           |
| `CommonBtnSubmit`    | Submit/send button                       |
| `CommonBtnReload`    | Reload/refresh button                    |
| `CommonBtnScrollTop` | Scroll to top floating button            |

**Example:**

```vue
<CommonBtnGradient icon="i-heroicons-rocket-launch">
  Get Started
</CommonBtnGradient>
<CommonBtnAccept @click="save" />
<CommonBtnCancel @click="cancel" />
```

### ⏳ Loader Components (8)

| Component             | Description                         |
| --------------------- | ----------------------------------- |
| `CommonLoader`        | Standard rotating loader            |
| `CommonLoaderSimple`  | Minimal loader animation            |
| `CommonLoaderInfo`    | Loader with custom info slot        |
| `CommonLoaderSlot`    | Fully customizable loader with slot |
| `CommonLoadingDots`   | Animated bouncing dots              |
| `CommonAiLoader`      | AI-themed loader (default)          |
| `CommonAiLoaderBlack` | AI loader in black theme            |
| `CommonAiLoaderWhite` | AI loader in white theme            |
| `CommonAiLoaderSVG`   | AI loader as SVG                    |
| `CommonImgLoader`     | Image loading skeleton              |

**Example:**

```vue
<CommonLoader v-if="isLoading" />
<CommonLoadingDots />
<CommonAiLoader />
```

### 📝 Text Components (5)

| Component           | Description                       |
| ------------------- | --------------------------------- |
| `CommonTxtTitle`    | Large page title (h1)             |
| `CommonTxtSubtitle` | Subtitle text (h2)                |
| `CommonTxtText`     | Body text with consistent styling |
| `CommonTxtGradient` | Text with gradient effect         |
| `CommonTxtColor`    | Text with primary color           |

**Example:**

```vue
<CommonTxtTitle>Welcome to Nuxt XUI</CommonTxtTitle>
<CommonTxtSubtitle>Build faster with ready components</CommonTxtSubtitle>
<CommonTxtGradient class="text-3xl">Amazing!</CommonTxtGradient>
```

### 🛠️ Utility Components (8)

| Component           | Description                       |
| ------------------- | --------------------------------- |
| `CommonContainer`   | Responsive container with padding |
| `CommonDividerX`    | Horizontal divider line           |
| `CommonDividerY`    | Vertical divider line             |
| `CommonProgressBar` | Progress indicator bar            |
| `CommonSlider`      | Range slider input                |
| `CommonClock`       | Current time display              |
| `CommonKbd`         | Keyboard key display              |
| `CommonKbdRed`      | Keyboard key in red theme         |
| `CommonEmptyDB`     | Empty state component             |

**Example:**

```vue
<CommonContainer>
  <CommonProgressBar :value="75" />
  <CommonDividerX />
  <div class="flex gap-2">
    <CommonKbd>Ctrl</CommonKbd>
    <CommonKbd>+</CommonKbd>
    <CommonKbd>K</CommonKbd>
  </div>
</CommonContainer>
```

### 🎬 Media Components (4)

| Component              | Description              |
| ---------------------- | ------------------------ |
| `CommonBgVideo`        | Background video player  |
| `CommonBgVideoYoutube` | YouTube background video |
| `CommonImgViewer`      | Image viewer with zoom   |
| `CommonImgSkeleton`    | Image loading skeleton   |

**Example:**

```vue
<CommonBgVideo v-if="ui.showVideo && ui.videoURL" />
<CommonImgViewer :src="imageUrl" />
```

### 📊 Data Display Components (2)

| Component                | Description                          |
| ------------------------ | ------------------------------------ |
| `CommonJsonViewer`       | JSON viewer with syntax highlighting |
| `CommonJsonViewerColors` | Colored JSON viewer                  |

**Example:**

```vue
<CommonJsonViewer :data="myJsonData" />
```

### ✨ Effect Components (1)

| Component           | Description              |
| ------------------- | ------------------------ |
| `CommonCursorLight` | Flashlight cursor effect |

**Example:**

```vue
<CommonCursorLight v-if="ui.flashlight" />
```

## Composables

### useStore()

Access all Pinia stores:

```ts
const { ui, auth, app } = useStore();

// UI Store
ui.isDark; // Current theme state
ui.locale; // Current language
ui.primary; // Primary color
ui.flashlight; // Flashlight effect state

// Auth Store
auth.isAuth; // Authentication status
auth.logout(); // Logout function

// App Store
app.isMenuOpen; // Menu state
```

### useLangs()

Get available language options:

```ts
const langs = useLangs();
// Returns: [{ value: 'en', label: 'English', icon: '...' }, ...]
```

## Stores

### UI Store

Manages UI state and preferences:

- Theme (light/dark/system)
- Primary color selection
- Language preferences
- Video background settings
- Flashlight effect
- Volume controls

### Auth Store

Manages authentication state:

- Login status
- User information
- Token management
- Logout functionality

### App Store

Manages application state:

- Menu state
- Modal states
- Selected items
- Processing states

## Customization

### Custom Logo

You can provide your own logo by using the slot in `LayoutLogo`:

```vue
<LayoutLogo>
  <img src="/your-logo.svg" alt="Logo" class="h-14" />
</LayoutLogo>
```

Or configure the header directly:

```vue
<LayoutHeader>
  <template #logo>
    <YourCustomLogo />
  </template>
</LayoutHeader>
```

### Extending Stores

You can extend the stores in your application:

```ts
// composables/useAuthExtended.ts
export const useAuthExtended = () => {
  const authStore = useAuthStore();

  const loginWithCustomProvider = async (credentials) => {
    // Your custom logic
    authStore.isAuth = true;
  };

  return {
    ...authStore,
    loginWithCustomProvider,
  };
};
```

### Theme Colors

The module uses Tailwind CSS and Nuxt UI's color system. Configure colors in your `app.config.ts`:

```ts
export default defineAppConfig({
  ui: {
    primary: "blue",
    gray: "slate",
  },
});
```

## i18n Configuration

The module includes translations for English, Spanish, and French. To add more languages or override existing translations, configure `@nuxtjs/i18n` in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  i18n: {
    locales: [
      { code: "en", file: "en.ts" },
      { code: "es", file: "es.ts" },
      { code: "de", file: "de.ts" }, // Add your language
    ],
    langDir: "locales",
    defaultLocale: "en",
  },
});
```

## Video Background Configuration

Some components support video backgrounds:

```ts
const { ui } = useStore();

// Set video URL
ui.videoURL = "https://example.com/video.mp4";
ui.showVideo = true;
ui.videoOpacity = 0.5;
ui.volumeVideo = 0.8;

// Add video to playlist
ui.addVideo("https://example.com/another-video.mp4");
```

## Development

> 🚀 **Getting Started Guide:** See [GETTING_STARTED.md](./docs/GETTING_STARTED.md) for a complete developer guide

### Setup

```bash
# Clone the repository
git clone https://github.com/alexcolls/nuxt-xui.git
cd nuxt-xui

# Install dependencies (uses .npmrc with legacy-peer-deps)
npm install

# Install playground dependencies
cd playground
npm install --legacy-peer-deps
cd ..

# Prepare development environment
npx nuxt-module-build build --stub
cd playground && npx nuxi prepare && cd ..
```

### Development Commands

```bash
# Start development server
npm start
# or
npm run dev

# Build the module
npm run prepack

# Run linter
npm run lint

# Run tests
npm test

# Type check
npm run test:types
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m '✨ Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Guidelines

- Follow the existing code style
- Write meaningful commit messages (use emojis ✨)
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Reporting Issues

Found a bug? Have a feature request?

- Check if the issue already exists
- Use the issue templates
- Provide detailed information and reproduction steps

## License

[MIT License](./LICENSE)

Copyright (c) 2025 [Alex Colls](https://github.com/alexcolls)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Credits

- [Nuxt 3](https://nuxt.com/) - The Intuitive Vue Framework
- [Nuxt UI](https://ui.nuxt.com/) - Fully styled and customizable components
- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Pinia](https://pinia.vuejs.org/) - The Vue Store
- [i18n](https://i18n.nuxtjs.org/) - Internationalization

### Acknowledgments

- Nuxt community for the amazing ecosystem
- All contributors who help improve this module

## Support

If you find this project useful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 👤 Contributing code
- 💬 Sharing with others

## Links

### Repository

- [GitHub Repository](https://github.com/alexcolls/nuxt-xui)
- [Issue Tracker](https://github.com/alexcolls/nuxt-xui/issues)
- [Changelog](./CHANGELOG.md)

### Documentation

- [README](./README.md) - Complete documentation and API reference
- [Installation Guide](./docs/INSTALL.md) - Quick installation steps
- [Getting Started](./docs/GETTING_STARTED.md) - Developer guide for contributors
- [Dependency Isolation](./docs/DEPENDENCY_ISOLATION.md) - Architecture explanation

---

Made with ❤️ by [Alex Colls](https://github.com/alexcolls)
