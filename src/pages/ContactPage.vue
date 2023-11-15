<template>
    <div class="container">
        <EHeader active="contact"></EHeader>
        <div class="contact">
            <div class="contact__just">
                <div class="contact__title">
                    <h1>Just Contact</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="313" height="61" viewBox="0 0 313 61" fill="none">
                        <path d="M2.81254 7.71181C29.4649 2.02721 62.0795 -0.856071 88.1836 7.38647C94.7954 9.47419 100.476 12.6439 104.696 16.3748M104.696 16.3748C111.124 22.0573 114.164 29.0415 111.947 35.4874C108.478 45.5719 97.5068 54.9511 78.4197 55.9363C68.4709 56.4499 59.3908 54.415 56.3818 48.5938C51.7846 39.7004 65.8069 29.2682 77.6683 24.4925C85.8693 21.1906 95.0037 18.4742 104.696 16.3748ZM309.843 11.7574C283.645 5.42697 251.279 1.74963 224.576 9.34686C217.812 11.2711 211.897 14.2992 207.399 17.9235M207.399 17.9235C200.548 23.4437 196.982 30.3472 198.71 36.8413C201.414 47.0013 211.665 56.6398 230.66 58.0904C240.561 58.8465 249.787 57.0353 253.233 51.293C258.498 42.5202 245.278 31.755 233.788 26.6939C225.844 23.1947 216.924 20.2578 207.399 17.9235ZM207.399 17.9235C173.931 9.72147 136.58 7.87365 104.357 16.3068"
                              stroke="#F9F9F9" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </div>
                <img src="../assets/mobilescreen.png" alt="">
            </div>
            <div class="contact__support">
                <h1>
                    Customer
                    <span>
                    Support
                  </span>
                </h1>
                <form action="">
                    <input type="text" placeholder="full name">
                    <input type="text" placeholder="enter your email">
                    <textarea placeholder="enter the problem or query"></textarea>
                    <EButton>Send Now</EButton>
                </form>
            </div>
        </div>
    </div>
    <EFooter></EFooter>
</template>

<script setup>

import EHeader from "../components/UI/EHeader.vue";
import EFooter from "../components/UI/EFooter.vue";
import EButton from "../components/UI/EButton.vue";
</script>

<style lang="scss">
.contact {
  display: flex;
  justify-content: space-between;
  margin-top: 204px;
  margin-bottom: 136px;

  &__support {
    display: flex;
    max-width: 500px;
    flex-direction: column;

    form {
      margin-top: 62px;
      display: flex;
      max-width: 500px;
      flex-direction: column;

      button {
        margin-top: 43px;
      }

      input {
        margin-bottom: 20px;
        color: #B6B6B6;
        font-family: 'Inter', sans-serif;
        font-size: 17px;
        font-weight: 600;
        line-height: 25.338px; /* 150% */
        text-transform: uppercase;
        border-radius: 16.892px;
        border: 2px solid #6C5FBC;
        background: #F9F9F9;
        padding: 21px 8px 21px 25px;
      }

      textarea {
        margin-top: 32px;
        color: #B6B6B6;
        font-family: 'Inter', sans-serif;
        font-size: 17px;
        font-weight: 600;
        line-height: 25.338px; /* 150% */
        text-transform: uppercase;
        border-radius: 16.892px;
        border: 2px solid #6C5FBC;
        background: #F9F9F9;
        padding: 21px 8px 21px 25px;
        max-width: 499px;
        resize: none;
        max-height: 345px;
        height: 345px;
        width: 100%;
      }
    }

    h1 {
      font-size: 40px;
    }
  }

  &__title {
    box-shadow: -287px 310px 1px 366px #6C5FBC;
    background: #6C5FBC;
      max-width: 314px;
  }

  &__just {
    h1 {
      color: #F9F9F9;
      font-size: 48px;
      font-weight: 600;
      line-height: 105%; /* 50.4px */
    }

    img {
      margin-top: 150px;
      margin-left: 241px;
    }
  }
}
</style>