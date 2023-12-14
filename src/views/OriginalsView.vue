<template>
  <div class="originals">
    <Banner>
      <img class="banner-img" src="../assets/images/hero-3.jpg" alt="" />
    </Banner>
    <div class="grid">
      <div class="item" v-for="slide in 10" :key="slide">
        <img class="item-img" src="../assets/images/placeholder.png" alt="" />
        {{ slide }}
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
.originals {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .grid {
    margin-block: 2rem;
    width: 95%;
    display: grid;
    align-items: start;
    justify-content: space-around;
    grid-gap: 3rem 2rem;
    grid-template-columns: repeat(4, 1fr);
    .item {
      background-color: var(--secondary);
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: baseline;
      align-items: center;

      .item-img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 4 / 5;
      }
    }
  }
}
</style>
