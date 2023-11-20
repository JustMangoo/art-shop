<template>
  <section>
    <slot class="img" />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  overflow: hidden;
}
</style>
