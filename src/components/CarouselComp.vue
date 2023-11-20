<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style lang="scss" scoped>
.carousel__item {
  background-color: var(--secondary);
  height: 65vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
}
</style>
