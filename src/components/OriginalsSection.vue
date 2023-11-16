<template>
  <section class="originals">
    <h1>Oriģināls</h1>
    <div class="grid">
      <div id="left" class="container">
        <img src="../assets/images/hero-1.jpg" alt=""/>
      </div>
      <div id="right" class="container">
        <img src="../assets/images/hero-2.jpg" alt=""/>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

#left {
  grid-area: left;
}
#right {
  grid-area: right;
}
.originals {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .grid {
    width: 80rem;
    max-width: 90%;
    height: 40rem;
    display: grid;
    grid-template-areas:
      "left right"
    }
    background-color: var(--primary);
    border-radius: 0.2rem;
    margin: 6rem 0;

    .container{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      z-index: 80;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover;
      height: 20rem;
      border-radius: 0.2rem;
    }
  }

</style>
