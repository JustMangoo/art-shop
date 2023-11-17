<template>
    <section>
        <slot class="img" />
        
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    section {
        margin: 1rem 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 65vh;
        overflow: hidden;
    }
</style>