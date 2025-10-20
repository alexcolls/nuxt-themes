<template>
  <swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
    :slides-per-view="1"
    :space-between="20"
    :loop="true"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :effect="'creative'"
    :creative-effect="{
      prev: { shadow: true, translate: ['-20%', 0, -1] },
      next: { translate: ['100%', 0, 0] }
    }"
    class="swiper-container"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Autoplay as SwiperAutoplay,
  Pagination as SwiperPagination,
  EffectCreative as SwiperEffectCreative
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

defineProps<{ items: any[] }>();

</script>

<style>
.swiper-container {
  width: 100%;
  max-width: 600px;
}
</style>
