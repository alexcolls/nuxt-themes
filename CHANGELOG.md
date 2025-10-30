# Changelog

All notable changes to this project will be documented in this file.

## v0.5.1 - 2025-10-30

### ✨ New Components

**GlassWindow Component System** - Professional window management components:
- `GlassWindow` - Main glassmorphic window component with full customization
- `GlassWindowHeader` - Window header with draggable controls
- `GlassWindowTabs` - Tab navigation with badges and icons
- `GlassWindowContent` - Scrollable content area with custom scrollbars
- `GlassWindowFooter` - Footer with left/right action slots
- `useGlassWindow` - Composable for window state management

**Features:**
- 🎨 Glassmorphism design with customizable blur (sm/md/lg/xl)
- 🖱️ Drag & drop with position constraints and persistence
- 📐 8-direction resizing with min/max size constraints
- 🗂️ Tab support with badges, icons, and disabled states
- 💾 localStorage persistence for position, size, and state
- ⚡ Performance optimized with `requestAnimationFrame`
- 🎯 Full TypeScript support with comprehensive types
- 🌓 Dark mode support with custom styled scrollbars
- 🎭 Teleport to body with smooth transitions
- 🔧 v-model support and exposed methods for programmatic control

**Total components**: 80 → 85 components (+6% growth)

### 📚 Documentation

- Added comprehensive GlassWindow README with examples
- Updated main README with GlassWindow component section
- Added usage examples for all GlassWindow features

## v0.5.0 - 2025-10-30

### 🔄 BREAKING CHANGES - Complete Rebrand

- **Project renamed**: `nuxt-xui` → `nuxt-ux`
- **Package renamed**: `@alexcolls/nuxt-xui` → `@alexcolls/nuxt-ux`
- **GitHub repository**: `alexcolls/nuxt-xui` → `alexcolls/nuxt-ux`
- **Module configKey**: `nuxtXui` → `nuxtUx`
- **Component prefix**: All components now use `Ux` prefix instead of `Layout`/`Common`/`Auth`
  - `<LayoutHeader>` → `<UxLayoutHeader>`
  - `<CommonButton>` → `<UxCommonButton>`
  - `<AuthLogin>` → `<UxAuthLogin>`
- **Composables renamed**:
  - `useNuxtXuiStore()` → `useNuxtUxStore()`
  - `useNuxtXuiLangs()` → `useNuxtUxLangs()`
- **State keys**: All state keys changed from `nuxt-xui-*` to `nuxt-ux-*`
- **TypeScript types**: All interfaces renamed from `NuxtXui*` to `NuxtUx*`

### 📦 Migration Guide

**From v0.4.0 to v0.5.0:**

1. Update package name:
   ```bash
   npm uninstall @alexcolls/nuxt-xui
   npm install @alexcolls/nuxt-ux
   ```

2. Update `nuxt.config.ts`:
   ```ts
   // Before
   export default defineNuxtConfig({
     modules: ['@alexcolls/nuxt-xui'],
     nuxtXui: { version: '1.0.0' }
   });
   
   // After
   export default defineNuxtConfig({
     modules: ['@alexcolls/nuxt-ux'],
     nuxtUx: { version: '1.0.0' }
   });
   ```

3. Update all component usage in your templates:
   ```vue
   <!-- Before -->
   <LayoutHeader />
   <CommonContainer>
     <CommonTxtTitle>Title</CommonTxtTitle>
     <CommonBtnGradient>Click</CommonBtnGradient>
   </CommonContainer>
   <LayoutFooter />
   
   <!-- After -->
   <UxLayoutHeader />
   <UxCommonContainer>
     <UxCommonTxtTitle>Title</UxCommonTxtTitle>
     <UxCommonBtnGradient>Click</UxCommonBtnGradient>
   </UxCommonContainer>
   <UxLayoutFooter />
   ```

4. Update composable imports:
   ```ts
   // Before
   const { ui, auth, app } = useNuxtXuiStore();
   const langs = useNuxtXuiLangs();
   
   // After
   const { ui, auth, app } = useNuxtUxStore();
   const langs = useNuxtUxLangs();
   ```

### ✨ New Components (+26)

