<template>
  <div class="home"></div>
  <Navigation />
  <Hero />
  <Originals />
  <Footer />
</template>

<script>
import Navigation from "../components/NavBar.vue";
import Hero from "../components/HeroSection.vue";
import Originals from "../components/OriginalsSection.vue";
import Footer from "../components/FooterSection.vue";

export default {
  name: "HomeView",
  components: { Navigation, Hero, Originals, Footer },
};
</script>

<style></style>
