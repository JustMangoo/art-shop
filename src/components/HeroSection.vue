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
  name: "HeroSection",
  components: { Carousel, Slide },
};
</script>

<style lang="scss" scoped> 
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 65vh;
  overflow: hidden;

  img {
    width: 100%;
  }
}

@media only screen and (min-width: 1250px) {
  header img {
    height: 100%;
  }
}
</style>
