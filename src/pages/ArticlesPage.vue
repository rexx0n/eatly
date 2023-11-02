<template>
    <div class="container">
        <EHeader active="blog"></EHeader>
        <EBaner></EBaner>
        <div class="articles">
            <h1>Latest <span>Articles</span></h1>
            <div class="articles__slider">
                <div :style="{ transform: `translateX( ${translate + 'px'})`, }" class="articles__line">
                    <div class="articles__cards">
                        <div class="articles__cards-row">
                            <div class="articles__card">
                                <img src="../assets/image-card.png" alt="">
                                <h4>How To Order Food ?</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                            <div class="articles__card">
                                <img src="../assets/image-card2.png" alt="">
                                <h4>How To Track The Order ?</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                            <div class="articles__card">
                                <img src="../assets/image-card3.png" alt="">
                                <h4>How To Manage Cards ?</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div class="articles__cards-row">
                            <div class="articles__card">
                                <img src="../assets/image-card4.png" alt="">
                                <h4>Tips & Tricks For Business</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                            <div class="articles__card">
                                <img src="../assets/image-card5.png" alt="">
                                <h4>How To Control Money ?</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                            <div class="articles__card">
                                <img src="../assets/image-card6.png" alt="">
                                <h4>Top 5 Business Ideas</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="articles__cards articles__cards--none">
                        <div class="articles__cards-row">
                            <div class="articles__card">
                                <img src="../assets/image-card.png" alt="">
                                <h4>How To Order Food ?</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                            <div class="articles__card">
                                <img src="../assets/image-card2.png" alt="">
                                <h4>How To Track The Order ?</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                            <div class="articles__card">
                                <img src="../assets/image-card3.png" alt="">
                                <h4>How To Manage Cards ?</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div class="articles__cards-row">
                            <div class="articles__card">
                                <img src="../assets/image-card4.png" alt="">
                                <h4>Tips & Tricks For Business</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                            <div class="articles__card">
                                <img src="../assets/image-card5.png" alt="">
                                <h4>How To Control Money ?</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                            <div class="articles__card">
                                <img src="../assets/image-card6.png" alt="">
                                <h4>Top 5 Business Ideas</h4>
                                <div class="articles__author">
                                    <img src="../assets/avatar.png" alt="">
                                    <span>
                              Written By
                              <span>Perperzon</span>
                          </span>
                                    <p>15 DEC, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="articles__buttons">
                <button @click="toLeft">←</button>
                <button @click="toRight">→</button>
            </div>

        </div>
    </div>
    <EFooter></EFooter>
</template>

<script setup>
import EFooter from "../components/UI/EFooter.vue";
import EHeader from "../components/UI/EHeader.vue";
import EBaner from "../components/UI/EBaner.vue";
import {ref} from "vue";
let count = 0
let translate = ref(39)
function toRight () {
      if (count => 0) {
        translate.value = -1235
          count++
      }
}
function toLeft () {
    if (count === 0 ) {
        return
    }
    if (count => 0) {
        translate.value = 39
        count--
    }

}
</script>

<style lang="scss">
.baner-component {
  margin-top: 95px;
}

.articles {
  margin-top: 167px;
  &__line {
    display: flex;
    gap: 100px;
    transform: translate(39px);
    transition: 500ms;
  }
  &__slider {
    display: flex;
    gap: 50px;
    overflow: hidden;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 145px;

    button {
      cursor: pointer;
      background: none;
      border: none;
      font-size: 60px;
    }
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 118px;
  }

  &__cards-row {
    display: flex;
    justify-content: space-between;
    gap: 62px;
  }

  h1 {
    font-size: 45px;
    font-weight: 600;
    line-height: 120%; /* 54px */
    text-align: center;
  }

  &__cards {
    margin-top: 98px;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-top: 20px;

    p {
      color: #B7B4B4;
      font-size: 16px;
      font-weight: 500;
      line-height: 31px; /* 197.965% */
    }

    span {
      display: flex;
      flex-direction: column;
      color: #8D8D8D;
      font-size: 12px;
      padding-right: 29px;
      font-weight: 400;

      span {
        color: #000;
        font-size: 17px;
        font-weight: 500;
        line-height: 26px; /* 153.333% */
      }
    }
  }

  &__card {
    background: #fff;
    max-width: 349px;
    border-radius: 16px;
    padding: 25px 20px 28px;
    box-shadow: 0px 3.90533px 46.86401px 0px rgba(197, 197, 197, 0.25);

    h4 {
      margin-top: 22px;
      color: #252525;
      font-size: 21px;
      font-weight: 600;
      line-height: 25.18px; /* 119.112% */
    }
  }
}
</style>