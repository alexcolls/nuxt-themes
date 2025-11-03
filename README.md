# Nuxt UX

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

An **independent, production-ready** Nuxt 3/4 module providing 85+ polished UI components built with Nuxt UI and Tailwind CSS.

> **Standalone Module:** Use in any Nuxt 3+ or Nuxt 4 project as a comprehensive UI component library.

> **Compatibility:** ✅ Nuxt 3 | ✅ Nuxt 4

## ✨ Features

- 🎨 **85+ Ready-to-Use Components** - Auth, Layout, and Common UI components with consistent design
- 🌙 **Dark Mode Support** - Seamless light/dark/system theme switching with state persistence
- 🌍 **i18n Ready** - Built-in multi-language support (English, Spanish, French)
- 💾 **State Management** - Built-in reactive state management with Nuxt's useState
- 🎯 **TypeScript First** - Full TypeScript support with comprehensive type definitions
- 🔧 **Highly Customizable** - Tailwind CSS theming with configurable colors and behavior
- ⚡ **Auto-Import Everything** - Zero-config component and composable imports
- 🔐 **Authentication UI** - Animated login forms with validation and state management
- 🎬 **Media Components** - Video backgrounds, image viewers, and loading states
- 🎭 **Special Effects** - Cursor light effects, animated loaders, and gradient components

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
bun add @nuxt/ui @nuxtjs/i18n

# Using Deno
deno add npm:@nuxt/ui npm:@nuxtjs/i18n

# Using npm (Node.js)
npm install --legacy-peer-deps @nuxt/ui @nuxtjs/i18n
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
bun add @alexcolls/nuxt-ux

# Using Deno
deno add npm:@alexcolls/nuxt-ux

# Using npm (Node.js)
npm install --legacy-peer-deps @alexcolls/nuxt-ux
```

**Or (for npm users) create a `.npmrc` file** in your project root:

```
legacy-peer-deps=true
```

Then install normally with npm:

```bash
npm install @nuxt/ui @nuxtjs/i18n
npm install @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
npm install @alexcolls/nuxt-ux
```

### 4. Configure Your App

Add the required modules and nuxt-ux to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@alexcolls/nuxt-ux", // Add this LAST
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
    version: "0.6.0",
    logoURL: "https://your-site.com",
  },
});
```

**Important:** Add `@alexcolls/nuxt-ux` as the **last module** in the modules array to avoid conflicts.

## 🚀 Quick Start

Once installed and configured, all components are auto-imported and ready to use:

### Basic Layout

```vue
<template>
  <div class="min-h-screen">
    <UxLayoutHeader />

    <main class="pt-20">
      <UxCommonContainer>
        <div class="py-12 space-y-8">
          <div class="text-center space-y-4">
            <UxCommonTxtTitle>Welcome to Your App</UxCommonTxtTitle>
            <UxCommonTxtSubtitle
              >Built with Nuxt UX components</UxCommonTxtSubtitle
            >
          </div>

          <UxCommonDividerX />

          <div class="flex flex-wrap gap-4 justify-center">
            <UxCommonBtnGradient icon="i-heroicons-rocket-launch">
              Get Started
            </UxCommonBtnGradient>
            <UxCommonBtnAccept>Save</UxCommonBtnAccept>
            <UxCommonBtnCancel>Cancel</UxCommonBtnCancel>
          </div>
        </div>
      </UxCommonContainer>
    </main>

    <UxLayoutFooter />
    <UxCommonBtnScrollTop />
  </div>
</template>
```

### Login Page Example

