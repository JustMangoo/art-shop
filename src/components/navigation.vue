<template>
  <div class="navBar" :class="{ 'navBar--hidden': !showNavbar }">
    <div class="containerTop">
      <div class="socials">
        <img src="../assets/icons/facebook.svg" />
        <img src="../assets/icons/instagram.svg" />
        <img src="../assets/icons/tik-tok.svg" />
      </div>
      <div class="logo"></div>
      <div class="languageCurrency">Latvia (EUR)</div>
    </div>
    <div class="containerBot">
      <div class="links">
        <a>Oriģināls</a>
        <a>Printēts</a>
        <a>Par mani</a>
        <a>Pirkt</a>
      </div>
      <div class="account-cart">
        <a
          ><p>Pieslēgties</p>
          <span class="material-symbols-sharp"> account_circle </span></a
        >
        <a
          ><p>Grozs</p>
          <span class="material-symbols-sharp"> shopping_bag </span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigationSection",
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    console.log("created");
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      //iegūst pašreizējo scroll pozīciju
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition < 0) {
        return;
      }

      // salīdzina ar iepriekšējo scroll pozīciju
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      // saglabā pašreizējo scroll pozīciju
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style></style>
