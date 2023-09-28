<template>
    <button><slot></slot></button>
</template>

<script>
export default {
    name: "EButton"
}
</script>

<style scoped>
    button {
        border: none;
        padding: 17px 31px;
        border-radius: 12px;
        background: #6C5FBC;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.163px;
        text-transform: capitalize;
    }
</style>