```vue
<template>
  <div
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <!-- Optional background video -->
    <UxLayoutBgVideo v-if="ui.showVideo && ui.videoURL" />

    <!-- Animated background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-gray-900/50 to-primary-900/20"
    />

    <!-- Login form -->
    <div class="relative z-10">
      <UxAuthLogin :on-login="handleLogin" />
    </div>

    <!-- Optional cursor effect -->
    <UxCommonCursorLight v-if="ui.flashlight" />
  </div>
</template>

<script setup lang="ts">
const { ui, auth } = useNuxtUxStore();

const handleLogin = async (user: string, pass: string): Promise<boolean> => {
  // Your login logic here
  if (user.length > 3 && pass.length > 8) {
    auth.isAuth = true;
    auth.user = { name: user };
    await navigateTo("/dashboard");
    return true;
  }
  return false;
};
</script>
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

## 📚 Components Library

All components are **auto-imported** and ready to use without any imports. Total: **85 components** organized into three main categories.

### 🔐 Authentication Components (1)

| Component     | Description                                                                            | Props                                       |
| ------------- | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| `UxAuthLogin` | Animated login form with hover reveal, validation states, and success/error animations | `onLogin: (user, pass) => Promise<boolean>` |

**Example:**

```vue
<template>
  <UxAuthLogin :on-login="handleLogin" />
</template>

<script setup>
const handleLogin = async (user, pass) => {
  // Return true for success, false for error
  return await authenticate(user, pass);
};
</script>
```

### 🏗️ Layout Components (8)

| Component                | Description                              | Key Features                       |
| ------------------------ | ---------------------------------------- | ---------------------------------- |
| `UxLayoutHeader`         | Fixed header with logo and navigation    | Auto-responsive, theme integration |
| `UxLayoutFooter`         | Footer with copyright and theme controls | Auto-year update, theme buttons    |
| `UxLayoutLogo`           | Configurable logo with click action      | Custom slot support                |
| `UxLayoutBgVideo`        | Background video player                  | Volume control, opacity settings   |
| `UxLayoutBgVideoYoutube` | YouTube background video player          | Embedded player support            |

#### Theme Control Components (5)

| Component               | Description                      | Features                    |
| ----------------------- | -------------------------------- | --------------------------- |
| `UxLayoutTheme`         | Complete theme control panel     | All theme controls in one   |
| `UxLayoutThemeBtnLight` | Light/Dark/System theme switcher | System preference detection |
| `UxLayoutThemeBtnLang`  | Language selector dropdown       | Flag icons, persistence     |
| `UxLayoutThemeBtnColor` | Primary color picker             | 10+ color options           |
| `UxLayoutThemeBtnAudio` | Audio volume controls            | FX and video volume         |
| `UxLayoutThemeBtnVideo` | Video background controls        | Play/pause, opacity         |
| `UxLayoutThemeBtnAuth`  | Authentication status button     | Login/logout actions        |

**Layout Example:**

```vue
<template>
  <div class="min-h-screen">
    <UxLayoutHeader />
    <main class="pt-20">
      <!-- Your content -->
    </main>
    <UxLayoutFooter />

    <!-- Optional background video -->
    <UxLayoutBgVideo v-if="showVideo" />
  </div>
</template>
```

### 🎨 Common Components (76)

The largest category with components for every use case, organized by type:

#### Button Components (15)

| Component              | Description                              | Use Case              |
| ---------------------- | ---------------------------------------- | --------------------- |
| `UxCommonBtn`          | Base button component                    | General purpose       |
| `UxCommonBtnGradient`  | Gradient styled button with icon support | Primary actions, CTAs |
| `UxCommonBtnIcon`      | Icon-only button                         | Tool bars, compact UI |
| `UxCommonBtnAccept`    | Pre-styled accept/confirm button         | Form submissions      |
| `UxCommonBtnCancel`    | Pre-styled cancel button                 | Form cancellation     |
| `UxCommonBtnClose`     | Close button with X icon                 | Modals, dialogs       |
| `UxCommonBtnAdd`       | Add/create button with plus icon         | Adding items          |
| `UxCommonBtnEdit`      | Edit button with pencil icon             | Edit actions          |
| `UxCommonBtnDelete`    | Delete button with trash icon            | Destructive actions   |
| `UxCommonBtnUpload`    | Upload button with upload icon           | File uploads          |
| `UxCommonBtnSubmit`    | Submit/send button                       | Form submissions      |
| `UxCommonBtnReload`    | Reload/refresh button                    | Refresh data          |
| `UxCommonBtnScrollTop` | Scroll to top floating button            | Long pages            |
| `UxCommonBtnXs`        | Extra small button                       | Compact interfaces    |
| `UxCommonMagicBtn`     | Animated magic button                    | Special actions       |

**Button Examples:**

```vue
<template>
  <div class="space-x-4">
    <!-- Primary actions -->
    <UxCommonBtnGradient icon="i-heroicons-rocket-launch">
      Get Started
    </UxCommonBtnGradient>

    <!-- Form actions -->
    <UxCommonBtnAccept @click="save">Save</UxCommonBtnAccept>
    <UxCommonBtnCancel @click="cancel">Cancel</UxCommonBtnCancel>

    <!-- Icon actions -->
    <UxCommonBtnAdd @click="addItem" />
    <UxCommonBtnEdit @click="editItem" />
    <UxCommonBtnDelete @click="deleteItem" />

    <!-- Utility -->
    <UxCommonBtnScrollTop />
  </div>
