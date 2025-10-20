<template>
  <UButton
    variant="solid"
    :disabled="disabled"
    :color="disabled ? 'gray' : 'green'"
    icon="i-heroicons-plus-20-solid"
    class="pl-4 pr-6 transition-colors duration-300 ease-in-out"
  >
    <CommonTxtBtn>
      {{ $t('btn.add') }}
    </CommonTxtBtn>
  </UButton>
</template>

<script setup lang="ts">

const { disabled } = defineProps<{
  disabled?: boolean;
}>();

</script>
