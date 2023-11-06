<template>
  <header>
    <Carousel>
      <Slide>
        <div>
          <img src="../assets/images/hero-1.jpg" alt="">
        </div>
      </Slide>
    </Carousel>
  </header>
</template>

<script>
import Carousel from "./CarouselComp.vue"
import Slide from "./SlideComp.vue";

export default {
  name: "heroSection",
  components: { Carousel, Slide },
};
</script>

<style></style>
