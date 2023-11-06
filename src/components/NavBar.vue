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

<style>
.navBar {
  width: 100%;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  transform: translated3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.navBar.navBar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.navBar .containerTop {
  background: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 500;
  padding: 0.5rem 2rem;
  width: 100%;
}

.navBar .socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  justify-self: flex-start;
  gap: 1rem;
  flex: 2 0 0;
  color: var(--neutral-one);
}

.navBar .socials img {
  height: 1.2rem;
  color: var(--neutral-one);
}

.navBar .logo {
  background-color: var(--neutral-one);
  height: 1rem;
  flex: 1 1 auto;
}

.navBar .languageCurrency {
  flex: 2 0 0;
  color: var(--neutral-one);
  text-align: right;
  justify-self: flex-end;
}

.navBar .containerBot {
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
}

.navBar .links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.navBar .account-cart {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.navBar .account-cart a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.navBar .account-cart span {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" -25, "opsz" 20;
  color: var(--neutral-two);
  font-size: 2rem;
}
</style>
