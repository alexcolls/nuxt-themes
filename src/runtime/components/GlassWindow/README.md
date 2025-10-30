# GlassWindow Component

A professional, performant, and highly customizable glassmorphic window component for Nuxt UX.

## Features

- 🎨 **Glassmorphism Design** - Beautiful glass effect with customizable blur and opacity
- 🖱️ **Drag & Drop** - Smooth window dragging with position constraints
- 📐 **Resizable** - 8-direction resize handles with min/max size constraints
- 🗂️ **Tab Support** - Built-in tab navigation with badges and icons
- 💾 **Persistent State** - Optional localStorage persistence for position, size, and state
- ⚡ **Performance Optimized** - Uses `requestAnimationFrame` for smooth animations
- 🎯 **TypeScript** - Full TypeScript support with comprehensive types
- 🎭 **Teleport Ready** - Renders to body with proper z-index management
- 🌓 **Dark Mode** - Full dark mode support
- 🔧 **Highly Customizable** - Extensive props and slots for complete control

## Basic Usage

```vue
<template>
  <div>
    <UButton @click="isOpen = true">Open Window</UButton>
    
    <GlassWindow
      v-model="isOpen"
      :config="{
        title: 'My Window',
        icon: 'i-heroicons-window',
        defaultPosition: { x: 100, y: 100 },
        defaultSize: { width: 600, height: 400 },
      }"
    >
      <p>Window content goes here</p>
    </GlassWindow>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
```

## With Tabs

```vue
<template>
  <GlassWindow
    v-model="isOpen"
    :config="windowConfig"
    :tabs="tabs"
    v-model:selected-tab="selectedTab"
    @tab-change="handleTabChange"
  >
    <div v-if="selectedTab.id === 'general'">
      General settings content
    </div>
    <div v-else-if="selectedTab.id === 'advanced'">
      Advanced settings content
    </div>
  </GlassWindow>
</template>

<script setup lang="ts">
import type { GlassWindowTab } from '@/runtime/composables/useGlassWindow'

const isOpen = ref(true)
const tabs = ref<GlassWindowTab[]>([
  { id: 'general', title: 'General', icon: 'i-heroicons-cog' },
  { id: 'advanced', title: 'Advanced', icon: 'i-heroicons-wrench', badge: 3 },
  { id: 'danger', title: 'Danger Zone', icon: 'i-heroicons-exclamation-triangle', disabled: true },
])
const selectedTab = ref(tabs.value[0])

const windowConfig = {
  title: 'Settings',
  icon: 'i-heroicons-cog-6-tooth',
  defaultPosition: { x: 200, y: 100 },
  defaultSize: { width: 700, height: 500 },
  minSize: { width: 400, height: 300 },
  maxSize: { width: 1200, height: 800 },
  blurAmount: 'lg',
  opacity: 0.95,
  persistent: true,
}

function handleTabChange(tab: GlassWindowTab) {
  console.log('Tab changed:', tab)
}
</script>
```

## Advanced Usage with All Features

```vue
<template>
  <GlassWindow
    ref="windowRef"
    v-model="isOpen"
    :config="config"
    :tabs="tabs"
    v-model:selected-tab="selectedTab"
    storage-key="my-app-window"
    :draggable="true"
    :resizable="true"
    :closable="true"
    :minimizable="true"
    :maximizable="true"
    :scrollable="true"
    content-padding="6"
    content-max-height="600px"
    @open="handleOpen"
    @close="handleClose"
    @maximize="handleMaximize"
    @minimize="handleMinimize"
    @tab-change="handleTabChange"
  >
    <!-- Header actions slot -->
    <template #header-actions>
      <UButton
        icon="i-heroicons-arrows-pointing-out"
        size="xs"
        variant="ghost"
        @click="windowRef?.resetPosition()"
      />
    </template>

    <!-- Main content -->
    <div class="space-y-4">
      <h2>Content</h2>
      <p>Your window content here</p>
    </div>

    <!-- Footer actions -->
    <template #footer-left>
      <span class="text-xs text-gray-500">Last saved: {{ lastSaved }}</span>
    </template>

    <template #footer-right>
      <UButton color="gray" variant="ghost" @click="handleCancel">
        Cancel
      </UButton>
      <UButton @click="handleSave">
        Save Changes
      </UButton>
    </template>
  </GlassWindow>
</template>

<script setup lang="ts">
import type { GlassWindowConfig, GlassWindowTab } from '@/runtime/composables/useGlassWindow'

const windowRef = ref()
const isOpen = ref(false)
const selectedTab = ref<GlassWindowTab>()
const lastSaved = ref(new Date().toLocaleTimeString())

const config: GlassWindowConfig = {
  title: 'Advanced Settings',
  icon: 'i-heroicons-cog-6-tooth',
  defaultPosition: { x: 150, y: 100 },
  defaultSize: { width: 800, height: 600 },
  minSize: { width: 500, height: 400 },
  maxSize: { width: 1400, height: 900 },
  blurAmount: 'xl',
  opacity: 0.95,
  persistent: true,
  defaultOpen: false,
}

const tabs: GlassWindowTab[] = [
  { id: 'profile', title: 'Profile', icon: 'i-heroicons-user' },
  { id: 'security', title: 'Security', icon: 'i-heroicons-lock-closed', badge: 2 },
  { id: 'notifications', title: 'Notifications', icon: 'i-heroicons-bell' },
]

function handleOpen() {
  console.log('Window opened')
}

function handleClose() {
  console.log('Window closed')
}

function handleMaximize(isMaximized: boolean) {
  console.log('Window maximized:', isMaximized)
}

function handleMinimize(isMinimized: boolean) {
  console.log('Window minimized:', isMinimized)
}

function handleTabChange(tab: GlassWindowTab) {
  selectedTab.value = tab
}

function handleSave() {
  lastSaved.value = new Date().toLocaleTimeString()
  isOpen.value = false
}

function handleCancel() {
  isOpen.value = false
}
</script>
```