</template>
```

#### Loading Components (9)

| Component               | Description                         | Best For                 |
| ----------------------- | ----------------------------------- | ------------------------ |
| `UxCommonLoader`        | Standard rotating loader            | General loading states   |
| `UxCommonLoaderSimple`  | Minimal loader animation            | Subtle loading           |
| `UxCommonLoaderInfo`    | Loader with custom info slot        | Descriptive loading      |
| `UxCommonLoaderSlot`    | Fully customizable loader with slot | Custom loading UI        |
| `UxCommonLoadingDots`   | Animated bouncing dots              | Modern loading animation |
| `UxCommonAiLoader`      | AI-themed loader (default)          | AI/ML applications       |
| `UxCommonAiLoaderBlack` | AI loader in black theme            | Dark themes              |
| `UxCommonAiLoaderWhite` | AI loader in white theme            | Light themes             |
| `UxCommonAiLoaderSVG`   | AI loader as SVG                    | Scalable applications    |

**Loading Examples:**

```vue
<template>
  <div>
    <!-- Basic loading -->
    <UxCommonLoader v-if="isLoading" />

    <!-- Animated dots -->
    <UxCommonLoadingDots v-if="isProcessing" />

    <!-- AI themed -->
    <UxCommonAiLoader v-if="isThinking" />

    <!-- Custom loader with info -->
    <UxCommonLoaderInfo v-if="isUploading">
      <template #info>Uploading {{ filename }}...</template>
    </UxCommonLoaderInfo>
  </div>
</template>
```

#### Text & Typography Components (10)

| Component              | Description                       | HTML Tag |
| ---------------------- | --------------------------------- | -------- |
| `UxCommonTxtTitle`     | Large page title                  | h1       |
| `UxCommonTxtSubtitle`  | Subtitle text                     | h2       |
| `UxCommonTxtText`      | Body text with consistent styling | p        |
| `UxCommonTxtGradient`  | Text with gradient effect         | span     |
| `UxCommonTxtColor`     | Text with primary color           | span     |
| `UxCommonText`         | Base text component               | span     |
| `UxCommonTextGradient` | Alternative gradient text         | span     |
| `UxCommonH1`           | Heading 1                         | h1       |
| `UxCommonH2`           | Heading 2                         | h2       |
| `UxCommonH3`           | Heading 3                         | h3       |
| `UxCommonH4`           | Heading 4                         | h4       |

**Typography Examples:**

```vue
<template>
  <div class="space-y-4">
    <!-- Headlines -->
    <UxCommonTxtTitle>Welcome to Nuxt UX</UxCommonTxtTitle>
    <UxCommonTxtSubtitle
      >Build faster with ready components</UxCommonTxtSubtitle
    >

    <!-- Styled text -->
    <UxCommonTxtGradient class="text-3xl font-bold">
      Amazing Gradient Text!
    </UxCommonTxtGradient>

    <UxCommonTxtColor>Text in primary color</UxCommonTxtColor>

    <!-- Regular content -->
    <UxCommonTxtText>
      This is body text with consistent styling across your application.
    </UxCommonTxtText>
  </div>
