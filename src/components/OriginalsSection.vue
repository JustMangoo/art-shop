<template>
    <section class="originals">
        <h1>Oriģināls</h1>
        <div class="container">
            <img src="../assets/images/hero-1.jpg" alt="" class="left">
            <div class="accent">

            </div>
            <img src="../assets/images/hero-2.jpg" alt="" class="right">
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
            position: relative;
            border: 2px solid red;
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
                height: 35rem;
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
                height: 21vh;
                left: 0;
                top:0;
                aspect-ratio: 4/5;
            }

            .right {
                height: 40vh;
                right: 10%;
                bottom: 0;
                aspect-ratio: 3/4;
            }
        }
    }
</style>