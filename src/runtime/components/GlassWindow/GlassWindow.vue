<template>
  <Teleport to="body">
    <Transition
      name="glass-window"
      @after-leave="emit('after-close')"
    >
      <div
        v-show="windowState.isOpen.value && !windowState.isMinimized.value"
        ref="windowRef"
        class="glass-window"
        :class="[
          'fixed z-50 flex flex-col',
          'rounded-xl shadow-2xl',
          'border border-gray-200/20 dark:border-gray-700/20',
          'bg-white/80 dark:bg-gray-900/80',
          windowState.blurClass.value,
          'hover:border-primary-500/30 dark:hover:border-primary-400/30',
          'hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20',
          'transition-all duration-300 ease-out',
          windowState.isMaximized.value ? 'inset-0 !rounded-none' : '',
          resizable && !windowState.isMaximized.value ? 'resize-handles' : '',
        ]"
        :style="{
          ...windowState.sizeStyle.value,
          transform: windowState.transformStyle.value,
          opacity: config.opacity ?? 1,
        }"
        @mousedown="bringToFront"
      >
        <!-- Header -->
        <GlassWindowHeader
          :title="config.title"
          :icon="config.icon"
          :draggable="draggable && !windowState.isMaximized.value"
          :closable="closable"
          :minimizable="minimizable"
          :maximizable="maximizable"
          :is-maximized="windowState.isMaximized.value"
          @drag-start="startDrag"
          @double-click="windowState.maximize()"
          @close="handleClose"
          @minimize="windowState.minimize()"
          @maximize="windowState.maximize()"
        >
          <template #title-append>
            <slot name="header-append" />
          </template>
          <template #actions>
            <slot name="header-actions" />
          </template>
        </GlassWindowHeader>

        <!-- Tabs -->
        <GlassWindowTabs
          v-if="tabs && tabs.length > 0"
          :tabs="tabs"
          :selected-tab="selectedTab"
          @select="handleTabSelect"
        >
          <template #actions>
            <slot name="tab-actions" />
          </template>
        </GlassWindowTabs>

        <!-- Content -->
        <GlassWindowContent
          :padding="contentPadding"
          :scrollable="scrollable"
          :max-height="contentMaxHeight"
        >
          <slot />
        </GlassWindowContent>

        <!-- Footer -->
        <GlassWindowFooter>
          <template #left>
            <slot name="footer-left" />
          </template>
          <slot name="footer" />
          <template #right>
            <slot name="footer-right" />
          </template>
        </GlassWindowFooter>

        <!-- Resize handles -->
        <template v-if="resizable && !windowState.isMaximized.value">
          <div
            v-for="direction in resizeDirections"
            :key="direction"
            :class="`resize-handle resize-${direction}`"
            @mousedown.stop="startResize($event, direction)"
          />
        </template>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  useGlassWindow,
  type GlassWindowConfig,
  type GlassWindowTab,
  type ResizeDirection,
} from '@/runtime/composables/useGlassWindow'
import GlassWindowHeader from './GlassWindowHeader.vue'
import GlassWindowTabs from './GlassWindowTabs.vue'
import GlassWindowContent from './GlassWindowContent.vue'
import GlassWindowFooter from './GlassWindowFooter.vue'

