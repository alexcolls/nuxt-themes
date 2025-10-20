<template>
  <ClientOnly>
    <div class="!rounded-xl h-full w-full flex justify-center">
      <video
        ref="video1Ref"
        autoplay
        muted
        loop
        class="transition-opacity duration-500 ease-in-out opacity-80"
      >
        <source src="~/assets/vid/ai-loader-black.mp4" type="video/mp4">
        {{ $t('error.video') }}
      </video>
      <div
        class="absolute bottom-2 left-0 w-full text-center
        text-xl font-semibold py-2"
      >
        <span>THE MODEL IS PROCESSING THIS FILE</span><CommonLoadingDots />
      </div>
    </div>
  </ClientOnly>
</template>
