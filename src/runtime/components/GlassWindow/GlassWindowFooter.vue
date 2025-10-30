<template>
  <div
    v-if="hasContent"
    class="glass-window-footer"
    :class="[
      'flex items-center justify-between px-4 py-3',
      'border-t border-gray-200/10 dark:border-gray-700/10',
      'bg-white/5 dark:bg-black/5',
    ]"
  >
    <div class="flex items-center gap-2">
      <slot name="left" />
    </div>
    
    <div class="flex items-center gap-2">
      <slot />
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
const slots = useSlots()

const hasContent = computed(() => {
  return !!(slots.default || slots.left || slots.right)
})
</script>
