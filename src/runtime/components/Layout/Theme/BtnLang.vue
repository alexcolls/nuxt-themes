<template>
  <UPopover mode="hover" class="z-50">
    <CommonBtnIcon :icon="selectedLang.icon" />
    <template #panel>
      <div class="px-2 py-1">
        <div
          v-for="(e, i) in langs"
          :key="e.value"
          class="hover:scale-110 rounded-full my-2 bg-opacity-20"
          :class="selectedLang.value === e.value
            ? 'bg-primary hover:scale-100' : ''"
        >
          <UButton
            color="gray"
            variant="ghost"
            :icon="e.icon"
            class="text-center !bg-transparent"
            @click="selectedLang = langs[i]"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">

const { locale } = useI18n();
const { ui } = useStore();
const langs = useLangs();

const selectedLang = ref(langs[ui.iLocale]);

watch(selectedLang, (v) => {
  ui.locale = v.value;
  locale.value = v.value;
  langs.forEach((lang: LangOption, i: number) => {
    if (lang.value === v.value) { ui.iLocale = i; }
  });
}, { immediate: true });

onMounted(() => {
  locale.value = ui.locale;
  selectedLang.value = langs[ui.iLocale];
});

</script>
