<template>
  <UPopover mode="hover" class="z-50">
    <CommonBtnIcon icon="i-heroicons-paint-brush-solid" />
    <template #panel>
      <UCard class="bg-gray-100 dark:bg-gray-900 -m-1">
        <template #header>
          <div class="mb-3 -mt-2">
            <UButton
              class="rounded-full bg-orange-500 dark:bg-orange-400 scale-110
              hover:bg-orange-600 dark:hover:bg-orange-500 !mr-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'orange' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'orange'"
            />
            <UButton
              class="rounded-full bg-red-500 dark:bg-red-400 scale-110
              hover:bg-red-600 dark:hover:bg-red-500 mx-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'red' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'red'"
            />
            <UButton
              class="rounded-full bg-rose-500 dark:bg-rose-400 scale-110
              hover:bg-rose-600 dark:hover:bg-rose-500 mx-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'rose' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'rose'"
            />
            <UButton
              class="rounded-full bg-pink-500 dark:bg-pink-400 scale-110
              hover:bg-pink-600 dark:hover:bg-pink-500 mx-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'pink' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'pink'"
            />
            <UButton
              class="rounded-full bg-fuchsia-500 dark:bg-fuchsia-400
              hover:bg-fuchsia-600 dark:hover:bg-fuchsia-500 ml-3 border-2
                scale-110 hover:scale-125"
              :class="theme.ui.primary === 'fuchsia' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'fuchsia'"
            />
          </div>
          <div class="mb-3">
            <UButton
              class="rounded-full bg-purple-500 dark:bg-purple-400 scale-110
              hover:bg-purple-600 dark:hover:bg-purple-500 mr-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'purple' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'purple'"
            />
            <UButton
              class="rounded-full bg-violet-500 dark:bg-violet-400 scale-110
              hover:bg-violet-600 dark:hover:bg-violet-500 mx-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'violet' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'violet'"
            />
            <UButton
              class="rounded-full bg-indigo-500 dark:bg-indigo-400 scale-110
              hover:bg-indigo-600 dark:hover:bg-indigo-500 mx-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'indigo' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'indigo'"
            />
            <UButton
              class="rounded-full bg-sky-500 dark:bg-sky-400 scale-110
              hover:bg-sky-600 dark:hover:bg-sky-500 mx-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'sky' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'sky'"
            />
            <UButton
              class="rounded-full bg-cyan-500 dark:bg-cyan-400 scale-110
              hover:bg-cyan-600 dark:hover:bg-cyan-500 ml-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'cyan' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'cyan'"
            />
          </div>
          <div class="mb-3">
            <UButton
              class="rounded-full bg-teal-500 dark:bg-teal-400 scale-110
              hover:bg-teal-600 dark:hover:bg-teal-500 mr-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'teal' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'teal'"
            />
            <UButton
              class="rounded-full bg-emerald-500 dark:bg-emerald-400
              hover:bg-emerald-600 dark:hover:bg-emerald-500 mx-3 border-2
                scale-110 hover:scale-125"
              :class="theme.ui.primary === 'emerald' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'emerald'"
            />
            <UButton
              class="rounded-full bg-green-500 dark:bg-green-400 scale-110
              hover:bg-green-600 dark:hover:bg-green-500 mx-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'green' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'green'"
            />
            <UButton
              class="rounded-full bg-lime-500 dark:bg-lime-400 scale-110
              hover:bg-lime-600 dark:hover:bg-lime-500 mx-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'lime' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'lime'"
            />
            <UButton
              class="rounded-full bg-amber-500 dark:bg-amber-400 scale-110
              hover:bg-amber-600 dark:hover:bg-amber-500 ml-3 border-2
                hover:scale-125"
              :class="theme.ui.primary === 'amber' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'amber'"
            />
          </div>
          <div>
            <UButton
              class="rounded-full !bg-stone-500 border-2
              hover:bg-stone-400 mr-3 scale-110
                hover:scale-125"
              :class="theme.ui.primary === 'stone' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'stone'"
            />
            <UButton
              class="rounded-full !bg-neutral-500 border-2
              hover:bg-neutral-400 mx-3 scale-110
                hover:scale-125"
              :class="theme.ui.primary === 'neutral' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'neutral'"
            />
            <UButton
              class="rounded-full !bg-zinc-500 border-2
              hover:bg-zinc-400 mx-3 scale-110
                hover:scale-125"
              :class="theme.ui.primary === 'zinc' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'zinc'"
            />
            <UButton
              class="rounded-full !bg-gray-500 border-2
              hover:bg-cool-400 mx-3 scale-110
                hover:scale-125"
              :class="theme.ui.primary === 'cool' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'cool'"
            />
            <UButton
              class="rounded-full !bg-slate-500 border-2
              hover:bg-slate-400 ml-3 scale-110
                hover:scale-125"
              :class="theme.ui.primary === 'slate' ?
                selectedStyle : 'border-transparent'"
              @click="() => theme.ui.primary = 'slate'"
            />
          </div>
        </template>
        <div class="-mt-2">
          <UButton
            class="rounded-full bg-stone-300 dark:bg-stone-700 border-2
            hover:bg-stone-400 dark:hover:bg-stone-600 mr-3 scale-110
              hover:scale-125"
            :class="theme.ui.gray === 'stone' ?
              selectedStyle : 'border-transparent'"
            @click="() => theme.ui.gray = 'stone'"
          />
          <UButton
            class="rounded-full bg-neutral-300 dark:bg-neutral-700 border-2
            hover:bg-neutral-400 dark:hover:bg-neutral-600 mx-3 scale-110
              hover:scale-125"
            :class="theme.ui.gray === 'neutral' ?
              selectedStyle : 'border-transparent'"
            @click="() => theme.ui.gray = 'neutral'"
          />
          <UButton
            class="rounded-full bg-zinc-300 dark:bg-zinc-700 border-2
            hover:bg-zinc-400 dark:hover:bg-zinc-600 mx-3 scale-110
              hover:scale-125"
            :class="theme.ui.gray === 'zinc' ?
              selectedStyle : 'border-transparent'"
            @click="() => theme.ui.gray = 'zinc'"
          />
          <UButton
            class="rounded-full bg-gray-300 dark:bg-gray-700 border-2
            hover:bg-cool-400 dark:hover:bg-cool-600 mx-3 scale-110
              hover:scale-125"
            :class="theme.ui.gray === 'cool' ?
              selectedStyle : 'border-transparent'"
            @click="() => theme.ui.gray = 'cool'"
          />
          <UButton
            class="rounded-full bg-slate-300 dark:bg-slate-700 border-2
            hover:bg-slate-400 dark:hover:bg-slate-600 ml-3 scale-110
              hover:scale-125"
            :class="theme.ui.gray === 'slate' ?
              selectedStyle : 'border-transparent'"
            @click="() => theme.ui.gray = 'slate'"
          />
        </div>
        <template #footer>
          <div class="flex justify-between items-center p-2">
            <span class="text-sm text-gray-700 dark:text-gray-300">
              <span class="text-red-500">
                R
              </span>
              <span class="text-green-500">
                G
              </span>
              <span class="text-blue-500">
                B
              </span>
              <span class="pl-8">
                {{ ui.trunOnRGB ? 'ON' : 'OFF' }}
              </span>
            </span>
            <UToggle v-model="ui.trunOnRGB" />
          </div>
          <div
            class="flex justify-between items-center p-2"
          >
            <span
              class="text-sm text-gray-700 dark:text-gray-300"
            >
              {{ $t('flashlight') }}
              <span class="pl-[9px]">{{ ui.flashlight ? 'ON' : 'OFF' }}</span>
            </span>
            <UToggle v-model="ui.flashlight" />
          </div>
        </template>
      </UCard>
    </template>
  </UPopover>
</template>

<script setup lang="ts">

const theme = useAppConfig();
const { ui } = useStore();

theme.ui.primary = ui.primary;
watch(() => theme.ui.primary, () => {
  ui.primary = theme.ui.primary;
});

const selectedStyle = 'border-gray-900 dark:border-gray-100 scale-125';

let intervalId: ReturnType<typeof setInterval> | null = null;

const colors = [
  'orange', 'red', 'rose', 'pink', 'fuchsia',
  'purple', 'violet', 'indigo', 'sky', 'cyan',
  'teal', 'emerald', 'green', 'lime', 'amber',
  'stone', 'neutral', 'zinc', 'cool', 'slate'
];

const startColorCycle = () => {
  let index = colors.indexOf(theme.ui.primary);
  if (index === -1) { index = 0; }
  intervalId = setInterval(() => {
    index = (index + 1) % colors.length;
    theme.ui.primary = colors[index];
  }, 1000);
};

const stopColorCycle = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

watch(() => ui.trunOnRGB, (v) => {
  if (v) {
    startColorCycle();
  } else {
    stopColorCycle();
  }
}, { immediate: true });

onUnmounted(() => stopColorCycle());

</script>
