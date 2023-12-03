<template>
    <div class="container">
        <EHeader active="menu"></EHeader>
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
                        <div :class="{choice__active: count === 1, choice__notActive: count !== 1}"></div>
                        <div :class="{choice__active: count === 2, choice__notActive: count !== 2}"></div>
                        <div :class="{choice__active: count === 3, choice__notActive: count !== 3}"></div>
                    </div>
                </div>
                <div class="choice__select">
                    <div class="choice__input">
                        <img src="../assets/search.svg" alt="search">
                        <input type="search" name="" id="" placeholder="Search">
                    </div>
                    <div class="choice__btns">
                        <button @click="choice = 1" :class="{choiceActive: choice === 1}">Food</button>
                        <button @click="choice = 2" :class="{choiceActive: choice === 2}">Resturent</button>
                    </div>
                </div>
            </div>
            <div class="choice__category">
                <h4>Category</h4>
                <div class="choice__icons">
                    <div @click="icon = 1" :class="{choice__icon_pizza_active: icon === 1}"
                         class="choice__icon choice__icon--pizza">
                        <img src="../assets/pizza.svg" alt="pizza">
                        <span>Pizza</span>
                    </div>
                    <div @click="icon = 2" :class="{choice__icon_asian_active: icon === 2}"
                         class="choice__icon choice__icon--asian">
                        <img src="../assets/hotdog.svg" alt="">
                        <span>Asian</span>
                    </div>
                    <div @click="icon = 3" :class="{choice__icon_donat_active: icon === 3}"
                         class="choice__icon choice__icon--donat">
                        <img src="../assets/doughnut.svg" alt="">
                        <span>Donat</span>
                    </div>
                    <div @click="icon = 4" :class="{choice__icon_ice_active: icon === 4}"
                         class="choice__icon choice__icon--ice">
                        <img src="../assets/icecream.svg" alt="">
                        <span>Ice</span>
                    </div>
                </div>
                <h4>Sort By</h4>
                <div class="choice__sort">
                    <span>Recomended <span>Fast Delivery</span></span>
                    <span>Most Popular <span></span></span>
                </div>
                <h4>Price</h4>
                <div class="choice__price">
                    <input type="range" name="" id="" min="0" max="1000">
                    <span>
                        <span>$0</span>
                        <span>$25</span>
                        <span>$50</span>
                        <span>$100</span>
                        <span>$500</span>
                        <span>$1000</span>
                    </span>
                    <EButton>Apply</EButton>
                </div>
            </div>
        </div>
        <div class="restaurants">
            <div class="title">
                <h1>Our Top <span>Restaurants</span></h1>
                <EView></EView>
            </div>
            <ERestaurants></ERestaurants>
        </div>
        <div class="dishes">
            <div class="title">
                <h1>Our Top <span>Dishes</span></h1>
                <EView></EView>
            </div>
            <EDishes></EDishes>
        </div>
        <EQuestions></EQuestions>
    </div>
    <EFooter></EFooter>
</template>

<script setup>
import EHeader from "../components/UI/EHeader.vue";
import EFooter from "../components/UI/EFooter.vue";
import {onMounted, ref} from "vue";
import EButton from "../components/UI/EButton.vue";
import EView from "../components/UI/EView.vue";
import ERestaurants from "../components/UI/ERestaurants.vue";
import EDishes from "../components/UI/EDishes.vue";
import EQuestions from "../components/UI/EQuestions.vue";

let translate = ref(0)
let count = ref(1)
let choice = ref(2)
let icon = ref(2)




function slider() {
    if( window.innerWidth < 1440) {
        if (count.value <= 2) {
            translate.value = translate.value + -555
            count.value++
        } else {
            translate.value = 0
            count.value = 1
        }
    }
    if (window.innerWidth > 1400) {
        if (count.value <= 2) {
            translate.value = translate.value + -852
            count.value++
        } else {
            translate.value = 0
            count.value = 1
        }
    }

}

setInterval(() => {
    slider()
}, 6000)

onMounted(() => {
    slider()
})

</script>

<style scoped lang="scss">
.questions {
    button {
        padding: 1px 8px;
    }
}

h1 {
  font-size: 35px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-top: 0;
  }
}

</style>