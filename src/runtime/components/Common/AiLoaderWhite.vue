<template>
  <ClientOnly>
    <div class="flex items-center justify-center h-full w-full !rounded-xl">
      <video
        ref="video1Ref"
        autoplay
        muted
        loop
        class="transition-opacity duration-500 ease-in-out overflow-x-hidden
          !rounded-lg"
      >
        <source src="~/assets/vid/ai-loader-white.mp4" type="video/mp4">
        {{ $t('error.video') }}
      </video>
    </div>
    <div
      class="absolute bottom-16 left-0 w-full text-center text-xl
        font-semibold py-2"
    >
      <span
        class="bg-gradient-to-r from-primary-500 to-purple-600
          bg-clip-text text-transparent"
      >
        {{ `${app.selectedAiEngine} ${$t('aiIsProcessingTheFile')}` }}
      </span>
      <CommonLoadingDots />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">

const { app } = useStore();

</script>
