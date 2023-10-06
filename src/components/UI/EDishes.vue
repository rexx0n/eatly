<template>
    <div class="dishes__cards">
        <div class="dishes__card">
            <img @click="heart = 1" v-if="heart !== 1" src="../../assets/heart.svg" alt="heart">
            <img @click="heart = 0" v-else src="../../assets/heart2.png" alt="heart">
            <img src="../../assets/food-image3.png" alt="foodimage">
            <div class="dishes__info">
                <span class="dishes__healthy">Healthy</span>
                <h4>Chicken Hell</h4>
                <div class="dishes__feedback">
                    <span>24min •</span>
                    <img src="../../assets/star1.svg" alt="">
                    <span>4.8</span>
                </div>
                <div class="dishes__price">
                    <h3>$12<span>.99</span></h3>
                    <button @click="toNextPage">+</button>
                </div>
            </div>
        </div>
        <div class="dishes__card">
            <img @click="heart = 2" v-if="heart !== 2" src="../../assets/heart.svg" alt="heart">
            <img @click="heart = 3" v-else src="../../assets/heart2.png" alt="heart">
            <img src="../../assets/food-image4.png" alt="foodimage">
            <div class="dishes__info">
                <span class="dishes__healthy dishes__healthy--trending">Trending</span>
                <h4>Swe Dish</h4>
                <div class="dishes__feedback">
                    <span>34min •</span>
                    <img src="../../assets/star1.svg" alt="">
                    <span>4.8</span>
                </div>
                <div class="dishes__price">
                    <h3>$19<span>.99</span></h3>
                    <button @click="toNextPage">+</button>
                </div>
            </div>
        </div>
        <div class="dishes__card">
            <img @click="heart = 4" v-if="heart !== 4" src="../../assets/heart.svg" alt="heart">
            <img @click="heart = 5" v-else src="../../assets/heart2.png" alt="heart">
            <img src="../../assets/food-image5.png" alt="foodimage">
            <div class="dishes__info">
                <span class="dishes__healthy dishes__healthy--supreme">Supreme</span>
                <h4>Swe Dish</h4>
                <div class="dishes__feedback">
                    <span>24min •</span>
                    <img src="../../assets/star1.svg" alt="">
                    <span>4.9</span>
                </div>
                <div class="dishes__price">
                    <h3>$19<span>.99</span></h3>
                    <button @click="toNextPage">+</button>
                </div>
            </div>
        </div>
        <div class="dishes__card">
            <img @click="heart = 6" v-if="heart !== 6" src="../../assets/heart.svg" alt="heart">
            <img @click="heart = 7" v-else src="../../assets/heart2.png" alt="heart">
            <img src="../../assets/food-image3.png" alt="foodimage">
            <div class="dishes__info">
                <span class="dishes__healthy">Healthy</span>
                <h4>Chicken Hell</h4>
                <div class="dishes__feedback">
                    <span>24min •</span>
                    <img src="../../assets/star1.svg" alt="">
                    <span>4.8</span>
                </div>
                <div class="dishes__price">
                    <h3>$12<span>.99</span></h3>
                    <button @click="toNextPage">+</button>
                </div>
            </div>
        </div>
        <div class="dishes__card">
            <img @click="heart = 8" v-if="heart !== 8" src="../../assets/heart.svg" alt="heart">
            <img @click="heart = 9" v-else src="../../assets/heart2.png" alt="heart">
            <img src="../../assets/food-image4.png" alt="foodimage">
            <div class="dishes__info">
                <span class="dishes__healthy dishes__healthy--trending">Healthy</span>
                <h4>Swe Dish</h4>
                <div class="dishes__feedback">
                    <span>34min •</span>
                    <img src="../../assets/star1.svg" alt="">
                    <span>4.9</span>
                </div>
                <div class="dishes__price">
                    <h3>$19<span>.99</span></h3>
                    <button @click="toNextPage">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import router from "../../router/router.js";

let heart = ref(true)

function toNextPage() {
    router.push({
        name: 'choice'
    })
}
</script>

<style scoped>

</style>