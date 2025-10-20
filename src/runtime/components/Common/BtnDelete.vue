<template>
  <UButton
    variant="solid"
    :color="disabled || (hoverEffect && !isHovering) ? 'gray' : 'red'"
    icon="i-heroicons-trash-20-solid"
    :disabled="disabled"
    :class="disabled ? '!opacity-40' : 'opacity-100'"
    class="pr-5 pl-4 transition-colors duration-300 ease-in-out"
  >
    <div v-if="!hoverEffect || (hoverEffect && isHovering)">
      {{ disabled ?
        deleted ? $t('btn.deleted') : $t('btn.delete') :
        $t('btn.delete')
      }}
    </div>
  </UButton>
</template>

<script setup lang="ts">

defineProps<{
  disabled?: boolean;
  deleted?: boolean;
  hoverEffect?: boolean;
  isHovering?: boolean;
}>();

</script>
