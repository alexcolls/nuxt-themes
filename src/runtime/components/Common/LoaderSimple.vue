<template>
  <div
    v-if="isLoading"
    class="absolute inset-0 flex items-center justify-center"
  >
    <div
      class="w-9 h-9 border-4 border-gray-200 border-t-primary-500
        rounded-full animate-spin"
    />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  isLoading: boolean;
}>();

</script>
