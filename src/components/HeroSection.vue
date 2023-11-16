<template>
  <header>
    <div class="test">
      <Carousel v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1">
            <img :src="require(`@/assets/images/${slide}.jpg`)" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </header>
</template>

<script>
import Carousel from "./CarouselComp.vue";
import Slide from "./SlideComp.vue";


export default {
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = ["hero-1", "hero-2", "hero-3"];

    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  position: relative;
  height: 65vh;
  user-select: none;
  .test {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
