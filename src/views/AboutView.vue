<template>
  <div class="about">
    <Banner>
      <img class="banner-img" src="../assets/images/hero-3.jpg" alt="" />
    </Banner>

    <div class="container">
      <img src="../assets/images/hero-2.jpg" alt="" />
      <div class="text">
        <h3>Par Mani</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          voluptatem quo voluptas a soluta fugiat ad earum dolorum sed molestiae
          amet ipsum quos error tempore, architecto numquam, maiores dignissimos
          recusandae dicta?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/BannerComp.vue";

export default {
  components: { Banner },
  setup() {},
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container {
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    background-color: var(--secondary);
    margin: 1rem;

    img {
      aspect-ratio: 1 / 1;
      width: 50%;
      object-fit: cover;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    .container {
      flex-direction: column;
    }
  }
}
</style>
