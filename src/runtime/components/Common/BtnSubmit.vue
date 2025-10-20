<template>
  <UButton
    icon="i-heroicons-rocket-launch"
    type="submit"
    :label="$t('btn.submit')"
    :disabled="disabled"
    :color="disabled ? 'gray' : 'green'"
    :class="disabled ? '!opacity-40' : 'opacity-100'"
    class="px-5 transition-colors duration-300 ease-in-out"
  />
</template>

<script setup lang="ts">

defineProps<{
  disabled?: boolean;
}>();

</script>
