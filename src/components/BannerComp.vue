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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  overflow: hidden;
}
</style>
