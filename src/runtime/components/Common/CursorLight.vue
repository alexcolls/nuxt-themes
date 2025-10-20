<template>
  <div
    v-if="turnLight"
    ref="lightRef"
    class="mouse-light"
    :style="{ background: lightColor }"
  />
</template>

<script setup lang="ts">

const props = defineProps({
  color: {
    type: String,
    required: true
  },
  turnLight: {
    type: Boolean,
    default: true
  }
});

const lightRef = ref<HTMLElement>();

const lightColors: Record<string, string> = {
  orange: 'rgba(255, 165, 0, 0.4)',
  red: 'rgba(255, 0, 0, 0.4)',
  rose: 'rgba(231, 73, 127, 0.4)',
  pink: 'rgba(255, 105, 180, 0.4)',
  fuchsia: 'rgba(193, 84, 193, 0.4)',
  purple: 'rgba(128, 0, 128, 0.4)',
  violet: 'rgba(138, 43, 226, 0.4)',
  indigo: 'rgba(75, 0, 130, 0.4)',
  sky: 'rgba(135, 206, 235, 0.4)',
  cyan: 'rgba(0, 255, 255, 0.4)',
  teal: 'rgba(0, 128, 128, 0.4)',
  emerald: 'rgba(80, 200, 120, 0.4)',
  green: 'rgba(0, 255, 0, 0.4)',
  lime: 'rgba(173, 255, 47, 0.4)',
  amber: 'rgba(255, 191, 0, 0.4)',
  stone: 'rgba(115, 107, 96, 0.4)',
  neutral: 'rgba(128, 128, 128, 0.4)',
  zinc: 'rgba(176, 176, 176, 0.4)',
  cool: 'rgba(200, 200, 200, 0.4)',
  slate: 'rgba(112, 128, 144, 0.4)',
  default: 'rgba(100, 100, 255, 0.4)'
};

const lightColor = computed(() => {
  return `radial-gradient(circle, ${lightColors[props.color] ||
    lightColors.default} 0%, rgba(0, 0, 0, 0) 70%)`;
});

const handleMouseMove = (event: MouseEvent) => {
  if (lightRef.value) {
    const lightSize = 450;
    lightRef.value.style.transform =
      `translate(${event.clientX - lightSize / 2}px,
       ${event.clientY - lightSize / 2}px)`;
  }
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
});

</script>

<style scoped>
.mouse-light {
  position: fixed;
  width: 450px;
  height: 450px;
  pointer-events: none;
  border-radius: 50%;
  filter: blur(50px);
  transition: transform 0.05s linear, background 0.3s ease-in-out;
  z-index: 0;
}
</style>
