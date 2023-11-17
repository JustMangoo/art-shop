<template>
  <div class="home">
    <Navigation />
    <Hero />
    <Originals />
    <Banner>
      <img class="banner-img" src="../assets/images/hero-3.jpg" alt="">
    </Banner>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/NavBar.vue";
import Hero from "../components/HeroSection.vue";
import Originals from "../components/OriginalsSection.vue";
import Footer from "../components/FooterSection.vue";
import Banner from "../components/BannerComp.vue"

export default {
  name: "HomeView",
  components: { Navigation, Hero, Originals, Footer, Banner },
};
</script>

<style>
  .banner-img {
    width: 100%;
    object-fit: cover;
  }
</style>
