<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from "./components/NavBar.vue";
import Footer from "./components/FooterSection.vue";

export default {
  components: { Navigation, Footer },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