</template>
```

#### UI & Layout Utilities (12)

| Component             | Description                       | Use Case                |
| --------------------- | --------------------------------- | ----------------------- |
| `UxCommonContainer`   | Responsive container with padding | Page layouts            |
| `UxCommonDividerX`    | Horizontal divider line           | Section separation      |
| `UxCommonDividerY`    | Vertical divider line             | Inline separation       |
| `UxCommonProgressBar` | Progress indicator bar            | Upload/loading progress |
| `UxCommonSlider`      | Range slider input                | Settings, filters       |
| `UxCommonRange`       | Alternative range component       | Value selection         |
| `UxCommonClock`       | Current time display              | Headers, dashboards     |
| `UxCommonKbd`         | Keyboard key display              | Shortcuts, docs         |
| `UxCommonKbdRed`      | Red keyboard key                  | Important shortcuts     |
| `UxCommonEmptyDB`     | Empty state component             | No data states          |
| `UxCommonAccordion`   | Collapsible content sections      | FAQs, nested content    |
| `UxCommonSelector`    | Custom select dropdown            | Form selections         |

#### Media & Content (8)

| Component                  | Description               | Features             |
| -------------------------- | ------------------------- | -------------------- |
| `UxCommonImgViewer`        | Image viewer with zoom    | Zoom, pan controls   |
| `UxCommonImgSkeleton`      | Image loading skeleton    | Loading placeholders |
| `UxCommonImgLoader`        | Image loading component   | Error handling       |
| `UxCommonVideoCard`        | Video preview card        | Thumbnails, controls |
| `UxCommonJsonViewer`       | JSON data viewer          | Syntax highlighting  |
| `UxCommonJsonViewerColors` | Colored JSON viewer       | Enhanced readability |
| `UxCommonPdfViewer`        | PDF document viewer       | Document display     |
| `UxCommonGlobalSearch`     | Advanced search component | Search functionality |

#### Window Management (6)

| Component                  | Description                         | Special Features         |
| -------------------------- | ----------------------------------- | ------------------------ |
| `UxCommonGlassWindow`      | Professional glassmorphic window    | Drag, resize, tabs       |
| `UxCommonGlassWindowHeader`| Window header with controls         | Min/max/close buttons    |
| `UxCommonGlassWindowTabs`  | Window tab navigation               | Badges, icons, disabled  |
| `UxCommonGlassWindowContent`| Window content area                | Custom scrollbars        |
| `UxCommonGlassWindowFooter`| Window footer with actions          | Left/right slots         |
| `UxCommonMagicWindow`      | Animated window (legacy)            | Basic animations         |

#### Interactive & Advanced (16)

| Component                  | Description                | Special Features     |
| -------------------------- | -------------------------- | -------------------- |
| `UxCommonCursorLight`      | Flashlight cursor effect   | Interactive lighting |
| `UxCommonMagicWindow`      | Animated window component  | Magic animations     |
| `UxCommonMagicTab`         | Animated tab component     | Smooth transitions   |
| `UxCommonBtnModal`         | Modal trigger button       | Modal integration    |
| `UxCommonBtnGrid`          | Grid layout button         | Grid controls        |
| `UxCommonBtnRandom`        | Random action button       | Randomization        |
| `UxCommonScreenBtn`        | Screen control button      | Fullscreen toggle    |
| `UxCommonRecordAudio`      | Audio recording component  | Voice recording      |
| `UxCommonBackgroundVideos` | Multiple background videos | Video playlists      |
| `UxCommonBgVideoGlobe`     | 3D globe video background  | Interactive globe    |
| `UxCommonBgVideoGrid`      | Grid video background      | Video grid layouts   |
| `UxCommonBgSkeletonGrid`   | Skeleton grid loader       | Grid loading states  |

**Utility Examples:**

```vue
<template>
  <UxCommonContainer>
    <!-- Progress tracking -->
    <UxCommonProgressBar :value="uploadProgress" class="mb-4" />

    <!-- Section divider -->
    <UxCommonDividerX />

    <!-- Keyboard shortcuts -->
    <div class="flex gap-2 items-center">
      <span>Press</span>
      <UxCommonKbd>Ctrl</UxCommonKbd>
      <UxCommonKbd>+</UxCommonKbd>
      <UxCommonKbd>K</UxCommonKbd>
      <span>to search</span>
    </div>

    <!-- Range slider -->
    <UxCommonSlider v-model="volume" :min="0" :max="100" />

    <!-- Empty state -->
    <UxCommonEmptyDB v-if="!hasData">No data available</UxCommonEmptyDB>

    <!-- JSON viewer -->
    <UxCommonJsonViewer :data="apiResponse" />

    <!-- Special effects -->
    <UxCommonCursorLight v-if="showEffect" />
  </UxCommonContainer>
