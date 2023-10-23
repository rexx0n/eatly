<template>
  <header class="header">
      <div class="header__logo-nav">
          <div @click="toNext('main')" class="header__logo">
              <img src="../../assets/logo.svg" alt="eatly">
              <span>eatly</span>
          </div>
          <nav>
              <a @click="toNext('choice')" :class="{header__active: links.menu}" href="">Menu</a>
              <a :class="{header__active: links.blog}" href="">Blog</a>
              <a @click="toNext('pricing')" :class="{header__active: links.pricing}" href="">Pricing</a>
              <a :class="{header__active: links.contact}" href="">Contact</a>
          </nav>
      </div>
      <div class="header__registration">
          <a class="header__login" href="">Login</a>
          <EButton>Sign Up</EButton>
      </div>
  </header>
</template>

<script setup>
import EButton from "./EButton.vue";
import router from "../../router/router.js";
import {onMounted, ref} from "vue";
let links = ref({
    menu:false,
    blog:false,
    pricing:false,
    contact:false,
})
const props = defineProps(['active'])
console.log(props.active)
function nav(item) {
    links.value[props.active] = !links.value[props.active]
    console.log('asdas')
}
onMounted(()=> {
    nav()
})
function toNext(page) {
 router.push({
     name:`${page}`
 })
}
function toMain() {
    router.push({
        name:'main'
    })
}
</script>

<style scoped lang="scss">
.header {
    .header__active {
        color: #6C5FBC;
    }
    a {
        color: #606060;
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 27px; /* 150% */
        text-decoration: none;
    }
    span {
        color: #6C5FBC;
        font-size: 21px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%; /* 27.529px */
    }
    &__logo {
        display: flex;
        align-items: center;
        gap: 11px;
    }
    nav {
        display: flex;
        gap: clamp(39px, 5vw,54px) ;
        align-items: center;

    }
    &__logo-nav {
        display: flex;
        justify-content: space-between;
        gap:clamp(74px, 7vw, 104px);
        cursor: pointer;
    }
    &__login {
        font-weight: 700;
    }
    &__registration {
        display: flex;
        align-items: center;
        gap: 9px;
        button {
            border-radius: 18px;
            font-weight: 700;
            font-size: 18px;
        }
    }
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 48px;
    padding-bottom: 25px;
    border-bottom: 1px solid #CBCBCB;;
}
</style>