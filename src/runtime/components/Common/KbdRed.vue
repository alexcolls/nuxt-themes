<template>
  <div :class="onClick ? 'cursor-pointer' : 'cursor-default'">
    <UTooltip
      v-if="tooltip"
      :text="tooltip.text || ''"
      :shortcuts="tooltip.shortcuts || []"
    >
      <UKbd
        :value="text"
        :ui="{
          base: 'text-white !dark:text-gray-200',
          background: '!bg-red-600 !dark:bg-red-400'
        }"
        @click="onClick ? onClick() : null"
      >
        <slot />
      </UKbd>
    </UTooltip>
    <UKbd
      v-else
      :value="text"
      :ui="{
        base: '!text-white !dark:text-gray-200',
        background: '!bg-red-500 !dark:bg-red-500',
        ring: '!ring-red-600 !dark:ring-red-400',
      }"
      @click="onClick ? onClick() : null"
    >
      <slot />
    </UKbd>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  text?: string,
  tooltip?: {
    text?: string,
    shortcuts?: string[]
  },
  colored?: string,
  onClick?:() => void
}>();

</script>
