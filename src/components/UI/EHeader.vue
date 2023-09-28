<template>
  <header>
      <div class="logo-nav">
          <div class="logo">
              <img src="../../assets/logo.svg" alt="eatly">
              <span>eatly</span>
          </div>
          <nav>
              <a href="">Menu</a>
              <a href="">Blog</a>
              <a href="">Pricing</a>
              <a href="">Contact</a>
          </nav>
      </div>
      <div class="registration">
          <a class="login" href="">Login</a>
          <EButton>Sign Up</EButton>
      </div>
  </header>
</template>

<script>
import EButton from "./EButton.vue";

export default {
    name: "EHeader",
    components: {EButton}
}
</script>

<style scoped>
.registration button {
    border-radius: 18px;
    font-weight: 700;
    font-size: 18px;
}
.registration {
    display: flex;
    align-items: center;
    gap: 9px;
}
.login {
    font-weight: 700;
}
.logo-nav {
    display: flex;
    justify-content: space-between;
    gap:clamp(74px, 7vw, 104px);
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 48px;
    padding-bottom: 25px;
    border-bottom: 1px solid #CBCBCB;;
}
nav {
    display: flex;
    gap: clamp(39px, 5vw,54px) ;
    align-items: center;
}
.logo {
    display: flex;
    align-items: center;
    gap: 11px;
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
</style>