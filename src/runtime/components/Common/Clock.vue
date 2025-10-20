<template>
  <UPopover
    mode="hover"
    class="z-50"
    :popper="{ placement: 'top-end' }"
  >
    <span class="py-1">{{ time }}</span>
    <template #panel>
      <div class="p-2">
        <div class="text-center">
          {{ date }}
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">

const { ui } = useStore();

const time = ref('00:00');
const date = ref('');

const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  time.value = `${hours}:${minutes}`;
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  date.value = now.toLocaleDateString(ui.locale, options);
};

let intervalId: number;

onMounted(() => {
  updateTime();
  intervalId = Number(setInterval(updateTime, 1000));
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

</script>
