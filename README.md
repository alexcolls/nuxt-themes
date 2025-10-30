# @nuxt-ux

An **independent, reusable** Nuxt 4 module providing Layout and Common UI components built with Nuxt UI.

> **Independent Module:** This module can be used in any Nuxt 3+ or Nuxt 4 project, completely separate from the quami application.

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

### Runtime Support

This module works with Nuxt 3+ and Nuxt 4 on multiple JavaScript runtimes:

- **Bun** (recommended - default used by alexcolls) - Fast all-in-one JavaScript runtime
- **Deno** - Secure TypeScript/JavaScript runtime
- **Node.js** - Traditional JavaScript runtime

**Note:** All installation commands below show alternatives for Bun (recommended), Deno, and npm. Choose your preferred runtime.

### 1. Install Required Dependencies

This module has **peer dependencies** that must be installed in your parent Nuxt app first:

```bash
# Using Bun (recommended)
bun add @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt

# Using Deno
deno add npm:@nuxt/ui npm:@nuxtjs/i18n npm:@pinia/nuxt npm:@pinia-plugin-persistedstate/nuxt

# Using npm (Node.js)
npm install --legacy-peer-deps @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
```

> **Note (npm users):** Use `--legacy-peer-deps` flag or create a `.npmrc` file with `legacy-peer-deps=true` to avoid peer dependency conflicts when using npm.

### 2. Install Icon Collections

Install the required icon collections:

```bash
# Using Bun (recommended)
bun add @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols

# Using Deno
deno add npm:@iconify-json/heroicons npm:@iconify-json/line-md npm:@iconify-json/circle-flags npm:@iconify-json/svg-spinners npm:@iconify-json/pepicons-pop npm:@iconify-json/material-symbols

# Using npm (Node.js)
npm install --legacy-peer-deps @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
```

### 3. Install the Module

```bash
# Using Bun (recommended)
bun add @nuxt-ux

# Using Deno
deno add npm:@nuxt-ux

# Using npm (Node.js)
npm install --legacy-peer-deps @nuxt-ux
```

**Or (for npm users) create a `.npmrc` file** in your project root:

```
legacy-peer-deps=true
```

Then install normally with npm:

```bash
npm install @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
npm install @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
npm install @nuxt-ux
```

### 4. Configure Your App

Add the required modules and nuxt-ux to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt-ux", // Add this LAST
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

  // Configure nuxt-ux
  nuxtUx: {
    version: "1.0.0",
    logoURL: "https://your-site.com",
  },
});
```

**Important:** Add `@nuxt-ux` as the **last module** in the modules array to avoid conflicts.

## Quick Start

Once installed and configured, all components are auto-imported and ready to use:

```vue
<template>
  <div>
    <UxLayoutHeader />
    <main>
      <UxCommonContainer>
        <UxCommonTxtTitle>Welcome</UxCommonTxtTitle>
        <UxCommonBtnGradient>Get Started</UxCommonBtnGradient>
      </UxCommonContainer>
    </main>
    <UxLayoutFooter />
  </div>
