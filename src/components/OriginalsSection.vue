<template>
    <section class="originals">
        <h1>Oriģināls</h1>
        <div class="container">
            <div class="accent">

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .originals {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        border: 2px solid black;

        .container {
            border: 2px solid red;
            width: 100%;
            height: 40vh;
            display: flex;
            align-items: center;
            justify-content: center;

            .accent {
                background-color: var(--primary);
                width: 90%;
                height: 90%;
            }
        }
    }
</style>