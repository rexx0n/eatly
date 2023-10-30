<template>
    <div class="container">
        <EHeader></EHeader>
        <div class="our-pricing">
            <div class="our-pricing__title">
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="87" height="82" viewBox="0 0 87 82" fill="none">
                        <path d="M2.00024 66.4904C4.30175 70.6606 7.52243 76.2079 10.4656 79.8826M10.4656 79.8826C10.8046 80.3061 13.0892 76.9362 13.1814 76.7719C15.2071 73.1709 16.6994 69.4153 18.1382 65.555M10.4656 79.8826C3.23725 55.0285 13.0525 30.7691 29.8949 23.2286C31.5642 22.4812 33.3818 21.6695 35.2639 21.0231M35.2639 21.0231C38.261 19.9936 41.4215 19.3833 44.406 20.1195C47.1604 20.7991 50.4624 22.8446 51.2599 25.7036C52.7494 31.0446 46.7446 35.2901 41.7736 33.3283C37.4053 31.6045 34.0964 25.5199 35.2639 21.0231ZM35.2639 21.0231C35.2885 20.9282 35.3151 20.8341 35.3437 20.7407C42.2571 -1.79933 69.9745 -2.17308 85.0002 9.92804"
                              stroke="white" stroke-width="3.28334" stroke-miterlimit="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    Our Pricing
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 45 40" fill="none">
                    <path d="M15.2964 2.45996C10.4687 9.63176 6.48867 17.2509 2 24.6116" stroke="#F7F7F7"
                          stroke-width="3.07406" stroke-miterlimit="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M39.4318 1.84473C28.1697 10.361 17.6623 20.237 7.82861 30.3371" stroke="#F7F7F7"
                          stroke-width="3.07406" stroke-miterlimit="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M42.9999 26.1904C33.4294 27.6993 20.7116 33.9652 11.4639 37.8472" stroke="#F7F7F7"
                          stroke-width="3.07406" stroke-miterlimit="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="our-pricing__img">
                <img src="../assets/home1.png" alt="">
            </div>
        </div>
        <div class="pricing">
            <div class="pricing__title">
                <div class="pricing__title-main">
                    <h2>Pricing</h2>
                    <span>Affordable Basic & Pro Plans</span>
                </div>
                <div>
                    <h2>Basic</h2>
                    <span>Completely 100% Free Plan</span>
                </div>
                <div>
                    <h2>Premium</h2>
                    <span>Amazing Premium Features Plan</span>
                </div>
            </div>
            <div class="pricing__price">
                <div>
                    <span>
                    $
                    <span>
                        0
                    </span>
                    </span>
                    <p>/month</p>
                </div>
                <div>
                    <span>
                    $
                    <span>
                        5
                    </span>
                    </span>
                    <p>/month</p>
                </div>
            </div>
        </div>
    </div>
    <EFooter></EFooter>
</template>

<script setup>
import EHeader from "../components/UI/EHeader.vue";
import EFooter from "../components/UI/EFooter.vue";

</script>

<style scoped lang="scss">
.pricing {
  background: #ffffff;
  border-radius: 15px;
  padding: 51px 0 54px 0;

  &__price {
    display: flex;
    justify-content: flex-end;
    gap: 261px;
      padding-right: 138px;
      padding-top: 40px;
      padding-bottom: 40px;
      border-bottom: 1px solid #CBCBCB;
    div {
      display: flex;

      span {
          display: flex;
        color: #272E35;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px; /* 133.333% */
        span {
          font-size: 64px;
          line-height: 72px; /* 112.5% */
        }
      }

      p {
        color: #6E757C;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px; /* 150% */
      }
    }
  }

  &__title {
    padding: 0 92px 40px 65px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #CBCBCB;
    gap: 225px;
    &-main {
      gap: 25px;
      margin-right: 203px;

      h2 {
        font-size: 40px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 35px;

      h2 {
        color: #282828;
        font-size: 35px;
        font-weight: 600;
        line-height: 120%; /* 42px */
      }

      span {
        color: #6E757C;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px; /* 150% */
        max-width: 158px;
      }
    }
  }
}

.our-pricing {
  margin-top: 66px;
  padding-top: 43px;

  h1 {
    color: #F9F9F9;
    font-size: 40px;
  }

  &__title {
    display: flex;
    padding-top: 45px;
    padding-bottom: 213px;
    justify-content: end;
    background: #5C4EAE;;

    > svg {
      align-self: end;
      margin-left: 355px;
      margin-right: 121px;
    }
  }

  &__img {
    margin-top: -291px;
    display: flex;
    justify-content: center;
  }
}
</style>