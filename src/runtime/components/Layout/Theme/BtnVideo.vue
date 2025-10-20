<template>
  <UPopover
    mode="hover"
    class="z-50"
    :popper="{ placement: 'top-end'}"
    :ui="{ container: ui.showVideo ? '!-mr-3' : '!-mr-4' }"
  >
    <CommonBtnIcon :icon="videoIcon" />
    <template #panel>
      <transition name="video-options" mode="in-out">
        <div
          v-if="ui.showVideoOptions"
          class="pl-3 video-options-container"
          :class="ui.showVideo ? 'w-60 video-options-show' : 'w-16'"
        >
          <div v-if="ui.showVideo" class="py-2 pb-1">
            <div class="flex w-full">
              <UFormGroup :label="$t('videoURL')" class="w-10/12 px-2 pt-2">
                <UInput
                  ref="videoInputRef"
                  :key="ui.videoKey"
                  v-model="ui.videoURL"
                  variant="none"
                  class="border border-primary rounded-md text-primary-500"
                  :ui="{ icon: { base: '!text-primary-500' } }"
                  @focus="scrollToEnd"
                  @input="scrollToEnd"
                />
              </UFormGroup>
              <div class="pt-8 w-2/12">
                <div v-if="showAddURL">
                  <UTooltip :text="$t('btn.add')">
                    <CommonBtnIcon
                      icon="i-heroicons-plus-16-solid"
                      class="!border h-[34px] w-[32px]
                        hover:!border-primary-500"
                      @click="ui.addVideo(ui.videoURL)"
                    />
                  </UTooltip>
                </div>
                <div v-else>
                  <UTooltip :text="$t('btn.rmv')">
                    <CommonBtnIcon
                      icon="i-heroicons-minus-16-solid"
                      class="!border h-[34px] w-[32px]
                        hover:!border-primary-500"
                      @click="ui.rmvVideo(ui.videoURL)"
                    />
                  </UTooltip>
                </div>
              </div>
            </div>
            <div class="flex p-2 w-full mb-2">
              <UFormGroup :label="$t('videoOpacity')" class="w-full">
                <URange
                  v-model="ui.videoOpacity"
                  :max="1"
                  :step="0.05"
                  :min="0"
                />
              </UFormGroup>
            </div>
          </div>
        </div>
      </transition>
      <div
        v-if="ui.showVideo && ui.showVideoOptions"
        class="border-b border-gray-200 dark:border-gray-800"
      />
      <div
        class="w-full flex p-2"
        :class=" !ui.showVideo ? 'py-0 pb-1' : ''"
      >
        <transition name="video-active">
          <div
            v-if="ui.showVideo"
            class="flex"
            :class="ui.showVideoOptions ?? '!block'"
          >
            <CommonBtnIcon
              icon="i-line-md-cog-filled-loop"
              class="h-10 w-10 m-1 mr-2 px-2 rounded-full flex justify-center"
              :class="ui.showVideoOptions
                ? '!border !border-primary-500 !text-primary-500'
                : 'hover:text-gray-500'"
              @click="() => ui.showVideoOptions = !ui.showVideoOptions"
            />
            <div
              class="space-x-2 p-2 rounded-xl border border-primary-500 h-12"
            >
              <UButton
                variant="ghost"
                color="gray"
                icon="i-material-symbols-skip-previous-rounded"
                @click="ui.prevVideo(youtubePlayer)"
              />
              <UButton
                variant="ghost"
                color="gray"
                :icon="ui.isPlaying
                  ? 'i-heroicons-pause-circle-16-solid'
                  : 'i-heroicons-play-circle-16-solid'"
                @click="ui.toggleVideo(youtubePlayer)"
              />
              <UButton
                variant="ghost"
                color="gray"
                icon="i-material-symbols-skip-next-rounded"
                @click="ui.nextVideo(youtubePlayer)"
              />
            </div>
          </div>
        </transition>
        <div
          class="p-2 h-12 transition-transform ease-in-out duration-500"
          :class="ui.showVideo ? '-rotate-90 ml-1' : 'rotate-0'"
        >
          <UToggle
            v-model="ui.showVideo"
            :class="ui.showVideo
              ? 'translate-y-2 -translate-x-1 -mr-2'
              : 'translate-y-2 translate-x-0'"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">

const { ui } = useStore();

watch(() => ui.iVideo, (newIndex) => {
  if (newIndex < 0) {
    ui.iVideo = ui.videos.length - 1;
  } else if (newIndex >= ui.videos.length) {
    ui.iVideo = 0;
  }
  ui.videoURL = ui.videos[ui.iVideo];
  ui.videoKey++;
});

const showAddURL = computed(() => !ui.videos.includes(ui.videoURL));
const videoIcon = computed(() => {
  if (ui.showVideo) {
    return 'i-heroicons-video-camera-20-solid';
  }
  return 'i-heroicons-video-camera-slash-solid';
});

const videoInputRef = ref<any | null>(null);

const scrollToEnd = () => {
  nextTick(() => {
    if (videoInputRef.value?.$el) {
      const inputEl = videoInputRef.value.$el.querySelector('input');
      if (inputEl) {
        inputEl.scrollLeft = inputEl.scrollWidth;
      }
    }
  });
};

watch(() => ui.videoURL, () => {
  scrollToEnd();
});

</script>

<style scoped>
div {
  transition: all 0.5s ease-in-out;
}
.video-options {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateY(100%);
  opacity: 0;
}
.video-options-enter-active, .video-options-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}
.video-options-enter-from, .video-options-leave-to {
  max-height: 0;
  opacity: 0;
}
.video-options-enter-to, .video-options-leave-from {
  max-height: 300px;
  opacity: 1;
}
.video-options-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.video-options-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
