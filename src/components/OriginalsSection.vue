<template>
  <section class="originals">
    <h1>Oriģināls</h1>

      <div class="align">
        <div id="left" class="img-container">
          <img src="../assets/images/hero-1.jpg" alt="" class="img1"/>
        </div>
        <div id="right" class="img-container">
          <img src="../assets/images/hero-2.jpg" alt="" class="img2"/>
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
    .align {
        width: 80rem;
        height: 30%;
        max-width:80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: var(--primary);
        border-radius: 0.2rem;
        margin: 6rem 0;

        .img-container{
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;

          img {
            z-index: 80;
            display: flex;
            justify-content: center;
            align-items: center;
            object-fit: cover;
            border-radius: 0.2rem;
          }

          .img1{
            height: 30rem;
            aspect-ratio: 4/3;
            transform: translate(-1.5rem, -7rem);
          }
          .img2{
            width: 25rem;
            aspect-ratio: 3/4;
            transform: translate(1.5rem, 7rem);
          }
        }
      }
  }
  @media (max-width: 1200px) {
    .grid {
      grid-template-areas:
        "left"
        "right";
    }
  }

</style>
