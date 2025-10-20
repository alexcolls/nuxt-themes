<template>
  <footer
    class="z-50 fixed h-12 w-full bg-gray-100/60 dark:bg-gray-900/60
      bottom-0 border-primary-500/70 pt-1"
  >
    <CommonContainer class="flex justify-between items-center h-full">
      <div class="text-sm opacity-70 mx-2 flex">
        <span class="sm:block hidden">
          {{ year }} {{ $t('footer.copyright') }}
        </span>
        <span class="sm:block hidden">
          &nbsp;v.{{ version }}
        </span>
        <UTooltip
          :text="`${$t('footer.copyright')}`"
          :ui="{ base: '[@media(pointer:coarse)]:!block' }"
          class="sm:hidden block cursor-pointer"
        >
          <span>
            © {{ year }} v.{{ version }}
          </span>
        </UTooltip>
      </div>
      <div class="flex">
        <LayoutTheme />
      </div>
    </CommonContainer>
  </footer>
</template>

<script setup lang="ts">

const config = useRuntimeConfig();
const version = config.public.nuxtThemes?.version ?? '1.0.0';
const date = new Date();
const year = date.getFullYear();

</script>
