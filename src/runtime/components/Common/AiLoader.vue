<template>
  <div class="!w-full !h-full flex items-center justify-center relative">
    <img
      src="~/assets/img/ai-loader.gif"
      :style="{
        filter: `drop-shadow(20px ${shadowOffset}px 100px ${primaryColor})`,
        border: `1px ${primaryColor}`

      }"
      class="-mt-20 select-none pointer-events-none h-96"
    >
    <div class="absolute inset-0 bg-transparent pointer-events-auto" />
    <div
      class="absolute bottom-32 left-0 w-full text-center text-md
        font-semibold py-2"
    >
      <span
        class="bg-gradient-to-r from-black dark:from-white to-black/50
          dark:to-white/50
          bg-clip-text text-transparent uppercase"
      >
        {{ `${model} ${$t('aiIsProcessingTheFile')}` }}
      </span>
      <CommonLoadingDots />
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  model: string;
}>();

const theme = useAppConfig();

const colorMap: Record<string, string> = {
  orange: '#f97316',
  red: '#ef4444',
  rose: '#f43f5e',
  pink: '#ec4899',
  fuchsia: '#d946ef',
  purple: '#a855f7',
  violet: '#8b5cf6',
  indigo: '#6366f1',
  sky: '#0ea5e9',
  cyan: '#06b6d4',
  teal: '#14b8a6',
  emerald: '#10b981',
  green: '#22c55e',
  lime: '#84cc16',
  amber: '#f59e0b',
  stone: '#78716c',
  neutral: '#737373',
  zinc: '#71717a',
  cool: '#64748b',
  slate: '#64748b'
};

const primaryColor = computed(() => {
  const hexColor = colorMap[theme.ui.primary] || '#ffffff';
  return hexToRGBA(hexColor, 0.4);
});

const shadowOffset = ref(-10);
let shadowDirection = 1;
let intervalId: ReturnType<typeof setInterval> | null = null;

const animateShadow = () => {
  intervalId = setInterval(() => {
    shadowOffset.value += shadowDirection * 2;

    if (shadowOffset.value >= 120) {
      shadowDirection = -1;
    } else if (shadowOffset.value <= -120) {
      shadowDirection = 1;
    }
  }, 80);
};

onMounted(() => animateShadow());

onUnmounted(() => {
  if (intervalId) { clearInterval(intervalId); }
});

</script>
