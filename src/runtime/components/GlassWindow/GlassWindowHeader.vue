<template>
  <div
    class="glass-window-header group"
    :class="[
      'flex items-center justify-between w-full px-3 py-2',
      'border-b transition-all duration-200',
      draggable ? 'cursor-move' : '',
      'bg-white/5 dark:bg-black/5',
      'border-gray-200/20 dark:border-gray-700/20',
      'hover:border-primary-500/30 dark:hover:border-primary-400/30',
    ]"
    @mousedown="handleMouseDown"
    @dblclick="handleDoubleClick"
  >
    <div class="flex items-center gap-2 flex-1 min-w-0">
      <UIcon
        v-if="icon"
        :name="icon"
        class="w-4 h-4 flex-shrink-0 opacity-80"
      />
      <h3 class="text-sm font-medium truncate select-none">
        {{ title }}
      </h3>
      <slot name="title-append" />
    </div>

    <div class="flex items-center gap-1 flex-shrink-0">
      <slot name="actions" />
      
      <UButton
        v-if="minimizable"
        color="gray"
        variant="ghost"
        icon="i-heroicons-minus-20-solid"
        size="xs"
        class="window-control-btn"
        :ui="{ rounded: 'rounded-md' }"
        @click="emit('minimize')"
      />
      
      <UButton
        v-if="maximizable"
        color="gray"
        variant="ghost"
        :icon="isMaximized ? 'i-heroicons-arrows-pointing-in-20-solid' : 'i-heroicons-arrows-pointing-out-20-solid'"
        size="xs"
        class="window-control-btn"
        :ui="{ rounded: 'rounded-md' }"
        @click="emit('maximize')"
      />
      
      <UButton
        v-if="closable"
        color="gray"
        variant="ghost"
        icon="i-heroicons-x-mark-20-solid"
        size="xs"
        class="window-control-btn hover:!bg-red-500/20 hover:!text-red-600 dark:hover:!text-red-400"
        :ui="{ rounded: 'rounded-md' }"
        @click="emit('close')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  icon?: string
  draggable?: boolean
  closable?: boolean
  minimizable?: boolean
  maximizable?: boolean
  isMaximized?: boolean
}>()

const emit = defineEmits<{
  close: []
  minimize: []
  maximize: []
  dragStart: [event: MouseEvent]
  doubleClick: []
}>()

function handleMouseDown(e: MouseEvent) {
  if (props.draggable && e.button === 0) {
    emit('dragStart', e)
  }
}

function handleDoubleClick() {
  if (props.maximizable) {
    emit('doubleClick')
  }
}
</script>

<style scoped>
.window-control-btn {
  @apply opacity-0 group-hover:opacity-100 transition-opacity duration-200;
  @apply hover:shadow-sm !ring-0 focus-visible:!ring-0;
  @apply h-6 w-6 p-0;
}

.glass-window-header:has(.window-control-btn:hover) .window-control-btn,
.glass-window-header:has(.window-control-btn:focus) .window-control-btn {
  @apply opacity-100;
}
</style>
