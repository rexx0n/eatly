<template>
  <div class="container">
      <EHeader active="contact"></EHeader>
      <div class="contact">
          <div class="contact__just">
            <h1>Just Contact</h1>
          </div>
          <div class="contact__support">

          </div>
      </div>
  </div>
  <EFooter></EFooter>
</template>

<script setup>

import EHeader from "../components/UI/EHeader.vue";
import EFooter from "../components/UI/EFooter.vue";
</script>

<style lang="scss">
.contact {
  &__just {
    h1 {
      color: #F9F9F9;
      font-size: 48px;
      font-weight: 600;
      line-height: 105%; /* 50.4px */
      box-shadow: 1px 1px 1px #6C5FBC;
    }

  }
}
</style>