<template>
    <div class="questions">
        <div class="questions__title">
            <img src="../../assets/ilustration01.svg" alt="">
            <h1>Frequently Asked <span>Questions</span></h1>
        </div>
        <div class="questions__questions">
            <div class="questions__question">
                <h3>How long does delivery take?
                    <EButton v-if="!question['one']" @click="onQuestions('one')">+</EButton>
                    <EButton v-if="question['one']" @click="onQuestions('one')">-</EButton>
                </h3>
                <div v-if="question['one']">
                    <p>some text some text some text some text some text some text some text some text some text
                        some text some text some text some text some text some text some text </p>
                </div>
            </div>
            <div class="questions__question">
                <h3>How Does It Work ?
                    <EButton v-if="!question['two']" @click="onQuestions('two')">+</EButton>
                    <EButton v-if="question['two']" @click="onQuestions('two')">-</EButton>
                </h3>
                <div v-if="question['two']">
                    <p>some text some text some text some text some text some text some text some text some text
                        some text some text some text some text some text some text some text </p>
                </div>
            </div>
            <div class="questions__question">
                <h3>How does your food delivery service work?
                    <EButton v-if="!question['three']" @click="onQuestions('three')">+</EButton>
                    <EButton v-if="question['three']" @click="onQuestions('three')">-</EButton>
                </h3>
                <div v-if="question['three']">
                    <p>some text some text some text some text some text some text some text some text some text
                        some text some text some text some text some text some text some text </p>
                </div>
            </div>
            <div class="questions__question">
                <h3>What payment options do you accept?
                    <EButton v-if="!question['four']" @click="onQuestions('four')">+</EButton>
                    <EButton v-if="question['four']" @click="onQuestions('four')">-</EButton>
                </h3>
                <div v-if="question['four']">
                    <p>some text some text some text some text some text some text some text some text some text
                        some text some text some text some text some text some text some text </p>
                </div>
            </div>
            <div class="questions__question">
                <h3>Do you offer discounts or promotions?
                    <EButton v-if="!question['five']" @click="onQuestions('five')">+</EButton>
                    <EButton v-if="question['five']" @click="onQuestions('five')">-</EButton>
                </h3>
                <div v-if="question['five']">
                    <p>some text some text some text some text some text some text some text some text some text
                        some text some text some text some text some text some text some text </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import EButton from "./EButton.vue";
import {ref} from "vue";

let question = ref({
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,

})
function onQuestions(value) {
    question.value[value] = !question.value[value]
}
</script>

<style scoped>

</style>