<template>
    <div class="baner-component">
        <div>
            <h1>GET 50%</h1>
            <div>
                <input type="text" name="" id="" placeholder="Enter Your Email Address">
                <EButton>SUBSCRIBE</EButton>
            </div>
        </div>
        <img src="../../assets/food-image-6.png" alt="">
    </div>
</template>

<script>

import {defineComponent} from "vue";
import EButton from "./EButton.vue";

export default defineComponent({
    components: {EButton}
})
</script>

<style scoped lang="scss">
.baner-component {
    display: flex;
    justify-content: space-between;
    padding: 37px 72px 61px 66px;
    border-radius: 30px;
    background: url("../../assets/mask-group3.png") no-repeat;
    background-size: cover;
    img {
        margin-bottom: -100px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        > div {
            padding: 7px 6px 7px 22px;
            display: flex;
            gap: 80px;
            border-radius: 14.234px;
            flex-direction: row;
            align-items: center;
            background: #DEDCEF;
            box-shadow: 0px 7.25333px 45.33334px 0px rgba(0, 0, 0, 0.10);
            input {
                border: none;
                background: none;
                color: #878787;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.488px;
                text-transform: capitalize;
            }
        }
    }
    h1 {
        color: #DEDCEF;
        font-size: 70px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
}
</style>