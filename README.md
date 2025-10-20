# @nuxt-themes/layout-ui

A comprehensive Nuxt 3 module providing reusable Layout and Common UI components built with Nuxt UI.

## Features

- 🎨 **48+ Ready-to-Use Components** - Layout (Header, Footer, Theme) and Common components (Buttons, Loaders, Text, etc.)
- 🌙 **Dark Mode Support** - Fully integrated theme switching with system preference detection
- 🌍 **i18n Ready** - Multi-language support (English, Spanish, French)
- 💾 **State Persistence** - Pinia stores with automatic state persistence
- 🎯 **TypeScript** - Full TypeScript support
- 🔧 **Highly Configurable** - Customize colors, themes, and behavior
- ⚡ **Auto-Import** - All components and composables are auto-imported

## Installation

```bash
npm install @nuxt-themes/layout-ui
```

### Peer Dependencies

This module requires the following peer dependencies:

```bash
npm install @nuxt/ui @nuxtjs/i18n @pinia/nuxt @pinia-plugin-persistedstate/nuxt
```

You'll also need to install the required icon collections:

```bash
npm install @iconify-json/heroicons @iconify-json/line-md @iconify-json/circle-flags @iconify-json/svg-spinners @iconify-json/pepicons-pop @iconify-json/material-symbols
```

## Quick Start

1. Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxt-themes/layout-ui'
  ],
  
  nuxtThemes: {
    version: '1.0.0',
    logoURL: 'https://your-site.com'
  }
})
```

2. Use components in your app:

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
  nuxtThemes: {
    // Version displayed in footer
    version: '1.0.0',
    
    // Logo URL for header click action
    logoURL: 'https://your-site.com',
    
    // Enable or disable the module
    enabled: true
  }
})
```

### Environment Variables

You can also configure the module using environment variables (place in `.env`):

```env
NUXT_PUBLIC_NUXT_THEMES_VERSION=1.0.0
NUXT_PUBLIC_NUXT_THEMES_LOGO_URL=https://your-site.com
```

## Components

### Layout Components

- **LayoutHeader** - Fixed header with logo and menu
- **LayoutFooter** - Fixed footer with copyright and theme controls
- **LayoutLogo** - Configurable logo component (supports slot for custom logo)
- **LayoutTheme** - Theme control panel
  - **LayoutThemeBtnLight** - Light/Dark/System theme switcher
  - **LayoutThemeBtnLang** - Language selector
  - **LayoutThemeBtnColor** - Primary color picker
  - **LayoutThemeBtnAudio** - Audio controls
  - **LayoutThemeBtnVideo** - Video background controls
  - **LayoutThemeBtnAuth** - Authentication status display

### Common Components

#### Buttons
- `CommonBtnGradient` - Gradient styled button
- `CommonBtnIcon` - Icon button
- `CommonBtnAccept`, `CommonBtnCancel`, `CommonBtnClose`
- `CommonBtnAdd`, `CommonBtnEdit`, `CommonBtnDelete`
- `CommonBtnUpload`, `CommonBtnSubmit`, `CommonBtnReload`
- `CommonBtnScrollTop` - Scroll to top button

#### Loaders
- `CommonLoader` - Standard loader
- `CommonLoaderSimple` - Minimal loader
- `CommonLoaderInfo` - Loader with info slot
- `CommonLoaderSlot` - Customizable loader
- `CommonLoadingDots` - Animated dots
- `CommonAiLoader` - AI-themed loader with variants (Black, White, SVG)
- `CommonImgLoader` - Image loading skeleton

#### Text Components
- `CommonTxtTitle` - Page title
- `CommonTxtSubtitle` - Subtitle text
- `CommonTxtText` - Body text
- `CommonTxtGradient` - Gradient text effect
- `CommonTxtColor` - Colored text

#### Utilities
- `CommonContainer` - Responsive container with padding
- `CommonDividerX`, `CommonDividerY` - Horizontal/Vertical dividers
- `CommonProgressBar` - Progress indicator
- `CommonSlider` - Range slider
- `CommonClock` - Current time display
- `CommonKbd`, `CommonKbdRed` - Keyboard key display
- `CommonEmptyDB` - Empty state component

#### Media
- `CommonBgVideo` - Background video player
- `CommonBgVideoYoutube` - YouTube background video
- `CommonImgViewer` - Image viewer with zoom
- `CommonImgSkeleton` - Image loading skeleton

#### Data Display
- `CommonJsonViewer` - JSON viewer
- `CommonJsonViewerColors` - Colored JSON viewer

#### Effects
- `CommonCursorLight` - Flashlight cursor effect

## Composables

### useStore()

Access all Pinia stores:

```ts
const { ui, auth, app } = useStore();

// UI Store
ui.isDark // Current theme state
ui.locale // Current language
ui.primary // Primary color
ui.flashlight // Flashlight effect state

// Auth Store
auth.isAuth // Authentication status
auth.logout() // Logout function

// App Store
app.isMenuOpen // Menu state
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
    loginWithCustomProvider
  };
};
```

### Theme Colors

The module uses Tailwind CSS and Nuxt UI's color system. Configure colors in your `app.config.ts`:

```ts
export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate'
  }
})
```

## i18n Configuration

The module includes translations for English, Spanish, and French. To add more languages or override existing translations, configure `@nuxtjs/i18n` in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  i18n: {
    locales: [
      { code: 'en', file: 'en.ts' },
      { code: 'es', file: 'es.ts' },
      { code: 'de', file: 'de.ts' } // Add your language
    ],
    langDir: 'locales',
    defaultLocale: 'en'
  }
})
```

## Video Background Configuration

Some components support video backgrounds:

```ts
const { ui } = useStore();

// Set video URL
ui.videoURL = 'https://example.com/video.mp4';
ui.showVideo = true;
ui.videoOpacity = 0.5;
ui.volumeVideo = 0.8;

// Add video to playlist
ui.addVideo('https://example.com/another-video.mp4');
```

## Development

```bash
# Install dependencies
npm install

# Develop with playground
npm run dev

# Build the module
npm run prepack

# Run tests
npm test
```

## License

MIT License

## Credits

Extracted from the docai project and transformed into a reusable Nuxt module.
