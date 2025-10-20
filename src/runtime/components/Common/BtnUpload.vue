<template>
  <UButton
    icon="i-heroicons-arrow-up-on-square"
    type="submit"
    :label="$t('btn.upload')"
    :disabled="disabled"
    :color="disabled ? 'gray' : 'green'"
    :class="disabled ? '!opacity-40' : 'opacity-100'"
    class="px-5 pr-6 transition-colors duration-300 ease-in-out"
  />
</template>

<script setup lang="ts">

defineProps<{
  disabled?: boolean;
}>();

</script>
