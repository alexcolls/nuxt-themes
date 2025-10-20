<template>
  <div
    v-if="showButton"
    class="fixed bottom-10 right-10 z-50"
  >
    <UTooltip
      :text="$t('btn.goUp')"
      :shortcuts="['⌘', 'Y']"
      class="pt-14"
    >
      <UButton
        color="black"
        class="p-2"
        icon="i-heroicons-arrow-small-up-20-solid"
        @click="scrollToTop"
      />
    </UTooltip>
  </div>
</template>

<script setup lang="ts">

defineShortcuts({
  meta_y: {
    usingInput: true,
    handler: () => {
      scrollToTop();
    }
  }
});

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 100;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
