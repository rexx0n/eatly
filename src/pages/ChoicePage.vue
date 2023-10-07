<template>
    <div class="container">
        <EHeader></EHeader>
        <div class="choice">
            <div>
                <div class="choice__slider">
                    <div :style="{ transform: `translateX( ${translate + 'px'})`, }" class="choice__slider-line">
                        <div class="choice__item">
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
                        <div :class="{choice__active: count === 1, choice__notActive: count !== 1}" ></div>
                        <div :class="{choice__active: count === 2, choice__notActive: count !== 2}" ></div>
                        <div :class="{choice__active: count === 3, choice__notActive: count !== 3}" ></div>
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

let translate = ref(0)
let count = ref(1)

function slider() {
    if (count.value <= 2) {
        translate.value = translate.value + -852
        count.value++
    } else {
        translate.value = 0
        count.value = 1
    }
}
setInterval(()=>{
    slider()
}, 6000)

onMounted(() => {
    slider()
})

</script>

<style scoped lang="scss">
.choice {
  margin-top: 120px;
    margin-bottom: 120px;
    &__slider-lines {
        display: flex;
        gap: 7.5px;
        justify-content: center;
        margin-top: 49px;
    }
    &__active {
        transition: 200ms;
        height: 6px;
        width: 61px;
        background: #6C5FBC;
        border-radius: 3px;
    }
    &__notActive {
        transition: 200ms;
        width: 30px;
        height: 5px;
        background: #DBD9EE;
        border-radius: 3px;
    }
  &__slider {
    overflow: hidden;
    max-width: 832px;
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