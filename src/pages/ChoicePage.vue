<template>
    <div class="container">
        <EHeader></EHeader>
        <div class="choice">
            <div>
                <div class="choice__slider">
                    <div  :style="{ transform: `translateX( ${count + 'px'})`, }" class="choice__slider-line">
                        <div @click="slider" class="choice__item">
                            <h1>50% OFF <span>WEEKENDS</span></h1>
                            <img src="../assets/food-image-6.png" alt="">
                        </div>
                        <div class="choice__item">
                            <h1>50% OFF <span>WEEKENDS</span></h1>
                            <img src="../assets/food-image-6.png" alt="">
                        </div>
                        <div class="choice__item">
                            <h1>50% OFF <span>WEEKENDS</span></h1>
                            <img src="../assets/food-image-6.png" alt="">
                        </div>
                    </div>
                    <div class="choice__slider-lines">

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
    <EFooter></EFooter>
</template>

<script setup>
import EHeader from "../components/UI/EHeader.vue";
import EFooter from "../components/UI/EFooter.vue";
import {onMounted, ref} from "vue";

let count = ref(0)
function slider () {
    setTimeout(()=> {
        count = count.value + -852
    },2000)

}


onMounted(()=> {
    slider()
})
</script>

<style scoped lang="scss">
.choice {
    margin-top: 120px;
    &__slider {
        overflow: hidden;
        max-width: 832px;
        height: 281px;
    }
    &__slider-line {
        display: flex;
        gap: 20px;
        transition: 1s;
    }
    &__item {
        background: url("../assets/mask-group4.png") no-repeat;
        background-size: cover;
        padding: 30px 36px 29px 58px;
        display: flex;
        border-radius: 19px;
        img {
            margin-bottom: -67px;
        }
        h1 {
            display: flex;
            flex-direction: column;
            color: #F7F8FA;
            font-size: 75px;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            span {
                color: #7C6FCD;
                font-size: 87px;
                font-style: normal;
                font-weight: 800;
                line-height: 30px;
            }
        }
        img {
            max-width: 254px;
            max-height: 256px;
        }
    }
}
</style>