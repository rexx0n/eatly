<template>
    <header class="header">
        <div class="header__logo-nav">
            <div @click="toNext('main')" class="header__logo">
                <img src="../../assets/logo.svg" alt="eatly">
                <span>eatly</span>
            </div>
            <div class="header__burger">
                <div @click="burger">
                    <svg v-if="!isBurger" xmlns="http://www.w3.org/2000/svg" width="34" height="25" viewBox="0 0 34 25" fill="none">
                        <path d="M1.25 1H32.75H1.25Z" fill="#918F8F"/>
                        <path d="M1.25 1H32.75" stroke="#282828" stroke-width="2" stroke-linecap="round"/>
                        <path d="M1.25 12.1628H32.75H1.25Z" fill="#918F8F"/>
                        <path d="M1.25 12.1628H32.75" stroke="#282828" stroke-width="2" stroke-linecap="round"/>
                        <path d="M1.25 23.3257H32.75H1.25Z" fill="#918F8F"/>
                        <path d="M1.25 23.3257H32.75" stroke="#282828" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <svg v-else fill="#000000" height="25" width="34" version="1.1" id="Capa_1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 490 490" xml:space="preserve">
                        <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490
	                      489.292,457.678 277.331,245.004 489.292,32.337 "/>
                    </svg>
                </div>
                <nav v-if="isBurger">
                    <a @click="toNext('choice')" :class="{header__active: links.menu}" href="">Menu</a>
                    <a @click="toNext('articles')" :class="{header__active: links.blog}" href="">Blog</a>
                    <a @click="toNext('pricing')" :class="{header__active: links.pricing}" href="">Pricing</a>
                    <a @click="toNext('contact')" :class="{header__active: links.contact}" href="">Contact</a>
                </nav>
            </div>

            <nav>
                <a @click="toNext('choice')" :class="{header__active: links.menu}" href="">Menu</a>
                <a @click="toNext('articles')" :class="{header__active: links.blog}" href="">Blog</a>
                <a @click="toNext('pricing')" :class="{header__active: links.pricing}" href="">Pricing</a>
                <a @click="toNext('contact')" :class="{header__active: links.contact}" href="">Contact</a>
            </nav>
        </div>
        <div class="header__registration">
            <a @click="toNext('signin')" class="header__login" href="">Login</a>
            <EButton @click="toNext('signup')">Sign Up</EButton>
        </div>
    </header>
</template>

<script setup>
import EButton from "./EButton.vue";
import router from "../../router/router.js";
import {onMounted, ref} from "vue";

let links = ref({
    menu: false,
    blog: false,
    pricing: false,
    contact: false,
})
let isBurger = ref(false)

function burger() {
    isBurger.value = !isBurger.value
}

const props = defineProps(['active'])
console.log(props.active)

function nav(item) {
    links.value[props.active] = !links.value[props.active]
    console.log('asdas')
}

onMounted(() => {
    nav()
})

function toNext(page) {
    router.push({
        name: `${page}`
    })
}

function toMain() {
    router.push({
        name: 'main'
    })
}
</script>

<style scoped lang="scss">

</style>