<template>
  <div class="home"></div>
  <Navigation />
  <Hero />
  <Originals />
</template>

<script>
import Navigation from "../components/NavBar.vue";
import Hero from "../components/HeroSection.vue";
import Originals from "../components/OriginalsSection.vue";


export default {
  name: "HomeView",
  components: { Navigation, Hero, Originals },
};
</script>

<style>
</style>
