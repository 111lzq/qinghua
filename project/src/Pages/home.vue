<template>
    <div class="top">
        <img class="logo" src="../image/logo.png" alt="">
    </div>

</template>
<style scoped>
.top .logo{
    position: relative;
    left: 5%;
    top: 20px;
}
.top{
    width: 100%;
    height: 103px;
    background:linear-gradient(to bottom,black,white);
}
.top::before{
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    position: absolute;
    left: 0;
    right: 0;
    background: url(../image/head-bg2.jpg) center repeat-x;
    background-size: 100% 100%;
}
</style>