<template>
  <div
    class="glass-window-content"
    :class="[
      'relative overflow-auto',
      padding ? `p-${padding}` : 'p-4',
      scrollable ? 'overflow-y-auto' : 'overflow-hidden',
    ]"
    :style="{ maxHeight: maxHeight }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  padding?: string | number
  scrollable?: boolean
  maxHeight?: string
}>(), {
  padding: '4',
  scrollable: true,
  maxHeight: undefined,
})
</script>

<style scoped>
.glass-window-content {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
}

.glass-window-content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.glass-window-content::-webkit-scrollbar-track {
  background: transparent;
}

.glass-window-content::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.3);
  border-radius: 4px;
  transition: background-color 0.2s;
}

.glass-window-content::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.5);
}

.dark .glass-window-content {
  scrollbar-color: rgba(75, 85, 99, 0.3) transparent;
}

.dark .glass-window-content::-webkit-scrollbar-thumb {
  background-color: rgba(75, 85, 99, 0.3);
}

.dark .glass-window-content::-webkit-scrollbar-thumb:hover {
  background-color: rgba(75, 85, 99, 0.5);
}
</style>
