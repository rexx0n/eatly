<template>
    <div class="sign">
        <div class="container">
            <div class="sign__up">
                <div class="sign__form">
                    <img src="../assets/logo.svg" alt="">
                    <form action="">
                        <label>Sign In to eatly</label>
                        <div>
                            <button><img src="../assets/G.png" alt=""></button>
                            <button><img src="../assets/path4.png" alt=""></button>
                        </div>
                        <span>OR</span>
                        <div class="sign__inputs">
                            <div :class="{sign__input_active: email.length !== 0}" class="sign__input">
                                <img v-if="email.length !== 0" src="../assets/emai-activel.png" alt="">
                                <img v-else src="../assets/email.png" alt="">
                                <input v-model="email" type="text" placeholder="email">
                            </div>
                            <div :class="{sign__input_active: password.length !== 0}" class="sign__input">
                                <img v-if="password.length !== 0" src="../assets/icon-active.png" alt="">
                                <img v-else src="../assets/icon8.png" alt="">
                                <input v-model="password" type="password" placeholder="password">
                            </div>
                        </div>
                        <h4 @click="toNext()">Forget Password?</h4>
                        <EButton class="sign__signup">SIGN UP</EButton>
                        <p>Already Have An Account? <a href="signup">Sign Up</a></p>
                    </form>
                    <div class="sign__rule">
                        <h5>Privacy Policy</h5>
                        <h5>Copyright 2022</h5>
                    </div>
                </div>
                <div class="sign__illustration">
                    <img src="../assets/group162806.png" alt="">
                    <div class="sign__text">
                        <h2>Find Foods With Love </h2>
                        <p>
                            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian,
                            Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

import EButton from "../components/UI/EButton.vue";
import {ref} from "vue";
import router from "../router/router.js";

function toNext() {
    router.push({
        name:'forget'
    })
}
let name = ref('')
let email = ref('')
let password = ref('')
</script>

<style scoped lang="scss">
.container {
  max-width: 1344px;
}

</style>