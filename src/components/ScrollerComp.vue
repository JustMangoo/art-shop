<template>
  <div class="carousel">
    <Carousel :items-to-show="4.2" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1.5,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "center",
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
.carousel {
  margin-block: 1rem;
  .carousel__item {
    background-color: var(--secondary);
    width: 95%;
    aspect-ratio: 3 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
