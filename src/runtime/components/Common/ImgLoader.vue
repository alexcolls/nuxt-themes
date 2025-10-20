<template>
  <div
    v-if="props.isLoading"
    class="relative flex align-middle items-center w-full h-full"
  >
    <div
      v-if="props.isError"
      class="text-red-500 rounded-xl absolute text-center w-full
        font-bold"
    >
      {{ $t('error.loadingImage') }}
    </div>
    <CommonLoaderSimple :is-loading="props.isLoading" />
    <USkeleton
      class="bg-gray-300/80 dark:bg-gray-800/80 w-full rounded-lg transition-all
        duration-500 ease-in-out"
      :class="[
        props.isError ? 'animate-none' : '',
        props.height
      ]"
    />
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  isError: boolean;
  isLoading: boolean;
  height?: string;
}>();

</script>
