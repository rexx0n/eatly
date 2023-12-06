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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                            <div @click="toNext()" class="articles__card">
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
                <button :class="{articles__no_active: count === 0}" @click="toLeft">←</button>
                <button :class="{articles__no_active: count > 0}" @click="toRight">→</button>
            </div>
        </div>
        <EQuestions></EQuestions>
    </div>
    <EFooter></EFooter>
</template>

<script setup>
import EFooter from "../components/UI/EFooter.vue";
import EHeader from "../components/UI/EHeader.vue";
import EBaner from "../components/UI/EBaner.vue";
import {ref} from "vue";
import EQuestions from "../components/UI/EQuestions.vue";
import router from "../router/router.js";
let count = 0
let translate = ref(39)

function toNext() {
    router.push({
        name:'info',
    })
}
function toRight () {
    if (window.innerWidth < 1440) {
        if (count => 0) {
            translate.value = -900
            count++
        }
    }
    else {
        if (count => 0) {
            translate.value = -1235
            count++
        }
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


</style>