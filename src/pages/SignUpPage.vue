<template>
    <div class="sign">
        <div class="container">
            <div class="sign__up">
                <div class="sign__form">
                    <img src="../assets/logo.svg" alt="">
                    <form action="">
                        <label>Sign Up to eatly</label>
                        <div>
                            <button><img src="../assets/G.png" alt=""></button>
                            <button><img src="../assets/path4.png" alt=""></button>
                        </div>
                        <span>OR</span>
                        <div class="sign__inputs">
                            <div :class="{sign__input_active: name.length !== 0}" class="sign__input">
                                <img v-if="name.length !==0" src="../assets/usericon-active.png" alt="">
                                <img v-else src="../assets/usericon.svg" alt="">
                                <input v-model="name" type="text" placeholder="full name">
                            </div>
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
                        <EButton class="sign__signup">SIGN UP</EButton>
                        <p>Already Have An Account? <span>Log In</span></p>
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

let name = ref('')
let email = ref('')
let password = ref('')
</script>

<style scoped lang="scss">
.container {
  max-width: 1344px;
}

.sign {
  &__rule {
      margin-top: 95px;
    display: flex;
    justify-content: space-between;
      h5 {
          color: #718096;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%; /* 24px */
          letter-spacing: 0.2px;
      }
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__signup {

  }

  &__text {
    h2 {
      color: #FFF;
      text-align: center;
      font-family: 'Manrope', sans-serif;
      font-size: 40px;
      font-weight: 800;
      line-height: 110%; /* 44px */
    }

    p {
      margin-top: 20px;
      color: #FFF;
      font-family: 'Manrope', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 150%; /* 21px */
      letter-spacing: 0.2px;
      opacity: 0.7;
      max-width: 500px;
      text-align: center;
    }
  }

  &__up {
    display: flex;
    justify-content: space-between;
  }

  &__input {
    border-radius: 14px;
    background: #F5F5F5;
    padding: 25px 0 25px 24px;
    max-width: 382px;
    width: 100%;

    &_active {
      border: 2px solid #6C5FBC;
      transition: 200ms;
    }
  }

  &__form {
    padding-top: 32px;

    form {
      padding-left: 92px;
      max-width: 473px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      margin-top: 88px;

      p {
        color: #3E3E3E;
        font-size: 19px;
        font-weight: 400;
        margin-top: 24px;
        text-align: center;
        letter-spacing: 0.189px;

        span {
          color: #6C5FBC;
          font-size: 19px;
          font-weight: 400;
          letter-spacing: 0.189px;
          text-transform: none;
        }
      }

      .sign__signup {
        background: #6C5FBC;
        color: #F3F5F6;
        max-width: 382px;
        font-size: 18px;
        font-weight: 600;
        width: 100%;
        letter-spacing: 0.534px;
        text-transform: uppercase;
        margin-top: 39px;
      }

      span {
        color: rgba(0, 90, 100, 0.35);
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        margin-top: 33px;
        margin-bottom: 35px;
        text-align: center;
      }

      input {
        border: none;
        background: none;
        padding-left: 34px;
        color: #6C5FBC;
        font-size: 16px;;
        padding-right: 80px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.334px;
        text-transform: capitalize;
      }

      label {
        color: #323142;
        font-size: 35.25px;
        margin-bottom: 48px;
        font-weight: 600;
        text-align: center;
        line-height: 125%; /* 44.063px */
        letter-spacing: -1.41px;
      }

      div {
        display: flex;
        gap: 21px;
      }

      button {
        border-radius: 13.341px;
        background: #F5F5F5;
        border: none;
        padding: 16.5px;
        max-width: 183px;
        max-height: 63px;
        width: 100%;
      }
    }
  }

  &__illustration {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 249px;
    padding-left: 78px;
    background: #6C5FBC url("../assets/illustration.png");
    box-shadow: 320px 172px 1px 320px #6C5FBC;
  }
}
</style>