Added 26 new Common components from quami project:
- **UI Elements**: Accordion, GlobalSearch, Selector
- **Buttons**: Btn, BtnXs, BtnGrid, BtnModal, BtnRandom
- **Headings**: H1, H2, H3, H4
- **Text**: Text, TextGradient
- **Magic Components**: MagicBtn, MagicTab, MagicWindow
- **Media**: VideoCard, PdfViewer, RecordAudio
- **Backgrounds**: BackgroundVideos, BgSkeletonGrid, BgVideoGlobe, BgVideoGrid
- **Inputs**: Range
- **Other**: ScreenBtn

**Total components**: 54 → 80 components (+48% growth)
**Module size**: 119 kB → 173 kB

### 🛠️ Infrastructure

- Added `build.config.ts` for unbuild configuration
- Updated all GitHub workflows with new repository name
- Updated all documentation with new naming convention
- Regenerated package-lock.json with new package name

### 📚 Documentation

- Complete rewrite of README with new component names
- Updated CHANGELOG with migration guides
- Updated CONTRIBUTING.md, INSTALL.md, GETTING_STARTED.md
- Updated DEPENDENCY_ISOLATION.md and VERIFICATION.md
- All examples updated to use `Ux*` component prefix

## v0.4.0 - 2025-10-27

### 🔄 BREAKING CHANGES

- **Package renamed**: `@nuxt-ux` → `@alexcolls/nuxt-ux` (properly scoped for NPM)
- **Removed Pinia dependency**: Now uses Nuxt's built-in `useState()` for state management
- **Composable names changed**:
  - `useStore()` → `useNuxtXuiStore()`
  - `useLangs()` → `useNuxtXuiLangs()`
- **No longer requires**: `@pinia/nuxt` and `@pinia-plugin-persistedstate/nuxt`

### ✨ New Features

- **Nuxt useState() state management**: SSR-safe state without external dependencies
- **Proper runtime folder structure**: All components in `src/runtime/components/`
- **i18n locale files**: Built-in translations (English, Spanish, French)
- **TypeScript types**: Comprehensive type definitions for all state interfaces
- **Test suite**: Professional Vitest tests for Layout components
  - Header, Footer, Logo component tests
  - Theme button tests (Light, Lang, Auth, Color, Audio, Video)
  - SSR compatibility verification

### 📄 License

- Changed to **MIT License** (from dual license)
- Full open source permissive license

### 🛠️ Infrastructure

- Added `vitest.config.ts` for module testing
- Added `.npmignore` for clean package distribution
- Updated `publishConfig` for public NPM access
- All 54 components refactored to use new composables

### 📚 Documentation

- Updated README with new package name
- Documented useState() state management approach
- Updated installation instructions
- Removed Pinia references throughout

### 🔧 Configuration

- Module name updated to `@alexcolls/nuxt-ux`
- Simplified peer dependencies (only @nuxt/ui and @nuxtjs/i18n)
- Enhanced keywords for better NPM discoverability

### 📦 Migration Guide

**From v0.3.0 to v0.4.0:**

1. Update package name:
   ```bash
   npm uninstall @nuxt-ux
   npm install @alexcolls/nuxt-ux
   ```

2. Remove Pinia dependencies:
   ```bash
   npm uninstall @pinia/nuxt @pinia-plugin-persistedstate/nuxt
   ```

3. Update `nuxt.config.ts` modules array:
   ```ts
   modules: [
     '@nuxt/ui',
     '@nuxtjs/i18n',
     '@alexcolls/nuxt-ux', // Updated name, no Pinia needed
   ]
   ```

4. Update composable imports in your code:
   ```ts
   // Before
   const { ui, auth, app } = useStore();
   const langs = useLangs();
   
   // After
   const { ui, auth, app } = useNuxtXuiStore();
   const langs = useNuxtXuiLangs();
   ```

## v0.3.0 - 2025-10-21

### ⬆️ Major Upgrade

- **Upgraded to Nuxt 4** as primary version
- Updated `@nuxt/kit` to `^4.0.0`
- Updated `@nuxt/schema` to `^4.0.0`
- Updated `nuxt` to `^4.0.0`
- Playground now uses Nuxt 4
- Module still maintains backward compatibility with Nuxt 3 via peer dependencies

### 🔧 Changes

- Development now defaults to Nuxt 4
- All dependencies updated to latest Nuxt 4 compatible versions
- Testing and CI/CD updated for Nuxt 4

## v0.2.2 - 2025-10-21

### 📚 Documentation

