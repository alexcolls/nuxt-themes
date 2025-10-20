<template>
  <div class="relative flex items-center justify-start">
    <transition name="fade">
      <CommonImgLoader
        v-if="isLoading || isError"
        :is-error="isError"
        :is-loading="isLoading"
        :height="height"
      />
    </transition>
    <transition name="fade">
      <div v-if="!isLoading && !isError && isImage">
        <NuxtImg
          :src="imageSrc!"
          :alt="alt ?? 'Image'"
          class="max-w-full max-h-full rounded-lg shadow-md transition-all
            duration-500 opacity-100 dark:shadow-gray-700 cursor-pointer"
          @load="onLoad"
          @error="onError"
          @click="isModalOpen = true"
        />
        <div
          v-if="metadata"
          class="text-sm mt-2 text-center text-gray-600 dark:text-gray-300
            transition-colors"
        >
          <div v-if="showName && metadata.name">
            {{ metadata.name }}
          </div>
          <div v-if="showDate && metadata.createdAt" class="opacity-80">
            {{ convertUTCToLocal(metadata.createdAt) }}
          </div>
        </div>
      </div>
    </transition>
    <UModal
      v-if="metadata"
      v-model="isModalOpen"
      :ui="{ width: 'sm:w-fit sm:max-w-[990px]' }"
    >
      <UCard
        :ui="{
          body: {
            base: 'flex justify-center',
            padding: 'px-4 py-5 sm:p-2'
          }
        }"
      >
        <template #header>
          <div class="flex justify-between -my-2 w-full text-center break-all">
            <div class="text-sm mt-2 opacity-80 w-full">
              {{ metadata.name }}
            </div>
            <CommonBtnClose class="-mr-2" @click="isModalOpen = false" />
          </div>
        </template>
        <div
          class="relative w-fit h-fit flex justify-center"
          @mousemove="handleMouseMove"
          @mouseleave="isHovering = false"
        >
          <NuxtImg
            :src="imageSrc!"
            :alt="alt ?? 'Image'"
            class="max-w-full max-h-full"
          />
          <div
            v-if="isHovering"
            class="absolute w-32 h-32 border-4 border-white
              rounded-full pointer-events-none shadow-lg"
            :style="{
              top: magnifier.y + 'px',
              left: magnifier.x + 'px',
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: `${magnifier.bgX}% ${magnifier.bgY}%`,
              backgroundSize: zoomIn
            }"
          />
        </div>
        <template #footer>
          <div class="flex justify-between text-center w-full break-all">
            <div
              class="text-sm opacity-60 w-full"
              :class="downloadUrl ? 'mt-2' : ''"
            >
              {{ metadata.id }}
            </div>
            <UButton
              v-if="downloadUrl"
              variant="ghost"
              color="gray"
              class="hover:shadow-sm !shadow-gray-400/80
                dark:hover:bg-gray-800/80 active:shadow-inner
                transition-all duration-300 ease-in-out border
                active:duration-500 active:!opacity-80 !ring-0
                focus-visible:!ring-0 border-transparent
                hover:dark:border-gray-600 active:bg-white
                dark:active:bg-gray-900 dark:shadow-gray-800
                hover:border-gray-200"
              icon="i-heroicons-document-arrow-down-20-solid"
              @click="onDownloadFile"
            />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  url: string;
  alt?: string;
  metadata?: DocumentUploaded;
  height?: string;
  showName?: boolean;
  showDate?: boolean;
  downloadUrl?: string;
}>();

const { auth } = useStore();
const { downloadFile } = useAlerts();

const imageSrc = ref<string | null>(null);
const isImage = ref(true);
const isError = ref(false);
const isLoading = ref(true);
const isModalOpen = ref(false);
const fileData = ref<Blob | null>(null);
const isHovering = ref(false);
const magnifier = ref({ x: 0, y: 0, bgX: 300, bgY: 300 });
const zoomIn = ref('1000%');

const fetchUploadedFiles = async (url: string) => {
  const res = await $fetch<Blob>(url, {
    headers: {
      Authorization: `${auth.type} ${auth.token}`
    },
    responseType: 'blob'
  });
  let fileType = res.type;
  if (fileType === 'application/octet-stream') {
    fileType = 'image/png';
  }
  const fileBlob = new Blob([res], { type: fileType });
  const file = {
    type: fileType,
    data: fileBlob,
    size: fileBlob.size
  };
  return file;
};

const loadImage = async () => {
  isLoading.value = true;
  isError.value = false;
  try {
    const file = await fetchUploadedFiles(props.url);
    fileData.value = file.data;
    isImage.value = file.type.startsWith('image/');
    if (isImage.value) {
      imageSrc.value = URL.createObjectURL(file.data);
    } else {
      imageSrc.value = null;
    }
    isLoading.value = false;
  } catch (e) {
    isError.value = true;
    isLoading.value = false;
  }
};

const onLoad = () => {
  isLoading.value = false;
  isError.value = false;
};

const onError = () => {
  isLoading.value = false;
  isError.value = true;
};

const onDownloadFile = async () => {
  if (props.downloadUrl) {
    try {
      const res = await $fetch<Blob>(props.downloadUrl, {
        headers: {
          Authorization: `${auth.type} ${auth.token}`
        },
        responseType: 'blob'
      });
      const url = URL.createObjectURL(res);
      const a = document.createElement('a');
      a.href = url;
      a.download = props.metadata?.name || 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      downloadFile.success();
    } catch (err) {
      downloadFile.error();
    }
  }
};

const handleMouseMove = (event: MouseEvent) => {
  const container = event.currentTarget as HTMLElement;
  const rect = container.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const percentX = (offsetX / rect.width) * 100;
  const percentY = (offsetY / rect.height) * 100;
  magnifier.value = {
    x: offsetX - 64,
    y: offsetY - 64,
    bgX: percentX,
    bgY: percentY
  };
  isHovering.value = true;
};

watch(() => props.url, loadImage);

onMounted(loadImage);

</script>