const props = withDefaults(defineProps<{
  config: GlassWindowConfig
  tabs?: GlassWindowTab[]
  selectedTab?: GlassWindowTab
  modelValue?: boolean
  draggable?: boolean
  resizable?: boolean
  closable?: boolean
  minimizable?: boolean
  maximizable?: boolean
  scrollable?: boolean
  contentPadding?: string | number
  contentMaxHeight?: string
  storageKey?: string
  zIndex?: number
}>(), {
  draggable: true,
  resizable: true,
  closable: true,
  minimizable: true,
  maximizable: true,
  scrollable: true,
  contentPadding: '4',
  zIndex: 50,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:selectedTab': [tab: GlassWindowTab]
  'tab-change': [tab: GlassWindowTab]
  'close': []
  'after-close': []
  'open': []
  'maximize': [isMaximized: boolean]
  'minimize': [isMinimized: boolean]
}>()

const windowRef = ref<HTMLElement>()
const windowState = useGlassWindow(props.config, props.storageKey)
const resizeDirections: ResizeDirection[] = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw']

// Sync with v-model
watch(() => props.modelValue, (value) => {
  if (value !== undefined && value !== windowState.isOpen.value) {
    windowState.isOpen.value = value
  }
})

watch(() => windowState.isOpen.value, (value) => {
  emit('update:modelValue', value)
  if (value) {
    emit('open')
  } else {
    emit('close')
  }
})

watch(() => windowState.isMaximized.value, (value) => {
  emit('maximize', value)
})

watch(() => windowState.isMinimized.value, (value) => {
  emit('minimize', value)
})

// Drag functionality
function startDrag(e: MouseEvent) {
  if (!props.draggable || windowState.isMaximized.value) return

  windowState.dragState.value.isDragging = true
  const rect = windowRef.value!.getBoundingClientRect()
  windowState.dragState.value.offsetX = e.clientX - rect.left
  windowState.dragState.value.offsetY = e.clientY - rect.top
}

function doDrag(e: MouseEvent) {
  if (!windowState.dragState.value.isDragging) return

  requestAnimationFrame(() => {
    const newX = e.clientX - windowState.dragState.value.offsetX
    const newY = e.clientY - windowState.dragState.value.offsetY
    windowState.setPosition({ x: newX, y: newY })
  })
}

function endDrag() {
  windowState.dragState.value.isDragging = false
}

// Resize functionality
function startResize(e: MouseEvent, direction: ResizeDirection) {
  if (!props.resizable || windowState.isMaximized.value) return

  windowState.resizeState.value.isResizing = true
  windowState.resizeState.value.direction = direction
  windowState.resizeState.value.startX = e.clientX
  windowState.resizeState.value.startY = e.clientY
  windowState.resizeState.value.startWidth = windowState.size.value.width
  windowState.resizeState.value.startHeight = windowState.size.value.height
}

function doResize(e: MouseEvent) {
  if (!windowState.resizeState.value.isResizing) return

  requestAnimationFrame(() => {
    const deltaX = e.clientX - windowState.resizeState.value.startX
    const deltaY = e.clientY - windowState.resizeState.value.startY
    const direction = windowState.resizeState.value.direction!

    let newWidth = windowState.resizeState.value.startWidth
    let newHeight = windowState.resizeState.value.startHeight
    let newX = windowState.position.value.x
    let newY = windowState.position.value.y

    if (direction.includes('e')) newWidth += deltaX
    if (direction.includes('w')) {
      newWidth -= deltaX
      newX += deltaX
    }
    if (direction.includes('s')) newHeight += deltaY
    if (direction.includes('n')) {
      newHeight -= deltaY
      newY += deltaY
    }

    windowState.setSize({ width: newWidth, height: newHeight })
    if (direction.includes('w') || direction.includes('n')) {
      windowState.setPosition({ x: newX, y: newY })
    }
  })
}

function endResize() {
  windowState.resizeState.value.isResizing = false
  windowState.resizeState.value.direction = null
}

// Window management
function handleClose() {
  windowState.close()
}

function handleTabSelect(tab: GlassWindowTab) {
  emit('update:selectedTab', tab)
  emit('tab-change', tab)
}

function bringToFront() {
  // TODO: Implement z-index management for multiple windows
}

// Event listeners
onMounted(() => {
  windowState.loadState()
  window.addEventListener('mousemove', doDrag)
  window.addEventListener('mousemove', doResize)
  window.addEventListener('mouseup', endDrag)
  window.addEventListener('mouseup', endResize)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', doDrag)
  window.removeEventListener('mousemove', doResize)
  window.removeEventListener('mouseup', endDrag)
  window.removeEventListener('mouseup', endResize)
})

// Expose methods
defineExpose({
  open: windowState.open,
  close: windowState.close,
  toggle: windowState.toggle,
  maximize: windowState.maximize,
  minimize: windowState.minimize,
  resetPosition: windowState.resetPosition,
  resetSize: windowState.resetSize,
})
</script>

<style scoped>
.glass-window {
  will-change: transform;
}

/* Transition */
.glass-window-enter-active,
.glass-window-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-window-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.glass-window-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

/* Resize handles */
.resize-handle {
  @apply absolute bg-transparent;
  z-index: 10;
}

.resize-n {
  @apply top-0 left-0 right-0 h-2 cursor-ns-resize;
}

.resize-s {
  @apply bottom-0 left-0 right-0 h-2 cursor-ns-resize;
}

.resize-e {
  @apply top-0 right-0 bottom-0 w-2 cursor-ew-resize;
}

.resize-w {
  @apply top-0 left-0 bottom-0 w-2 cursor-ew-resize;
}

.resize-ne {
  @apply top-0 right-0 w-4 h-4 cursor-nesw-resize;
}

.resize-nw {
  @apply top-0 left-0 w-4 h-4 cursor-nwse-resize;
}

.resize-se {
  @apply bottom-0 right-0 w-4 h-4 cursor-nwse-resize;
}

.resize-sw {
  @apply bottom-0 left-0 w-4 h-4 cursor-nesw-resize;
}
</style>
