<template>
  <div
    class="w-full h-full inline-flex justify-center items-center align-middle
      transitiom-all duration-500 ease-in-out z-50 animate-pulse"
  >
    <div class="text-center opacity-70 -mt-8">
      <UIcon
        :name="icon ?? 'i-svg-spinners-blocks-shuffle-3'"
        class="mr-2 text-5xl"
        :class="iconClass"
      />
      <div>
        {{ $t('loading') }}<CommonLoadingDots />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  icon?: string;
  iconClass?: string;
}>();

</script>
