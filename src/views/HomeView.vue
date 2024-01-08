<template>
  <div class="home">
    <Carousel class="mb-3rem" />
    <div class="title">
      <h1>Oriģināli</h1>
    </div>
    <Scroller />

    <Banner>
      <img class="banner-img" src="../assets/images/hero-3.jpg" alt="" />
    </Banner>

    <div class="title">
      <h1>Printēti</h1>
    </div>
    <Scroller />

    <Banner>
      <img class="banner-img" src="../assets/images/hero-3.jpg" alt="" />
    </Banner>
    <div class="title">
      <h1>Par Mani</h1>
    </div>
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

<style lang="scss" scoped>
.home {
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .banner-img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
