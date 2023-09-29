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
        cursor: pointer;
        padding: 17px 31px;
        border-radius: 12px;
        background: #6C5FBC;
        border: 1.5px solid #6C5FBC;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.163px;
        text-transform: capitalize;
    }
    button:hover {
        transition: 300ms;
        border: 1.5px solid #6C5FBC;
        background: none;
        color:#6C5FBC;
    }
</style>