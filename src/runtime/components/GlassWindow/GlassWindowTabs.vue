<template>
  <div
    v-if="tabs && tabs.length > 0"
    class="glass-window-tabs"
    :class="[
      'flex items-center gap-1 px-2 py-1',
      'border-b border-gray-200/10 dark:border-gray-700/10',
      'bg-white/5 dark:bg-black/5',
    ]"
  >
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="tab-button"
      :class="[
        'flex items-center gap-1.5 px-3 py-1.5 rounded-md',
        'text-sm font-medium transition-all duration-200',
        'hover:bg-white/10 dark:hover:bg-black/10',
        selectedTab?.id === tab.id
          ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400 shadow-sm'
          : 'text-gray-600 dark:text-gray-400',
        tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
      :disabled="tab.disabled"
      @click="!tab.disabled && emit('select', tab)"
    >
      <UIcon
        v-if="tab.icon"
        :name="tab.icon"
        class="w-4 h-4 flex-shrink-0"
      />
      <span class="select-none">{{ tab.title }}</span>
      <UBadge
        v-if="tab.badge !== undefined"
        :label="String(tab.badge)"
        size="xs"
        :color="selectedTab?.id === tab.id ? 'primary' : 'gray'"
        variant="subtle"
      />
    </button>
    
    <div class="flex-1" />
    
    <slot name="actions" />
  </div>
</template>

<script setup lang="ts">
import type { GlassWindowTab } from '@/runtime/composables/useGlassWindow'

defineProps<{
  tabs?: GlassWindowTab[]
  selectedTab?: GlassWindowTab
}>()

const emit = defineEmits<{
  select: [tab: GlassWindowTab]
}>()
</script>

<style scoped>
.tab-button {
  @apply relative;
}

.tab-button::after {
  @apply content-[''] absolute bottom-0 left-0 right-0 h-0.5;
  @apply bg-primary-500 dark:bg-primary-400 opacity-0 transition-opacity duration-200;
}

.tab-button:not([disabled]):hover::after {
  @apply opacity-30;
}

.tab-button.bg-primary-500\/10::after {
  @apply opacity-100;
}
</style>
