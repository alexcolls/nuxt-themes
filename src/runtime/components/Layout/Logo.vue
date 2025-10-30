<template>
  <div
    v-if="ui.logoURL"
    class="cursor-pointer mr-8"
    @click="navigateTo(ui.logoURL, {
      open: {
        target: '_blank',
        windowFeatures: {
          width: 500,
          height: 500
        }
      }
    })"
  >
    <slot>
      <div class="h-14 flex items-center justify-center">
        <CommonTxtGradient class="text-xl font-bold">
          Nuxt Themes
        </CommonTxtGradient>
      </div>
    </slot>
  </div>
  <div
    v-else
    class="mr-8"
  >
    <slot>
      <div class="h-14 flex items-center justify-center">
        <CommonTxtGradient class="text-xl font-bold">
          Nuxt Themes
        </CommonTxtGradient>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">

const { ui } = useNuxtUxStore();

</script>
