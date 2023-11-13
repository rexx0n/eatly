<template>
  <div class="container">
      <EHeader active="contact"></EHeader>
      <div class="contact">
          <div class="contact__just">
            <h1>Just Contact</h1>
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
  margin-top:204px;
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
        font-family: 'Inter',sans-serif;
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
        font-family: 'Inter',sans-serif;
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
  &__just {
    h1 {
      color: #F9F9F9;
      font-size: 48px;
      font-weight: 600;
      line-height: 105%; /* 50.4px */
      box-shadow: 1px 1px 1px #6C5FBC;
      background: #6C5FBC;
    }

  }
}
</style>