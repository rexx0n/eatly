<template>
    <div class="container">
        <EHeader active="menu"></EHeader>
        <div class="chicken">
            <div class="chicken__card">
                <img src="../assets/chicken5.png" alt="">
                <div class="chicken__text">
                    <h1>The Chicken King</h1>
                    <div>
                        <span>24min •</span>
                        <img src="../assets/Star1.svg" alt="star">
                        <span>4.8</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <circle cx="30.8916" cy="30.8916" r="30.8916" fill="#DBD9EE"/>
                        <path d="M37.6606 16.452C33.1884 15.7022 28.5985 15.7022 24.1263 16.452C22.4925 16.7259 21.1913 17.9802 20.8637 19.6065C19.363 27.0572 19.2811 34.724 20.6224 42.205L21.1685 45.2508C21.3368 46.19 22.4818 46.5653 23.1735 45.9082L29.7651 39.6462C30.3974 39.0455 31.3895 39.0455 32.0218 39.6462L38.6134 45.9082C39.3051 46.5653 40.4501 46.19 40.6184 45.2508L41.1645 42.205C42.5058 34.724 42.4239 27.0572 40.9232 19.6065C40.5956 17.9802 39.2944 16.7259 37.6606 16.452Z"
                              fill="#6C5FBC"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="dishes">
            <h1>Popular 🔥</h1>
            <EDishes></EDishes>
            <div class="dishes__chicken">
                <h1>Chicken Vegetables</h1>
                <div class="dishes__cards dishes__cards--food">
                    <div class="dishes__card">
                        <img @click="heart = 2" v-if="heart !== 2" src="../assets/heart.svg" alt="heart">
                        <img @click="heart = 3" v-else src="../assets/heart2.png" alt="heart">
                        <img src="../assets/food-image4.png" alt="foodimage">
                        <div class="dishes__info">
                            <span class="dishes__healthy dishes__healthy--trending">Trending</span>
                            <h4>Swe Dish</h4>
                            <div class="dishes__feedback">
                                <span>34min •</span>
                                <img src="../assets/star1.svg" alt="">
                                <span>4.8</span>
                            </div>
                            <div class="dishes__price">
                                <h3>$19<span>.99</span></h3>
                                <button @click="toNextPage">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="dishes__card">
                        <img @click="heart = 4" v-if="heart !== 4" src="../assets/heart.svg" alt="heart">
                        <img @click="heart = 5" v-else src="../assets/heart2.png" alt="heart">
                        <img src="../assets/food-image5.png" alt="foodimage">
                        <div class="dishes__info">
                            <span class="dishes__healthy dishes__healthy--supreme">Supreme</span>
                            <h4>Swe Dish</h4>
                            <div class="dishes__feedback">
                                <span>24min •</span>
                                <img src="../assets/star1.svg" alt="">
                                <span>4.9</span>
                            </div>
                            <div class="dishes__price">
                                <h3>$19<span>.99</span></h3>
                                <button @click="toNextPage">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <EQuestions></EQuestions>
    </div>
    <EFooter></EFooter>
</template>

<script setup>
import EHeader from "../components/UI/EHeader.vue";
import EFooter from "../components/UI/EFooter.vue";
import EDishes from "../components/UI/EDishes.vue";
import {ref} from "vue";
import router from "../router/router.js";
import EQuestions from "../components/UI/EQuestions.vue";

let heart = ref(true)

function toNextPage() {
    router.push({
        name: 'choice'
    })
}
</script>

<style scoped lang="scss">
.questions {
    button {
        padding: 1px 8px;
        border-radius: 20px;
    }
}
.dishes {
  margin-top: 148px;
    &__cards--food {
        justify-content: flex-start;
        gap: 31px;
    }
    &__chicken {
        margin-top: 147px;
    }
  h1 {
    color: #323142;
    font-size: 35px;
    text-align: start;
    font-style: normal;
    font-weight: 600;
    line-height: 25px; /* 73.024% */
  }
}
</style>