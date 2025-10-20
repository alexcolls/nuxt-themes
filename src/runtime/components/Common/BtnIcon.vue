<template>
  <UButton
    variant="ghost"
    class="focus:outline-transparent focus-visible:outline-0
        disabled:cursor-not-allowed disabled:opacity-75
        flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5
        p-1.5 text-gray-900 dark:text-gray-100
        hover:text-primary-600 dark:hover:text-primary-400
        hover:bg-white dark:hover:bg-gray-900
        focus-visible:ring-inset focus-visible:ring-2
        focus-visible:ring-primary-500 align-middle h-[31px] w-[31px]
        dark:focus-visible:ring-primary-400 inline-flex items-center
        hover:border border-gray-300 dark:border-gray-700"
  >
    <UIcon
      v-if="icon"
      :name="icon"
      class="h-5 w-5"
      :class="iconClass"
    />
    <slot />
  </UButton>
</template>

<script setup lang="ts">

defineProps<{
  icon?: string;
  iconClass?: string;
}>();

</script>
