<template>
  <ClientOnly>
    <div
      class="relative flex items-center
        justify-center h-screen w-full overflow-hidden z-0"
    >
      <div v-if="ui.showVideo" :style="{ opacity: ui.videoOpacity }">
        <div v-if="isYouTube(ui.videoURL)">
          <div
            id="youtube-player"
            ref="videoRef"
            class="fixed top-0 left-0 h-screen w-screen z-[-1]
            object-cover transition-opacity duration-500 ease-in-out"
          />
          <div
            class="click-overlay"
            @click="handleOverlayClick"
          />
        </div>
        <video
          v-else
          ref="videoRef"
          :src="ui.videoURL"
          class="fixed top-0 left-0 h-screen w-screen z-[-1]
            object-cover transition-opacity duration-500 ease-in-out"
          :class="[ui.isBlurred ? 'blur' : 'no-blur']"
          autoplay
          loop
          @loadeddata="handleVideoLoaded"
        >
          <source :src="ui.videoURL" type="video/mp4">
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

const { ui } = useStore();

const videoRef = ref<HTMLDivElement | HTMLVideoElement | null>(null);
const isPlaying = ref(false);

const isYouTube = (url: string) => {
  if (!url) { return false; }
  return url.includes('youtube.com') || url.includes('youtu.be');
};

const extractVideoId = (url: string): string | null => {
  let match = url.match(/watch\?v=([^&]+)/);
  if (match && match[1]) { return match[1]; }
  match = url.match(/youtu\.be\/([^?]+)/);
  return match ? match[1] : null;
};

const handleVideoLoaded = () => {
  setTimeout(() => {
    ui.isBlurred = false;
  }, 300);
};

const initializeYouTubePlayer = () => {
  const container = videoRef.value as HTMLDivElement | null;
  if (!container) { return; }
  if (!window.YT || !window.YT.Player) { return; }
  const videoId = extractVideoId(ui.videoURL);
  if (!videoId) { return; }
  youtubePlayer.value = new window.YT.Player(container, {
    height: '360',
    width: '640',
    videoId,
    events: {
      onReady: (event: any) => {
        youtubePlayer.value = event.target;
        ui.isYouTubeReady = true;
        isPlaying.value = true;
      },
      onStateChange: (event: any) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
          isPlaying.value = true;
        } else if (
          event.data === window.YT.PlayerState.PAUSED ||
        event.data === window.YT.PlayerState.ENDED
        ) {
          isPlaying.value = false;
        }
      }
    }
  });
};

watch(() => ui.videoURL, (v) => {
  if (isYouTube(v)) {
    nextTick(() => {
      initializeYouTubePlayer();
    });
  } else {
    ui.isPlaying = true;
  }
});

watch(() => ui.volumeVideo, (newVolume) => {
  if (!isYouTube(ui.videoURL)) {
    const videoElement = videoRef.value as HTMLVideoElement | null;
    if (videoElement) {
      videoElement.volume = newVolume;
    }
  } else if (youtubePlayer.value &&
      typeof youtubePlayer.value.setVolume === 'function') {
    youtubePlayer.value.setVolume(newVolume * 100);
  }
});

const handleOverlayClick = () => {
  ui.toggleVideo(youtubePlayer.value);
};

onMounted(async () => {
  ui.videoURL = ui.videos[ui.iVideo];
  if (isYouTube(ui.videoURL)) {
    if (!window.YT || !window.YT.Player) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
      await new Promise<void>((resolve) => {
        (window as any).onYouTubeIframeAPIReady = () => {
          resolve();
        };
      });
    }
    await nextTick();
    initializeYouTubePlayer();
  }
  ui.videoKey++;
});

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
  position: absolute;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
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
