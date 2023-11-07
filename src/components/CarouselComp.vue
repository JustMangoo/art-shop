<template>
  <div class="carousel">
    <slot :currentSlide = "currentSlide" />
  </div>

  <!-- Navigation -->
  <div class="controls">
    <div class="toggle-page left">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </div>
    <div class="toggle-page right">
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const currentSlide = ref(2);

    return {currentSlide};     
  }
}
</script>

<style lang="scss" scoped>

.controls {
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .toggle-page {
    display: flex;
    flex: 1;
  }

  .right {
    justify-content: flex-end;
  }

  ion-icon {
    color: var(--neutral-one);
    padding: 0.5rem;
    background-color: var(--neutral-two);
    opacity: 30%;
    border-radius: 50%;
  }
}

</style>