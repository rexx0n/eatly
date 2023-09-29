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
                    offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus.</span>
                </p>
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
    <div class="container">
        <div class="premium">
            <img src="../assets/mobile.png" alt="mobile">
            <div class="premium__info">
                <h1>Premium <span>Quality</span> For Your Health</h1>
                <ul>
                    <li>Premium quality food is made with ingredients that are packed with essential vitamins,
                        minerals.
                    </li>
                    <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                </ul>
                <EButton>Download
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M6.55469 13.5469H22.3588" stroke="white" stroke-width="2.25773" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487" stroke="white" stroke-width="2.25773"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </EButton>
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