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
            <ERestaurants></ERestaurants>
            <EView></EView>
        </div>
        <div class="dishes">
            <h1>Our Top <span>Dishes</span></h1>
            <EDishes></EDishes>
            <EView></EView>
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
        <div class="customer">
            <h1><span>Customer</span> Say </h1>
            <div class="customer__slider">
                <div class="customer__line">
                    <div class="customer__card">
                        <div>
                            <div>
                                <img src="../assets/pic.png" alt="">
                                <span>
                                    Alexander R.
                                    <span>01 Year With Us </span>
                                </span>
                            </div>
                            <img src="../assets/path-173.svg" alt="">
                        </div>
                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                        <img src="../assets/stars.png" alt="stars">
                    </div>
                    <div class="customer__card">
                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                        <img src="../assets/stars.png" alt="stars">
                    </div>
                    <div class="customer__card">
                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                        <img src="../assets/stars.png" alt="stars">
                    </div>
                </div>
            </div>
            <div class="customer__baner">
                <div>
                    <h1>GET 50%</h1>
                    <div>
                        <input type="text" name="" id="" placeholder="Enter Your Email Address">
                        <EButton>SUBSCRIBE</EButton>
                    </div>
                </div>
                <img src="../assets/food-image-6.png" alt="">
            </div>
        </div>
    </div>
    <EFooter></EFooter>
</template>

<script setup>
import EHeader from "../components/UI/EHeader.vue";
import EButton from "../components/UI/EButton.vue";
import EFooter from "../components/UI/EFooter.vue";
import {ref} from "vue";
import EDishes from "../components/UI/EDishes.vue";
import ERestaurants from "../components/UI/ERestaurants.vue";
import EView from "../components/UI/EView.vue";

let value = ref('This month')



</script>

<style lang="scss" scoped>

</style>