<template>
  <section class="originals">
    <h1>Oriģināls</h1>
    <div class="container">
      <img src="../assets/images/hero-1.jpg" alt="" class="left" />
      <div class="accent"></div>
      <img src="../assets/images/hero-2.jpg" alt="" class="right" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.originals {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .container {
    position: relative;
    width: 80rem;
    max-width: 90%;
    height: 50rem;
    display: flex;
    direction: row;
    align-items: center;
    justify-content: center;

    .accent {
      position: absolute;
      width: 90%;
      height: 30rem;
      max-height: 90rem;
      background-color: var(--primary);
    }
    img {
      position: absolute;
      z-index: 80;
      object-fit: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left {
      height: 65%;
      left: 0;
      top: 0;
      aspect-ratio: 4 / 3;
    }

    .right {
      height: 70%;
      right: 9%;
      bottom: 0;
      aspect-ratio: 3 / 4;
    }
  }
}
</style>