</template>
```

## Configuration

### Module Options

```ts
export default defineNuxtConfig({
  nuxtUx: {
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
| `UxAuthLogin` | Full-featured animated login form with hover interactions, validation, and success/error states |

**Example:**

```vue
<UxAuthLogin :on-login="handleLogin" />
```

### 🎨 Layout Components (10)

| Component             | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `UxLayoutHeader`        | Fixed header with logo and menu                             |
| `UxLayoutFooter`        | Fixed footer with copyright and theme controls              |
| `UxLayoutLogo`          | Configurable logo component (supports slot for custom logo) |
| `UxLayoutTheme`         | Theme control panel                                         |
| `UxLayoutThemeBtnLight` | Light/Dark/System theme switcher                            |
| `UxLayoutThemeBtnLang`  | Language selector dropdown                                  |
| `UxLayoutThemeBtnColor` | Primary color picker                                        |
| `UxLayoutThemeBtnAudio` | Audio volume controls                                       |
| `UxLayoutThemeBtnVideo` | Video background controls                                   |
| `UxLayoutThemeBtnAuth`  | Authentication status display                               |

**Example:**

```vue
<UxLayoutHeader />
<main>
  <!-- Your content -->
</main>
<UxLayoutFooter />
```

### 🔘 Button Components (11)

| Component            | Description                              |
| -------------------- | ---------------------------------------- |
| `UxCommonBtnGradient`  | Gradient styled button with icon support |
| `UxCommonBtnIcon`      | Icon-only button                         |
| `UxCommonBtnAccept`    | Pre-styled accept/confirm button         |
| `UxCommonBtnCancel`    | Pre-styled cancel button                 |
| `UxCommonBtnClose`     | Close button with icon                   |
| `UxCommonBtnAdd`       | Add/create button with plus icon         |
| `UxCommonBtnEdit`      | Edit button with pencil icon             |
| `UxCommonBtnDelete`    | Delete button with trash icon            |
| `UxCommonBtnUpload`    | Upload button with upload icon           |
| `UxCommonBtnSubmit`    | Submit/send button                       |
| `UxCommonBtnReload`    | Reload/refresh button                    |
| `UxCommonBtnScrollTop` | Scroll to top floating button            |

**Example:**

```vue
<UxCommonBtnGradient icon="i-heroicons-rocket-launch">
  Get Started
</UxCommonBtnGradient>
<UxCommonBtnAccept @click="save" />
<UxCommonBtnCancel @click="cancel" />
```

### ⏳ Loader Components (8)

| Component             | Description                         |
| --------------------- | ----------------------------------- |
| `UxCommonLoader`        | Standard rotating loader            |
| `UxCommonLoaderSimple`  | Minimal loader animation            |
| `UxCommonLoaderInfo`    | Loader with custom info slot        |
| `UxCommonLoaderSlot`    | Fully customizable loader with slot |
| `UxCommonLoadingDots`   | Animated bouncing dots              |
| `UxCommonAiLoader`      | AI-themed loader (default)          |
| `UxCommonAiLoaderBlack` | AI loader in black theme            |
| `UxCommonAiLoaderWhite` | AI loader in white theme            |
| `UxCommonAiLoaderSVG`   | AI loader as SVG                    |
| `UxCommonImgLoader`     | Image loading skeleton              |

**Example:**

```vue
<UxCommonLoader v-if="isLoading" />
<UxCommonLoadingDots />
<UxCommonAiLoader />
```

### 📝 Text Components (5)

| Component           | Description                       |
| ------------------- | --------------------------------- |
| `UxCommonTxtTitle`    | Large page title (h1)             |
| `UxCommonTxtSubtitle` | Subtitle text (h2)                |
| `UxCommonTxtText`     | Body text with consistent styling |
| `UxCommonTxtGradient` | Text with gradient effect         |
| `UxCommonTxtColor`    | Text with primary color           |

**Example:**

```vue
<UxCommonTxtTitle>Welcome to Nuxt UX</UxCommonTxtTitle>
<UxCommonTxtSubtitle>Build faster with ready components</UxCommonTxtSubtitle>
<UxCommonTxtGradient class="text-3xl">Amazing!</UxCommonTxtGradient>
```

### 🛠️ Utility Components (8)

| Component           | Description                       |
| ------------------- | --------------------------------- |
| `UxCommonContainer`   | Responsive container with padding |
| `UxCommonDividerX`    | Horizontal divider line           |
| `UxCommonDividerY`    | Vertical divider line             |
| `UxCommonProgressBar` | Progress indicator bar            |
| `UxCommonSlider`      | Range slider input                |
| `UxCommonClock`       | Current time display              |
| `UxCommonKbd`         | Keyboard key display              |
| `UxCommonKbdRed`      | Keyboard key in red theme         |
| `UxCommonEmptyDB`     | Empty state component             |

**Example:**

```vue
<UxCommonContainer>
  <UxCommonProgressBar :value="75" />
  <UxCommonDividerX />
  <div class="flex gap-2">
    <UxCommonKbd>Ctrl</UxCommonKbd>
    <UxCommonKbd>+</UxCommonKbd>
    <UxCommonKbd>K</UxCommonKbd>
  </div>
</UxCommonContainer>
```

### 🎬 Media Components (4)

| Component              | Description              |
| ---------------------- | ------------------------ |
| `UxCommonBgVideo`        | Background video player  |
| `UxCommonBgVideoYoutube` | YouTube background video |
| `UxCommonImgViewer`      | Image viewer with zoom   |
| `UxCommonImgSkeleton`    | Image loading skeleton   |

**Example:**

```vue
<UxCommonBgVideo v-if="ui.showVideo && ui.videoURL" />
<UxCommonImgViewer :src="imageUrl" />
```

### 📊 Data Display Components (2)

| Component                | Description                          |
| ------------------------ | ------------------------------------ |
| `UxCommonJsonViewer`       | JSON viewer with syntax highlighting |
| `UxCommonJsonViewerColors` | Colored JSON viewer                  |

**Example:**

```vue
<UxCommonJsonViewer :data="myJsonData" />
```

### ✨ Effect Components (1)

| Component           | Description              |
| ------------------- | ------------------------ |
| `UxCommonCursorLight` | Flashlight cursor effect |

**Example:**

```vue
<UxCommonCursorLight v-if="ui.flashlight" />
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

You can provide your own logo by using the slot in `UxLayoutLogo`:

```vue
<UxLayoutLogo>
  <img src="/your-logo.svg" alt="Logo" class="h-14" />
</UxLayoutLogo>
```

Or configure the header directly:

```vue
<UxLayoutHeader>
  <template #logo>
    <YourCustomLogo />
  </template>
</UxLayoutHeader>
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
git clone https://github.com/alexcolls/nuxt-ux.git
cd nuxt-ux

# Install dependencies
bun install   # or: deno install, npm install

# Install playground dependencies
cd playground
bun install   # or: deno install, npm install --legacy-peer-deps
cd ..

# Prepare development environment
bun x nuxt-module-build build --stub   # or: deno run -A npm:nuxt-module-build build --stub, npx nuxt-module-build build --stub
cd playground && bun x nuxi prepare && cd ..   # or: deno run -A npm:nuxi prepare, npx nuxi prepare
```

### Development Commands

```bash
# Start development server
bun start     # or: deno task start, npm start
# or
bun run dev   # or: deno task dev, npm run dev

# Build the module
bun run prepack   # or: deno task prepack, npm run prepack

# Run linter
bun run lint   # or: deno task lint, npm run lint

# Run tests
bun test   # or: deno test, npm test

# Type check
bun run test:types   # or: deno task test:types, npm run test:types
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

**Dual License** - This module is available under two licenses:

### Non-Commercial / Personal Use

For personal, educational, and non-commercial use, this software is licensed under the **Apache License 2.0**.

You are free to:

- Use, copy, and modify the software
- Distribute the software
- Use it for personal projects and learning

### Commercial / Business Use

For commercial use, including:

- Use in commercial products or services
- Use by for-profit organizations
- Use that generates revenue or commercial advantage

You **MUST obtain a separate commercial license**.

**To obtain a commercial license, contact:**

- Alex Colls: [github.com/alexcolls](https://github.com/alexcolls)

### Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

See the [LICENSE](./LICENSE) file for full terms.

---

**Copyright (c) 2025 Alex Colls**

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

- [GitHub Repository](https://github.com/alexcolls/nuxt-ux)
- [Issue Tracker](https://github.com/alexcolls/nuxt-ux/issues)
- [Changelog](./CHANGELOG.md)

### Documentation

- [README](./README.md) - Complete documentation and API reference
- [Installation Guide](./docs/INSTALL.md) - Quick installation steps
- [Getting Started](./docs/GETTING_STARTED.md) - Developer guide for contributors
- [Dependency Isolation](./docs/DEPENDENCY_ISOLATION.md) - Architecture explanation

---

Made with ❤️ by [Alex Colls](https://github.com/alexcolls)
