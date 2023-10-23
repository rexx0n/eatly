<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__info">
                <div class="logo">
                    <img src="../../assets/logo.svg" alt="eatly">
                    <span>eatly</span>
                </div>
                <nav>
                    <a  href="">Blog</a>
                    <a href="">Pricing</a>
                    <a href="">About Us</a>
                    <a href="">Contact</a>
                </nav>
            </div>
            <div class="footer__social">
                <span>© 2021 FILON All Rights Reserv</span>
                <img src="../../assets/socials.svg" alt="">
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "EFooter"
}
</script>

<style scoped lang="scss">
.logo {
    display: flex;
    align-items: center;
    gap: 11px;
    span {
        color: #6C5FBC;
        font-size: 29px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%; /* 37.082px */
    }
}
.footer {
  background: #EAEAEA;
    padding: 96px 90px 83px 103px;
   &__social {
       margin-top: 57px;
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
    &__info {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #cfcfcf;
        padding-bottom: 29px;
        nav {
            display: flex;
            gap: clamp(50px, 5vw, 70px);
            a {
                color: #999;
                font-family: 'Inter',sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 27px; /* 150% */
                text-transform: capitalize;
                text-decoration: none;
                &:hover {
                    color: #b9b9b9;
                }
            }
        }
    }
   span {
       color: #999;
       font-family: 'Inter',sans-serif;
       font-size: 17px;
       font-style: normal;
       font-weight: 500;
       line-height: 25px; /* 147.059% */
   }
}
</style>