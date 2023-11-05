<template>
  <div class="home"></div>
  <Navigation />
  <Hero />
</template>

<script>
import Navigation from "../components/navigation.vue";
import Hero from "../components/hero.vue";

export default {
  name: "homeView",
  components: { Navigation, Hero },
};
</script>
