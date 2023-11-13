<template>
  <nav :class="{ 'navBar--hidden': !showNavbar }">
    <div class="containerTop">
      <div class="socials">
        <a href="https://www.facebook.com/profile.php?id=100007068168349"
          ><ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="https://www.instagram.com/artis.daugats.art/"
          ><ion-icon name="logo-tiktok"></ion-icon>
        </a>
        <a href="https://www.instagram.com/artis.daugats.art/"
          ><ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
      <div class="logo">
        <img src="../assets/images/Logo placeholder.png" alt="" />
      </div>
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
          <ion-icon name="person-outline"></ion-icon
        ></a>
        <a
          ><p>Grozs</p>
          <ion-icon name="bag-outline"></ion-icon
        ></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
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

<style lang="scss" scoped>
nav {
  width: 100%;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  transform: translated3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 100;

  .containerTop {
    background: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    padding: 0.5rem 3rem;
    width: 100%;
  }

  .socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    justify-self: center;
    gap: 1rem;
    flex: 2 0 0;
    color: var(--neutral-one);
  }

  .logo {
    height: 3rem;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }

  .languageCurrency {
    flex: 2 0 0;
    color: var(--neutral-one);
    text-align: right;
    justify-self: flex-end;
  }
}
.containerBot {
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  width: 100%;
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .account-cart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .account-cart a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    color: var(--neutral-two);

    ion-icon {
      --ionicon-stroke-width: 1.5rem;
    }
  }
}

nav.navBar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

@media only screen and (max-width: 900px) {
  nav .containerBot {
    display: none;
  }
  nav .socials {
    display: none;
  }
}
</style>