</template>
```

**GlassWindow Example:**

```vue
<template>
  <div>
    <UButton @click="isOpen = true">Open Settings</UButton>
    
    <GlassWindow
      v-model="isOpen"
      :config="{
        title: 'Settings',
        icon: 'i-heroicons-cog-6-tooth',
        defaultPosition: { x: 100, y: 100 },
        defaultSize: { width: 700, height: 500 },
        blurAmount: 'lg',
        persistent: true,
      }"
      :tabs="tabs"
      v-model:selected-tab="selectedTab"
      storage-key="app-settings"
    >
      <div v-if="selectedTab.id === 'profile'">
        <h3>Profile Settings</h3>
        <!-- Your profile form -->
      </div>
      <div v-else-if="selectedTab.id === 'security'">
        <h3>Security Settings</h3>
        <!-- Your security form -->
      </div>
      
      <template #footer-right>
        <UButton @click="save">Save Changes</UButton>
      </template>
    </GlassWindow>
  </div>
</template>

<script setup>
import type { GlassWindowTab } from '@alexcolls/nuxt-ux'

const isOpen = ref(false)
const tabs = ref([
  { id: 'profile', title: 'Profile', icon: 'i-heroicons-user' },
  { id: 'security', title: 'Security', icon: 'i-heroicons-lock-closed' },
])
const selectedTab = ref(tabs.value[0])
</script>
```

## 🎣 Composables

### useNuxtUxStore()

Access all Pinia stores with reactive state management:

```ts
const { ui, auth, app } = useNuxtUxStore();

// UI Store - Theme & Preferences
ui.isDark; // Current theme state (light/dark/system)
ui.locale; // Current language ('en', 'es', 'fr')
ui.primary; // Primary color theme
ui.flashlight; // Flashlight cursor effect
ui.showVideo; // Background video visibility
ui.videoURL; // Background video URL
ui.volumeFX; // Sound effects volume (0-1)
ui.volumeVideo; // Video volume (0-1)

// Auth Store - Authentication
auth.isAuth; // Authentication status
auth.user; // User information object
auth.logout(); // Logout function

// App Store - Application State
app.isMenuOpen; // Mobile menu state
app.selectedItems; // Selected items array
app.isProcessing; // Processing state
```

### useNuxtUxLangs()

Get available language options with localized labels and flags:

```ts
const langs = useNuxtUxLangs();
// Returns: [
//   { value: 'en', label: 'English', icon: 'i-circle-flags-us' },
//   { value: 'es', label: 'Español', icon: 'i-circle-flags-es' },
//   { value: 'fr', label: 'Français', icon: 'i-circle-flags-fr' }
// ]
```

### Store Examples

```vue
<script setup lang="ts">
const { ui, auth, app } = useNuxtUxStore();

// Theme switching
const toggleTheme = () => {
  ui.isDark = !ui.isDark;
};

// Language switching
const switchLanguage = (locale: string) => {
  ui.locale = locale;
};

// Authentication
const login = async (credentials: any) => {
  const success = await authenticateUser(credentials);
  if (success) {
    auth.isAuth = true;
    auth.user = { name: credentials.username };
  }
};

