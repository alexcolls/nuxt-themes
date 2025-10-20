<template>
  <UPopover mode="hover" class="z-50">
    <CommonBtnIcon
      v-if="auth.isAuth"
      icon="i-heroicons-lock-open-16-solid"
      class="!text-green-600 dark:!text-green-400"
    />
    <CommonBtnIcon
      v-else
      icon="i-heroicons-lock-closed-solid"
      class="!text-red-600 dark:!text-red-400"
    />
    <template #panel>
      <div class="p-2">
        <CommonBtnGradient
          v-if="auth.isAuth"
          class="group px-4 pl-3 py-2 transition-all duration-300 shadow-white
            ease-in-out rounded-md hover:shadow-lg hover:!border border-red-500"
          icon="i-heroicons-lock-closed-solid"
          @click="auth.logout()"
        >
          {{ $t('logout') }}
        </CommonBtnGradient>
        <div v-else class="px-2 text-sm">
          {{ $t('unauthorized') }}.
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">

const { ui, auth } = useStore();
const langs = useLangs();
const { locale } = useI18n();

locale.value = ui.locale;

const selectedLang = ref(langs[ui.iLocale]);

watch(selectedLang, (v) => {
  ui.locale = v.value;
  locale.value = v.value;
  langs.forEach((lang: LangOption, i: number) => {
    if (lang.value === v.value) {
      ui.iLocale = i;
    }
  });
});

</script>
