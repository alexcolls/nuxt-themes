<template>
  <div class="flex flex-wrap">
    <div
      v-if="isDisabled && !pending && countdownSide === 'left'"
      class="mt-2 opacity-60"
    >
      {{ counter }}
    </div>
    <UButton
      variant="ghost"
      color="gray"
      :disabled="isDisabled"
      :loading="pending"
      class="h-8 w-8 p-1.5"
      @click="onClick"
    >
      <UIcon
        v-if="countdownSide || (!isDisabled && !pending)"
        name="i-material-symbols-refresh"
        :class="pending ? 'animate-spin' : 'animate-none'"
        class="h-5 w-5"
      />
      <span
        v-else-if="!countdownSide && counter > 0 && !pending"
        class="text-center p-1"
      >
        {{ counter }}
      </span>
    </UButton>
    <div
      v-if="isDisabled && !pending && countdownSide === 'right'"
      class="mt-2 opacity-60"
    >
      {{ counter }}
    </div>
  </div>
</template>

<script setup lang="ts">

const { onRefresh, countdown, countdownState } = defineProps<{
  onRefresh:() => void;
  pending: boolean;
  countdown?: number;
  countdownSide?: 'left' | 'right';
  countdownState?: number;
}>();

const isDisabled = ref(false);
const counter = ref(countdownState || 0);

watch(() => countdownState, () => {
  if (countdownState) {
    onClick();
  }
});

const onClick = () => {
  if (isDisabled.value) { return; }
  if (onRefresh && typeof onRefresh === 'function') {
    onRefresh();
  }
  isDisabled.value = true;
  counter.value = countdown ?? 60;
  const intervalId = setInterval(() => {
    counter.value--;
    if (counter.value <= 0) {
      clearInterval(intervalId);
      isDisabled.value = false;
    }
  }, 1000);
};

</script>
