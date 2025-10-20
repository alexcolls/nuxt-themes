<template>
  <UPopover mode="hover" class="z-50">
    <CommonBtnIcon :icon="themeIcon" />
    <template #panel>
      <div class="p-2">
        <div class="my-1 transform hover:scale-110">
          <UButton
            :color="colorMode.preference === 'light' ? 'primary' : 'gray'"
            variant="ghost"
            :icon="iconSun"
            class="px-1 text-center"
            @click="setTheme('light')"
          />
        </div>
        <div class="my-1 transform hover:scale-110">
          <UButton
            :color="colorMode.preference === 'dark' ? 'primary' : 'gray'"
            variant="ghost"
            :icon="iconMoon"
            class="px-1 text-center"
            @click="setTheme('dark')"
          />
        </div>
        <div class="border-b my-2 border-gray-300 dark:border-gray-700" />
        <div class="my-1 transform hover:scale-110">
          <UButton
            :color="colorMode.preference === 'system' ? 'primary' : 'gray'"
            variant="ghost"
            :icon="iconSystem"
            class="px-1 text-center"
            @click="setTheme('system')"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">

const iconSun = 'i-line-md-sun-rising-twotone-loop';
const iconMoon = 'i-line-md-sunny-filled-loop-to-moon-filled-loop-transition';
const iconSystem = 'i-line-md-computer-twotone';

const { ui } = useStore();
const colorMode = useColorMode();
const systemDarkMode = ref(
  window.matchMedia('(prefers-color-scheme: dark)').matches
);

if (!colorMode.preference) {
  colorMode.preference = 'system';
}

const themeIcon = computed(() => {
  if (colorMode.preference === 'system') {
    return systemDarkMode.value
      ? iconMoon
      : iconSun;
  }
  return colorMode.preference === 'dark'
    ? iconMoon
    : iconSun;
});

const setTheme = (mode: LightModes) => {
  colorMode.preference = mode;
  systemDarkMode.value = window.matchMedia(
    '(prefers-color-scheme: dark)').matches;
  ui.isDark = mode === 'dark' || (mode === 'system' && systemDarkMode.value);
};

setTheme(colorMode.preference as LightModes);

type MediaQueryListEventHandler = (ev: MediaQueryListEvent) => void;
const updateSystemTheme: MediaQueryListEventHandler = (event) => {
  systemDarkMode.value = event.matches;
};

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', updateSystemTheme);

watchEffect(() => {
  ui.isDark = colorMode.preference === 'dark' ||
    (colorMode.preference === 'system' && systemDarkMode.value);
});

</script>
