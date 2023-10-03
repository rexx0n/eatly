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
        <div class="restaurants">
            <h1>Our Top <span>Restaurants</span></h1>
            <div class="restaurants__cards">
                <div class="restaurants__card">
                    <img src="../assets/the-chicken-king.png" alt="">
                    <div class="restaurants__info">
                        <h6>Healthy</h6>
                        <h3>The Chicken King</h3>
                        <div class="restaurants__feedback">
                            <div>
                                <span>24min •</span>
                                <img src="../assets/Star1.svg" alt="star">
                                <span>4.8</span>
                            </div>
                            <img src="../assets/Bookmark.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="restaurants__card">
                    <img src="../assets/image.png" alt="">
                    <div class="restaurants__info">
                        <h6>Trending</h6>
                        <h3>The Burger King</h3>
                        <div class="restaurants__feedback">
                            <div>
                                <span>24min •</span>
                                <img src="../assets/Star1.svg" alt="star">
                                <span>4.8</span>
                            </div>
                            <img src="../assets/Bookmark.svg" alt="bookmark">
                        </div>
                    </div>
                </div>
                <div class="restaurants__card">
                    <img src="../assets/the-chicken-king.png" alt="">
                    <div class="restaurants__info">
                        <h6>Healthy</h6>
                        <h3>The Chicken King</h3>
                        <div class="restaurants__feedback">
                            <div>
                                <span>24min •</span>
                                <img src="../assets/Star1.svg" alt="star">
                                <span>4.8</span>
                            </div>
                            <img src="../assets/Bookmark.svg" alt="bookmark">
                        </div>
                    </div>
                </div>
            </div>
            <a href=""> View All <img src="../assets/arrow1.svg" alt="arrow"></a>
        </div>
        <div class="dishes">
            <h1>Our Top <span>Dishes</span></h1>
            <div class="dishes__cards">
                <div class="dishes__card">
                    <img @click="heart = 1" v-if="heart !== 1" src="../assets/heart.svg" alt="heart">
                    <img @click="heart = 0" v-else src="../assets/heart2.png" alt="heart">
                    <img src="../assets/food-image3.png" alt="foodimage">
                    <div class="dishes__info">
                        <span class="dishes__healthy">Healthy</span>
                        <h4>Chicken Hell</h4>
                        <div class="dishes__feedback">
                            <span>24min •</span>
                            <img src="../assets/star1.svg" alt="">
                            <span>4.8</span>
                        </div>
                        <div class="dishes__price">
                            <h3>$12<span>.99</span></h3>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="dishes__card">
                    <img @click="heart = 2" v-if="heart !== 2" src="../assets/heart.svg" alt="heart">
                    <img @click="heart = 3" v-else src="../assets/heart2.png" alt="heart">
                    <img  src="../assets/food-image4.png" alt="foodimage">
                    <div class="dishes__info">
                        <span class="dishes__healthy dishes__healthy--trending">Trending</span>
                        <h4>Swe Dish</h4>
                        <div class="dishes__feedback">
                            <span>34min •</span>
                            <img src="../assets/star1.svg" alt="">
                            <span>4.8</span>
                        </div>
                        <div class="dishes__price">
                            <h3>$19<span>.99</span></h3>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="dishes__card">
                    <img @click="heart = 4" v-if="heart !== 4" src="../assets/heart.svg" alt="heart">
                    <img @click="heart = 5" v-else src="../assets/heart2.png" alt="heart">
                    <img  src="../assets/food-image5.png" alt="foodimage">
                    <div class="dishes__info">
                        <span class="dishes__healthy dishes__healthy--supreme">Supreme</span>
                        <h4>Swe Dish</h4>
                        <div class="dishes__feedback">
                            <span>24min •</span>
                            <img src="../assets/star1.svg" alt="">
                            <span>4.9</span>
                        </div>
                        <div class="dishes__price">
                            <h3>$19<span>.99</span></h3>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="dishes__card">
                    <img @click="heart = 6" v-if="heart !== 6" src="../assets/heart.svg" alt="heart">
                    <img @click="heart = 7" v-else src="../assets/heart2.png" alt="heart">
                    <img src="../assets/food-image3.png" alt="foodimage">
                    <div class="dishes__info">
                        <span class="dishes__healthy">Healthy</span>
                        <h4>Chicken Hell</h4>
                        <div class="dishes__feedback">
                            <span>24min •</span>
                            <img src="../assets/star1.svg" alt="">
                            <span>4.8</span>
                        </div>
                        <div class="dishes__price">
                            <h3>$12<span>.99</span></h3>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="dishes__card">
                    <img @click="heart = 8" v-if="heart !== 8" src="../assets/heart.svg" alt="heart">
                    <img @click="heart = 9" v-else src="../assets/heart2.png" alt="heart">
                    <img src="../assets/food-image4.png" alt="foodimage">
                    <div class="dishes__info">
                        <span class="dishes__healthy dishes__healthy--trending">Healthy</span>
                        <h4>Swe Dish</h4>
                        <div class="dishes__feedback">
                            <span>34min •</span>
                            <img src="../assets/star1.svg" alt="">
                            <span>4.9</span>
                        </div>
                        <div class="dishes__price">
                            <h3>$19<span>.99</span></h3>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <a href=""> View All <img src="../assets/arrow1.svg" alt="arrow"></a>
        </div>
        <div class="purchases">
            <div class="purchases__info">
                <h1>Control <span>Purchases</span> Via Dashboard</h1>
                <div class="purchases__cards">
                    <div class="purchases__card">
                        <img src="../assets/food-image.png" alt="food">
                        <div>
                            <h4>Chicken Hell</h4>
                            <span>On The Way</span>
                        </div>
                        <span>3:09 PM</span>
                    </div>
                    <div class="purchases__card">
                        <img src="../assets/swe-dish.png" alt="food">
                        <div>
                            <h4>Swe Dish</h4>
                            <span>Delivered</span>
                        </div>
                        <span>Yesterday</span>
                    </div>
                    <div class="purchases__card">
                        <img src="../assets/fish-hell-veg.png" alt="food">
                        <div>
                            <h4>Fish Hell Veg</h4>
                            <span class="purchases__cancelled">Cancelled</span>
                        </div>
                        <span>Yesterday</span>
                    </div>
                </div>
            </div>
            <div class="purchases__purchases-info">
                <div class="purchases__time">
                    <h4>Purchases</h4>
                    <div class="purchases__dropdown">
                        <select v-model="value">
                            <option value="This month">This month</option>
                            <option value="This week">This week</option>
                            <option value="This day">This day</option>
                        </select>
                    </div>
                </div>
                <div class="purchases__purchases">
                    <div v-if="value === 'This month'">
                        <div>
                            <div>
                                <img src="../assets/icon.svg" alt="icon">
                                <span>
                                Expense
                                <span>Increased By 10%</span>
                                </span>
                            </div>
                            <p>$409.00</p>
                        </div>
                        <img src="../assets/divider.png" alt="">
                    </div>
                    <div v-if="value === 'This month'">
                        <div>
                            <div>
                                <img src="../assets/icon1.svg" alt="icon">
                                <span>
                                Vocher Usage
                                <span>Increased By 5%</span>
                                </span>
                            </div>
                            <p>$45.78</p>
                        </div>
                        <img src="../assets/divider1.png" alt="">
                    </div>

                    <div v-if="value === 'This week'">
                        <div>
                            <div>
                                <img src="../assets/icon.svg" alt="icon">
                                <span>
                                Expense
                                <span>Increased By 10%</span>
                                </span>
                            </div>
                            <p>$40.00</p>
                        </div>
                        <img src="../assets/divider2.png" alt="">
                    </div>
                    <div v-if="value === 'This week'">
                        <div>
                            <div>
                                <img src="../assets/icon1.svg" alt="icon">
                                <span>
                                Vocher Usage
                                <span>Increased By 5%</span>
                                </span>
                            </div>
                            <p>$10.38</p>
                        </div>
                        <img src="../assets/divider3.png" alt="">
                    </div>

                    <div v-if="value === 'This day'">
                        <div>
                            <div>
                                <img src="../assets/icon.svg" alt="icon">
                                <span>
                                Expense
                                <span>Increased By 10%</span>
                                </span>
                            </div>
                            <p>$20.24</p>
                        </div>
                        <img src="../assets/divider4.png" alt="">
                    </div>
                    <div v-if="value === 'This day'">
                        <div>
                            <div>
                                <img src="../assets/icon1.svg" alt="icon">
                                <span>
                                Vocher Usage
                                <span>Increased By 5%</span>
                                </span>
                            </div>
                            <p>$4.43</p>
                        </div>
                        <img src="../assets/divider5.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import EHeader from "../components/UI/EHeader.vue";