## Props

### GlassWindow Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `GlassWindowConfig` | **required** | Window configuration object |
| `modelValue` | `boolean` | `false` | Controls window open/close state (v-model) |
| `tabs` | `GlassWindowTab[]` | `undefined` | Array of tabs to display |
| `selectedTab` | `GlassWindowTab` | `undefined` | Currently selected tab (v-model:selectedTab) |
| `draggable` | `boolean` | `true` | Enable window dragging |
| `resizable` | `boolean` | `true` | Enable window resizing |
| `closable` | `boolean` | `true` | Show close button |
| `minimizable` | `boolean` | `true` | Show minimize button |
| `maximizable` | `boolean` | `true` | Show maximize button |
| `scrollable` | `boolean` | `true` | Enable content scrolling |
| `contentPadding` | `string \| number` | `'4'` | Content area padding |
| `contentMaxHeight` | `string` | `undefined` | Maximum content height |
| `storageKey` | `string` | `undefined` | localStorage key for persistent state |
| `zIndex` | `number` | `50` | Base z-index for the window |

### GlassWindowConfig

```typescript
interface GlassWindowConfig {
  title: string                    // Window title
  icon?: string                    // Window icon (Iconify name)
  defaultPosition?: { x: number, y: number }  // Initial position
  defaultSize?: { width: number, height: number }  // Initial size
  minSize?: { width: number, height: number }      // Minimum size
  maxSize?: { width: number, height: number }      // Maximum size
  resizable?: boolean              // Enable resizing
  draggable?: boolean              // Enable dragging
  persistent?: boolean             // Save state to localStorage
  defaultOpen?: boolean            // Open by default
  blurAmount?: 'sm' | 'md' | 'lg' | 'xl'  // Glass blur intensity
  opacity?: number                 // Window opacity (0-1)
}
```

### GlassWindowTab

```typescript
interface GlassWindowTab {
  id: string              // Unique tab identifier
  title: string           // Tab display text
  icon?: string           // Tab icon (Iconify name)
  badge?: number | string // Optional badge
  disabled?: boolean      // Disable tab interaction
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | Window open/close state changed |
| `update:selectedTab` | `GlassWindowTab` | Selected tab changed |
| `tab-change` | `GlassWindowTab` | Tab was clicked |
| `open` | - | Window opened |
| `close` | - | Window closed |
| `after-close` | - | After close transition completed |
| `maximize` | `boolean` | Window maximized state changed |
| `minimize` | `boolean` | Window minimized state changed |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Main window content |
| `header-append` | Content after the title in header |
| `header-actions` | Additional actions in header |
| `tab-actions` | Actions in tab bar |
| `footer` | Footer content (right side by default) |
| `footer-left` | Footer left side content |
| `footer-right` | Footer right side content |

## Exposed Methods

```typescript
{
  open: () => void          // Open the window
  close: () => void         // Close the window
  toggle: () => void        // Toggle open/close
  maximize: () => void      // Toggle maximize
  minimize: () => void      // Toggle minimize
  resetPosition: () => void // Reset to default position
  resetSize: () => void     // Reset to default size
}
```

## Composable

You can also use the `useGlassWindow` composable directly:

```typescript
import { useGlassWindow } from '@/runtime/composables/useGlassWindow'

const windowState = useGlassWindow(config, 'storage-key')

// Access state
windowState.isOpen.value
windowState.position.value
windowState.size.value
windowState.isMaximized.value

// Use actions
windowState.open()
windowState.setPosition({ x: 100, y: 200 })
windowState.setSize({ width: 800, height: 600 })
```

## Styling

The component uses Tailwind CSS classes and respects your theme configuration. You can customize colors through your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your primary color palette
        }
      }
    }
  }
}
```

## Performance Tips

1. **Use `persistent` wisely** - Only enable for windows where state persistence matters
2. **Limit content complexity** - Use virtual scrolling for long lists
3. **Avoid heavy computations** during drag/resize
4. **Use `content-max-height`** to prevent excessively tall windows
5. **Lazy load tab content** - Only render active tab content

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (macOS 10.15+)
- Mobile: ⚠️ Limited (dragging requires touch event handling)
