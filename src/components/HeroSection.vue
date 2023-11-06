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

<style lang="scss" scoped> 
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit;
  max-height: 75vh;
  overflow: hidden;

  img {
    height: fit;
  }
}
</style>
