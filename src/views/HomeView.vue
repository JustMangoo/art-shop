<template>
  <div class="home"></div>
  <Navigation />
  <Hero />
</template>

<script>
import Navigation from "../components/NavBar.vue";
import Hero from "../components/HeroSection.vue";


export default {
  name: "homeView",
  components: { Navigation, Hero },
};
</script>
