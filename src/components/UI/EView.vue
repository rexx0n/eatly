<template>
    <a href=""> View All <img src="../../assets/arrow1.svg" alt="arrow"></a>
</template>

<script>
export default {
    name: "EView"
}
</script>

<style scoped>
a {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
    color: #ACADB9;
    font-size: 20px;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    line-height: 45px; /* 225.921% */
    transition: 300ms;
    &:hover {
        color: #888993;
    }
}
</style>