<template>
  <div class="home">
    <Carousel />
    <Scroller />
    <Banner>
      <img class="banner-img" src="../assets/images/hero-3.jpg" alt="" />
    </Banner>
  </div>
</template>

<script>
import Carousel from "../components/CarouselComp.vue";
import Banner from "../components/BannerComp.vue";
import Scroller from "../components/ScrollerComp.vue";

export default {
  name: "HomeView",
  components: { Carousel, Banner, Scroller },
};
</script>

<style>
.banner-img {
  width: 100%;
  object-fit: cover;
}
</style>
