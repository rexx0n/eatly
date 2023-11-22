<template>
    <div class="sign">
        <div class="container">
            <div class="sign__up">
                <div class="sign__form">
                    <img src="../assets/logo.svg" alt="">
                    <form action="">
                        <label>Forget Password</label>
                        <span>Enter Your Mail To Reset</span>
                        <div class="sign__inputs">
                            <div :class="{sign__input_active: email.length !== 0}" class="sign__input">
                                <img v-if="email.length !== 0" src="../assets/emai-activel.png" alt="">
                                <img v-else src="../assets/email.png" alt="">
                                <input v-model="email" type="text" placeholder="email">
                            </div>
                        </div>
                        <EButton class="sign__signup">VERIFY</EButton>
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

let email = ref('')
</script>

<style scoped lang="scss">
.container {
  max-width: 1344px;
}
.sign__rule {
    margin-top: 300px;
}
form {
    label {
        margin-bottom: 0;
    }
    > span {
        color: #CFCFD3;
        font-size: 22px;
        font-weight: 500;
        line-height: 125%; /* 28.198px */
        text-transform: none;
        margin-top: 24px;
        margin-bottom: 90px;
    }
}

</style>