import EButton from "../components/UI/EButton.vue";
import {ref} from "vue";

let value = ref('This month')
let heart = ref(true)


</script>

<style lang="scss" scoped>
.dishes {
  margin-top: 100px;

  h1 {
    text-align: center;
  }

  &__cards {
    display: flex;
    margin-top: 78px;
    justify-content: space-between;
  }

  &__card {
    img:first-child {
        cursor: pointer;
      margin-top: 24px;
      margin-right: 22px;
      align-self: end;
      max-width: 22px;
      max-height: 18px;
    }

    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 225px;
    width: 100%;
    border-radius: 34.5px;
    border: 1.4px solid #F4F4F6;
    background: #FFF;
    box-shadow: 7px 82px 41px 0px rgba(229, 229, 229, 0.70);
  }

  &__healthy {
    color: #DAA31A;
    font-size: 11.4px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 2px 7px;
    border-radius: 4.828px;
    background: #F7EDD0;
      &--trending {
          color: #FB471D;
          background: #F7C5BA;
      }
      &--supreme {
          color:#309D5B ;
          background:  #33ac6466;
      }
  }

  &__info {
    padding: 0 27px 30px 23px;
    margin-top: -20px;

    h4 {
      color: #323142;
      font-size: 23px;
      font-style: normal;
      font-weight: 600;
      line-height: 37px; /* 162.5% */
    }
  }

  &__feedback {
    display: flex;
    align-items: center;

    span {
      color: #8E97A6;
      font-family: 'Manrope', sans-serif;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 23px; /* 133.333% */
    }
  }

  &__price {
    display: flex;
    justify-content: space-between;

    button {
      background: #323142;
      padding-right: 10px;
      padding-left: 10px;
      border: none;
      border-radius: 10px;
      color: white;
      font-size: 29px;
      cursor: pointer;

      &:hover {
        background: #5c5a76;
      }

      &:active {
        background: #676589;
      }
    }

    h3 {
      color: #323142;
      font-family: 'Manrope', sans-serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px; /* 155.556% */
      span {
        color: #8E97A6;
        font-size: 19px;
      }
    }
  }
    a {
        color: #ACADB9;
        display: flex;
        gap: 20px;
        justify-content: flex-end;
        align-items: center;
        font-size: 20px;
        font-style: normal;
        text-decoration: none;
        margin-top: 65px;
        font-weight: 500;
        line-height: 45px; /* 225.921% */
        letter-spacing: -0.1px;
        &:hover {
            color: #888993;
        }
    }
}
</style>