- Added MIT LICENSE file
- Improved License section in README with full text
- Enhanced Credits section with "Built With" and "Acknowledgments"
- Added comprehensive Contributing guidelines
- Added Support section with ways to help
- Added Links section for easy navigation
- Improved Development section with setup instructions
- Made documentation more open source friendly

### 🛠️ Infrastructure

- Repository now fully open source ready
- Clear contribution guidelines
- Professional documentation structure

## v0.2.1 - 2025-10-21

### 🔧 Fixes

- Added `.npmrc` with `legacy-peer-deps=true` to handle peer dependency conflicts
- Fixed vitest version conflict (@nuxt/test-utils compatibility)
- Updated dependencies to support both Nuxt 3 and Nuxt 4

### ✨ Features

- **Nuxt 4 Compatibility** - Module now supports both Nuxt 3 and Nuxt 4
- Flexible peer dependency versions for future compatibility
- Updated @nuxt/test-utils to v3.19.2
- Updated vitest to support v2.1.0 || v3.0.0

### 📝 Documentation

- Updated installation instructions with `--legacy-peer-deps` flag
- Added alternative `.npmrc` setup method
- Documented Nuxt 3 & Nuxt 4 compatibility

## v0.2.0 - 2025-10-21

### ✨ Features

- Added `UxAuthLogin` component with animated form interactions
- Progressive form reveal on hover
- Username and password validation with visual feedback
- Success/error state animations
- Demo mode support (no backend required)
- Custom `onLogin` prop for authentication handlers

### 📚 Documentation

- Complete component reference with 50+ components organized by category
- Added example pages in playground (home and example pages)
- Created `GETTING_STARTED.md` guide
- Updated README with component tables and usage examples
- All components documented with examples

### 🎨 Component Library

**Component Categories:**
- 🔐 Authentication (1): AuthLogin
- 🎨 Layout (10): Header, Footer, Logo, Theme controls
- 🔘 Buttons (11): Gradient, Icon, Accept, Cancel, Add, Edit, Delete, etc.
- ⏳ Loaders (8): Standard, Simple, AI-themed, Dots, etc.
- 📝 Text (5): Title, Subtitle, Gradient, Color, Text
- 🛠️ Utilities (8): Container, Dividers, Progress, Clock, Kbd, etc.
- 🎬 Media (4): Background videos, Image viewer
- 📊 Data Display (2): JSON viewers
- ✨ Effects (1): Cursor light

### 🔄 Breaking Changes

- Renamed module config key from `nuxtThemes` to `nuxtUx`
- Updated environment variables to `NUXT_PUBLIC_NUXT_XUI_*` format
- Renamed Pinia store namespaces from `nuxt-themes.*` to `nuxt-ux.*`

### 🛠️ Infrastructure

- Added `npm start` script for easier development
- Updated playground with example pages
- Repository renamed from `nuxt-themes` to `nuxt-ux`

## v0.1.0 - 2025-10-20

### ✨ Features

- Initial release of @nuxt-ux module
- 48+ reusable Layout and Common components
- Full dark mode support with system preference detection
- Multi-language support (English, Spanish, French)
- Pinia stores with state persistence
- Auto-import for all components and composables
- TypeScript support throughout

### 🎨 Components

**Layout Components:**
- Header with configurable logo and menu
- Footer with copyright and theme controls
- Theme control panel with multiple options
- Logo component with slot support

**Common Components:**
- Button variants (Gradient, Icon, Accept, Cancel, etc.)
- Loader components (Standard, Simple, AI-themed, etc.)
- Text components (Title, Subtitle, Gradient, Color)
- Utility components (Container, Dividers, Progress, Clock)
- Media components (Video backgrounds, Image viewer)
- Data display (JSON viewer with syntax highlighting)
- Effects (Cursor flashlight effect)

### 🏗️ Infrastructure

- Standard Nuxt module architecture
- Module builder configuration
- Playground environment for testing
- Comprehensive documentation
- Peer dependency management for @nuxt/ui, i18n, and Pinia

### 📦 Dependencies

- Requires @nuxt/ui ^2.21.0
- Requires @nuxtjs/i18n ^8.3.1
- Requires @pinia/nuxt ^0.5.1
- Requires @pinia-plugin-persistedstate/nuxt ^1.2.0
- Icon collections: heroicons, line-md, circle-flags, svg-spinners, pepicons-pop, material-symbols

### 📝 Documentation

- Complete README with usage examples
- Configuration guide
- Component catalog
- Customization instructions
- Development setup guide
