<template>
  <UButton
    icon="i-heroicons-pencil-square-solid"
    type="submit"
    :disabled="disabled"
    :color="disabled ? 'gray' : 'blue'"
    :class="disabled ? '!opacity-40' : 'opacity-100'"
    class="px-6 pr-7 transition-colors duration-300 ease-in-out"
  >
    {{ $t('btn.edit') }}
  </UButton>
</template>

<script setup lang="ts">

defineProps<{
  disabled?: boolean;
}>();

</script>
