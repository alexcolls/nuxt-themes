<template>
  <ClientOnly>
    <div
      class="relative flex items-center justify-center h-[88vh] w-full
        overflow-hidden z-0"
    >
      <div
        v-show="ui.showVideo"
        :key="ui.videoKey"
      >
        <video
          v-show="showFirstVideo"
          ref="video1Ref"
          autoplay
          muted
          loop
          :style="`opacity: ${ui.videoOpacity}%`"
          class="fixed top-0 left-0 h-screen w-screen z-[-1] object-cover
            transition-opacity duration-500 ease-in-out"
          :class="[
            isBlurred ? 'blur' : 'no-blur',
            changeVideoOnClick ? 'cursor-pointer' : ''
          ]"
          @click="getVideo"
          @loadeddata="handleVideoLoaded"
        >
          <source :src="video1" type="video/mp4">
          {{ $t('error.video') }}
        </video>
        <video
          v-show="!showFirstVideo"
          ref="video2Ref"
          autoplay
          muted
          loop
          class="fixed top-0 left-0 h-screen w-screen cursor-pointer z-[-1]
            object-cover transition-opacity duration-500 ease-in-out"
          :class="isBlurred ? 'blur' : 'no-blur'"
          :style="`opacity: ${ui.videoOpacity}%`"
          @click="getVideo"
          @loadeddata="handleVideoLoaded"
        >
          <source :src="video2" type="video/mp4">
          {{ $t('error.video') }}
        </video>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">

const { changeVideoOnClick } = defineProps<{
  changeVideoOnClick?: boolean
}>();

const NO_REPEAT = 40;

const { ui } = useStore();

const key = ref(0);
const video1 = ref(ui.videoURL);
const video2 = ref(ui.videoURL);
const showFirstVideo = ref(true);
const isBlurred = ref(true);

const video1Ref = ref<HTMLVideoElement | null>(null);
const video2Ref = ref<HTMLVideoElement | null>(null);

watch(() => ui.iVideo, async (i) => {
  const i2 = i >= ui.videos.length ? 0 : i + 1;
  ui.videoURL = ui.videos[i];
  video1.value = ui.videos[i];
  video2.value = ui.videos[i2];
  await nextTick();
});

watch(video1, (v) => {
  ui.videoURL = v;
});

const lastRandoms: number[] = [];
const getVideo = () => {
  if (!changeVideoOnClick) {
    return;
  }
  const ln = ui.videos.length;
  let n = getRandomInt(ln);
  while (lastRandoms.includes(n)) {
    n = getRandomInt(ln);
  }
  ui.iVideo = n;
  lastRandoms.push(n);
  if (lastRandoms.length > NO_REPEAT) {
    lastRandoms.shift();
  }
  isBlurred.value = true;
  setTimeout(() => {
    if (showFirstVideo.value) {
      video2.value = ui.videos[n];
    } else {
      video1.value = ui.videos[n];
      ui.videoURL = ui.videos[n];
    }
    showFirstVideo.value = !showFirstVideo.value;
    key.value++;
  }, 500);
};

const handleVideoLoaded = () => {
  setTimeout(() => {
    isBlurred.value = false;
  }, 300);
};

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.blur {
  filter: blur(10px);
  transition: filter 1s;
}

.no-blur {
  filter: blur(0);
  transition: filter 0.5s;
}
</style>
