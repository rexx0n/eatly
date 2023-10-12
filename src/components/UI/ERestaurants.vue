<template>
    <div class="restaurants__cards">
        <div class="restaurants__card">
            <img src="../../assets/the-chicken-king.png" alt="">
            <div class="restaurants__info">
                <h6>Healthy</h6>
                <h3>The Chicken King</h3>
                <div class="restaurants__feedback">
                    <div>
                        <span>24min •</span>
                        <img src="../../assets/Star1.svg" alt="star">
                        <span>4.8</span>
                    </div>
                    <img @click="toNext()" src="../../assets/Bookmark.svg" alt="">
                </div>
            </div>
        </div>
        <div class="restaurants__card">
            <img src="../../assets/image.png" alt="">
            <div class="restaurants__info">
                <h6>Trending</h6>
                <h3>The Burger King</h3>
                <div class="restaurants__feedback">
                    <div>
                        <span>24min •</span>
                        <img src="../../assets/Star1.svg" alt="star">
                        <span>4.8</span>
                    </div>
                    <img @click="toNext()" src="../../assets/Bookmark.svg" alt="bookmark">
                </div>
            </div>
        </div>
        <div class="restaurants__card">
            <img src="../../assets/the-chicken-king.png" alt="">
            <div class="restaurants__info">
                <h6>Healthy</h6>
                <h3>The Chicken King</h3>
                <div class="restaurants__feedback">
                    <div>
                        <span>24min •</span>
                        <img src="../../assets/Star1.svg" alt="star">
                        <span>4.8</span>
                    </div>
                    <img @click="toNext()" src="../../assets/Bookmark.svg" alt="bookmark">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 import router from "../../router/router.js";

 function toNext() {
     router.push({
         name:'food'
     })
 }
</script>

<style scoped>

</style>