// Video background control
const toggleVideo = () => {
  ui.showVideo = !ui.showVideo;
  if (ui.showVideo && !ui.videoURL) {
    ui.videoURL = "https://example.com/background.mp4";
  }
};
</script>
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
const { ui } = useNuxtUxStore();

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

## 📄 License

**MIT License** - This project is licensed under the MIT License.

You are free to:

- ✅ **Use** - Use the software for any purpose, including commercial projects
- ✅ **Modify** - Change and adapt the code to your needs
- ✅ **Distribute** - Share the software with others
- ✅ **Sublicense** - Include it in your own licensed software
- ✅ **Commercial Use** - Use in commercial products and services

### Requirements

The only requirement is to include the copyright notice and license text in all copies or substantial portions of the software.

### Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

See the [LICENSE](./LICENSE) file for full terms.

---

**Copyright (c) 2025 Alex Colls**

## 💝 Credits & Built With

This module is built on top of incredible open-source technologies:

### Core Framework
- 🚀 **[Nuxt 3/4](https://nuxt.com/)** - The Intuitive Vue Framework that powers this module with SSR, auto-imports, and an amazing developer experience
- 💚 **[Vue 3](https://vuejs.org/)** - The Progressive JavaScript Framework with Composition API and reactive state management

### UI & Styling
- 🎨 **[Nuxt UI](https://ui.nuxt.com/)** - Beautiful, fully styled and customizable components that form the foundation of our components
- 🌊 **[Tailwind CSS](https://tailwindcss.com/)** - The utility-first CSS framework that makes styling fast and consistent
- 🎭 **[Iconify](https://iconify.design/)** - Unified icon framework with 150,000+ icons from popular sets

### Internationalization
- 🌍 **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** - Powerful internationalization module with auto-routing and SEO support

### Development Tools
- 📘 **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types, providing full type safety throughout
- ⚡ **[@nuxt/kit](https://nuxt.com/docs/guide/going-further/kit)** - Nuxt module development utilities

### Icon Collections
- 🎯 **[Heroicons](https://heroicons.com/)** - Beautiful hand-crafted SVG icons by the Tailwind CSS team
- ✨ **[Line MD](https://icon-sets.iconify.design/line-md/)** - Animated line icons
- 🚩 **[Circle Flags](https://icon-sets.iconify.design/circle-flags/)** - Circular country flags
- 🔄 **[SVG Spinners](https://icon-sets.iconify.design/svg-spinners/)** - Animated loading spinners
- 🎪 **[Pepicons Pop](https://icon-sets.iconify.design/pepicons-pop/)** - Playful filled icons
- 🔣 **[Material Symbols](https://icon-sets.iconify.design/material-symbols/)** - Google's Material Design icons

### Special Thanks

- 💚 **Nuxt Community** - For building an incredible ecosystem and providing endless inspiration
- 🎨 **Nuxt UI Team** - For creating beautiful, accessible components that make development a joy
- 🌊 **Tailwind Labs** - For revolutionizing CSS with utility-first design
- 👥 **All Contributors** - Everyone who helps improve this module with issues, PRs, and feedback

### Why This Module Exists

Built to bridge the gap between starting a Nuxt project and having production-ready components. We combine the best tools in the ecosystem to give you:
- ✅ Ready-to-use components that follow best practices
- ✅ Dark mode and i18n built-in from day one
- ✅ Type safety and developer experience as priorities
- ✅ Performance-optimized with SSR support
- ✅ MIT licensed for maximum freedom

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

<!-- Badge References -->

[npm-version-src]: https://img.shields.io/npm/v/@alexcolls/nuxt-ux/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@alexcolls/nuxt-ux
[npm-downloads-src]: https://img.shields.io/npm/dm/@alexcolls/nuxt-ux.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@alexcolls/nuxt-ux
[license-src]: https://img.shields.io/badge/License-MIT-28CF8D.svg?style=flat&colorA=18181B
[license-href]: https://github.com/alexcolls/nuxt-ux/blob/main/LICENSE
