<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
  </div>

  <!-- Navigation -->
  <div class="controls">
    <div class="toggle-page left">
      <ion-icon @click="prevSlide" name="chevron-back-outline"></ion-icon>
    </div>
    <div class="toggle-page right">
      <ion-icon @click="nextSlide" name="chevron-forward-outline"></ion-icon>
    </div>
  </div>

  <!-- Pagination -->
  <div class="pagination">
    <span
      v-for="(slide, index) in getSlideCount"
      :key="index"
      :class="{ active: index + 1 === currentSlide }"
    >
    </span>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const currentSlide = ref(2);
    const getSlideCount = ref(null);

    //next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    //prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
        return;
      }
      currentSlide.value -= 1;
    };

    goToSlide = () => {};

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return { currentSlide, nextSlide, prevSlide, getSlideCount };
  },
};
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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ion-icon:hover {
    opacity: 80%;
  }
}

.pagination {
  position: absolute;
  bottom: 2rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  opacity: 60%;

  span {
    cursor: pointer;
    width: 0.8rem;
    height: 0.8rem;
    border: 2px solid var(--neutral-one);
    border-radius: 50%;
    box-shadow: 0px 0px 78px 0px rgba(0, 0, 0, 1);
  }

  .active {
    background-color: var(--neutral-one);
  }
}

.pagination:hover {
  opacity: 90%;
}
</style>
