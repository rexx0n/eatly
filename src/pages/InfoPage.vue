<template>
  <div class="container">
      <EHeader active="blog"></EHeader>
      <div class="info">
        <h1>How To Order Food On eatly ?</h1>
          <div class="info__author">
              <img src="../assets/avatar.png" alt="">
              <span>
                  Written By
                  <span>
                    Perperzon
                  </span>
              </span>
          </div>
          <img src="../assets/pic2.png" alt="">
      </div>
  </div>
  <EFooter></EFooter>
</template>

<script setup>
import EHeader from "../components/UI/EHeader.vue";
import EFooter from "../components/UI/EFooter.vue";


</script>

<style lang="scss">
.info {
  margin-top: 126px;
  >img {
    margin-top: 62px;
  }
  &__author {
    display: flex;
    gap: 15px;
    img {
      min-width: 55px;
      min-height: 55px;
    }
    span {
      display: flex;
      flex-direction: column;
      color: #8D8D8D;
      font-size: 15px;
      font-weight: 400;
      span {
        color: #000;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 33px; /* 153.333% */
      }
    }
  }
  h1 {
    color: #252525;
    margin-bottom: 33px;
    font-size: 37px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 119.112% */
  }
}
</style>