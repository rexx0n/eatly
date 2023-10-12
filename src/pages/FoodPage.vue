<template>
    <div class="container">
        <EHeader></EHeader>
        <div class="chicken">
            <div class="chicken__card">
                <img src="../assets/chicken5.png" alt="">
                <div class="chicken__text">
                    <h1>The Chicken King</h1>
                    <div>
                        <span>24min •</span>
                        <img src="../assets/Star1.svg" alt="star">
                        <span>4.8</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <circle cx="30.8916" cy="30.8916" r="30.8916" fill="#DBD9EE"/>
                        <path d="M37.6606 16.452C33.1884 15.7022 28.5985 15.7022 24.1263 16.452C22.4925 16.7259 21.1913 17.9802 20.8637 19.6065C19.363 27.0572 19.2811 34.724 20.6224 42.205L21.1685 45.2508C21.3368 46.19 22.4818 46.5653 23.1735 45.9082L29.7651 39.6462C30.3974 39.0455 31.3895 39.0455 32.0218 39.6462L38.6134 45.9082C39.3051 46.5653 40.4501 46.19 40.6184 45.2508L41.1645 42.205C42.5058 34.724 42.4239 27.0572 40.9232 19.6065C40.5956 17.9802 39.2944 16.7259 37.6606 16.452Z" fill="#6C5FBC"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <EFooter></EFooter>
</template>

<script>
import EHeader from "../components/UI/EHeader.vue";
import EFooter from "../components/UI/EFooter.vue";

export default {
    name: "FoodPage",
    components: {EFooter, EHeader}
}
</script>

<style scoped lang="scss">
.chicken {
    margin-top: 106px;
   max-width: 1238px;
    &__card {
        border-radius: 30px;
        border: 1.5px solid #F4F4F6;
        background: #FFF;
        box-shadow: 7.5px 91px 45px 0px rgba(229, 229, 229, 0.70);
    }
    &__text {
        display: flex;
        padding: 26px 30px 31px 46px;
        border-radius: 30px;
        background:  #FFF;
        box-shadow: 7.5px 91px 45px 0px rgba(229, 229, 229, 0.70);
        span {
            color: #8E97A6;
            font-family: 'Manrope',sans-serif;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
            line-height: 35px; /* 133.333% */
        }
        h1 {
            color: #323142;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 53px; /* 133.41% */
        }
        div {
            display: flex;
            align-items: center;
            margin-left: clamp(121px, 20vw, 170px);
            margin-right: clamp(267px, 30vw, 376px);
        }
    }
}
</style>