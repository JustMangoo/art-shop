<template>
  <div class="slide">
    <transition name="slide">
        <slot />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition:1.5s ease-in-out;
}

.slide-enter-from {
  transform: translate(0, -100%);
  opacity: 0;
}

.slide-enter-to{
  transform: translate(0, 0);
  z-index: 1;
  opacity: 100%;
}

.slide-leave-from {
  transform: translate(0, 0);
}

.slide-leave-to {
  z-index: 0;
}

.slide{
  overflow:hidden ;
}
</style>
