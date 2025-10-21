export const useUIStore = defineStore('nuxt-xui.ui', {
  persist: true,
  state: () => ({
    key: 0,
    logoURL: '',
    isDark: false,
    primary: 'slate',
    gray: 'stone',
    flashlight: true,
    trunOnRGB: true,
    locale: 'en' as ISO639,
    iLocale: 0,
    videos: [] as string[],
    showVideo: true,
    showVideoOptions: true,
    videoOpacity: 0.5,
    videoKey: 0,
    iVideo: 70,
    videoURL: '',
    isPlaying: false,
    isBlurred: false,
    isYouTubeReady: false,
    showFirstVideo: true,
    volumeVideo: 0.8,
    volumeFX: 0.1
  }),
  actions: {
    rerender () {
      this.key++;
    },
    addVideo (url: string) {
      if (!url || typeof url !== 'string') { return; }
      this.videos.push(url);
      this.iVideo = this.videos.length - 1;
      this.videoKey++;
    },
    rmvVideo (url: string) {
      if (!url || typeof url !== 'string') { return; }
      const index = this.videos.findIndex(v => v === url);
      if (index !== -1) {
        this.videos.splice(index, 1);
        if (this.iVideo >= this.videos.length) {
          this.iVideo = this.videos.length - 1;
        }
        this.videoKey++;
      }
    },
    nextVideo (player?: any) {
      if (this.isPlaying) {
        this.isPlaying = false;
      }
      if (
        (this.videoURL.includes('youtube.com') ||
          this.videoURL.includes('youtu.be')) &&
        player
      ) {
        if (typeof player.destroy === 'function') {
          player.destroy();
        } else if (typeof player.stopVideo === 'function') {
          player.stopVideo();
        }
      }
      this.iVideo = (this.iVideo + 1) % this.videos.length;
      this.videoKey++;
    },
    prevVideo (player?: any) {
      if (this.isPlaying) {
        this.isPlaying = false;
      }
      if (
        (this.videoURL.includes('youtube.com') ||
          this.videoURL.includes('youtu.be')) &&
        player
      ) {
        if (typeof player.destroy === 'function') {
          player.destroy();
        } else if (typeof player.stopVideo === 'function') {
          player.stopVideo();
        }
      }
      this.iVideo = (this.iVideo - 1 + this.videos.length) % this.videos.length;
      this.videoKey--;
    },
    toggleVideo (player?: any) {
      this.isPlaying = !this.isPlaying;
      const video = document.querySelector('video');
      if (video) {
        this.isPlaying ? video.play() : video.pause();
      } else if (
        (this.videoURL.includes('youtube.com') ||
          this.videoURL.includes('youtu.be')) && player
      ) {
        this.isPlaying ? player.playVideo() : player.pauseVideo();
      }
    },
    getRandomVideo () {
      const lastRandoms: number[] = [];
      const ln = this.videos.length;
      let n = Math.floor(Math.random() * ln);
      while (lastRandoms.includes(n)) {
        n = Math.floor(Math.random() * ln);
      }
      this.iVideo = n;
      lastRandoms.push(n);
      if (lastRandoms.length > 40) {
        lastRandoms.shift();
      }
      this.isBlurred = true;
      setTimeout(() => {
        this.videoURL = this.videos[n];
        this.showFirstVideo = !this.showFirstVideo;
        this.videoKey++;
        this.isBlurred = false;
      }, 500);
      this.showFirstVideo = false;
      this.videoKey++;
      nextTick(() => {
        this.videoURL = this.videos[n];
        this.showFirstVideo = true;
        this.isBlurred = false;
      });
    },
    playAudio (audio: HTMLAudioElement) {
      try {
        audio.volume = this.volumeFX;
        audio.currentTime = 0;
        audio.play();
      } catch {}
    }
  }
});

export default useUIStore;
