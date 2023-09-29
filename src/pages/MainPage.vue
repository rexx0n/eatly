<template>
    <div class="container">
        <EHeader></EHeader>
        <div class="main">
            <div class="main__info">
                <span>
                    <hr>
                    OVER 1000 USERS
                </span>
                <h1>Enjoy Foods All Over The <span>World</span></h1>
                <p>EatLy help you set saving goals, earn cash back
                    offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus.</span></p>
                <div class="main__buttons">
                    <EButton>Get Started</EButton>
                    <EButton>Go Pro</EButton>
                </div>
                <div class="main__feedback">
                    <img src="../assets/trustpilot-11.svg" alt="Trustpilot">
                    <img src="../assets/star.svg" alt="star">
                    <span>4900+</span>
                </div>
            </div>
            <img src="../assets/hero.png" alt="food">
        </div>
    </div>
    <div class="baner">
        <div class="container">
            <div class="baner__items">
                <div class="baner__item">
                    10K+
                    <p>Satisfied Costumers <br> All Great Over The World</p>
                </div>
                <div class="baner__item">
                    4M+
                    <p>Satisfied Costumers <br> All Great Over The World</p>
                </div>
                <div class="baner__item">
                    99.99%
                    <p>Satisfied Costumers <br> All Great Over The World</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EHeader from "../components/UI/EHeader.vue";
import EButton from "../components/UI/EButton.vue";

export default {
    name: "MainPage",
    components: {EButton, EHeader}
}
</script>

<style lang="scss" scoped>

</style>