<script setup>
import { ref, reactive} from 'vue';
import axios from 'axios';
let swiper=ref('');
let hotwords=ref('');
axios.post('http://47.109.111.80:3000/swipers', {
})
    .then(response => {
        swiper.value = response.data

    })
    .catch(error => {
        console.log('请求失败')
    })

axios.post('http://47.109.111.80:3000/search', {
})
    .then(response => {
        hotwords.value = response.data
        console.log(hotwords)

    })
    .catch(error => {
        console.log('请求失败')
    })


</script>


<template>
        <header>
        <div class="linear"></div>
        <div class="button">
            <img src="../image/summery/navA.png" alt="" srcset="" />
        </div>
        <div class="header">
            <div class="header-lf">
                <img src="../image/summery/logo.png" alt="" srcset="" />
            </div>
            <div class="header-rt">
                <ul class="header-rt-top">
                    <li>访客</li>
                    <li>校友</li>
                    <li>捐赠</li>
                    <li>人才招聘</li>
                    <li>内网</li>
                    <li>邮箱</li>
                    <li>图书馆</li>
                    <li>|</li>
                    <li class="diqiu">
                        <img src="../image/summery/地球.png" alt="" />
                        English
                    </li>
                    <li class="search">
                        <img src="../image/summery/search.png" alt="" srcset="">
                    </li>
                </ul>
                <ul class="header-rt-bot">
                    <router-link to="/news"><li>清华新闻</li></router-link>
                    <router-link to="/summery"><li>学校概况</li></router-link>
                    <li>院系设置</li>
                    <li>教育教学</li>
                    <li>科学研究</li>
                    <li>招生就业</li>
                    <li>合作交流</li>
                    <li>走进清华</li>
                </ul>
            </div>
        </div>
    </header>

<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item,index in swiper" :key="item.id"><img :src="item.img" alt=""></van-swipe-item>
</van-swipe>

<div class="bar">
    <input type="text" placeholder="快速探索Tsinghua University">
    <div class="hotwords">
        <ul>
            <li>高频搜索内容 &nbsp;></li>
            <li v-for="item in hotwords" :key="item.id">{{ item.textthree }}</li>
        </ul>
    </div>
</div>
</template>
<style scoped>
.bar .hotwords li:nth-last-child(1){
    width: 300px;
}
.bar .hotwords li{
    width: 94px;
    height: 100%;
    font-size: 13px;
    text-align: left;
    line-height: 35px;
}
.bar .hotwords ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
}
.bar .hotwords{
    width: 100%;
    height: 35px;
    position: absolute;
    bottom: -35px;
}
.bar input::placeholder{
    font-size: 25px;
    color: #C19FDE;
}
.bar input{
    width: 876px;
    height: 65px;
    border: none;
    border-bottom: 2px solid #791cb5;
    line-height: 65px;
}
.bar{
    width: 1000px;
    height: 70px;
    background-color: white;
    position: relative;
    top: -70px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.my-swipe{
    height: 100vh;
    
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }


/* 上-轮播图 */
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

header .header-rt-bot li{
    color: white;
}
.oragan .more:hover{
    color: #791cb5;
    border-bottom: 1px solid #791cb5;
}
.oragan .more{
    width: 200px;
    height: 35px;
    margin: 70px auto;
    color: white;
    border-bottom: 1px solid white;
}
.oragan .sh p{
    color: white;
    font-size: 17px;
    text-align: center;
}
.oragan .xia p{
    color: white;
    font-size: 17px;
    text-align: center;
}
.oragan .sh h4{
    font-size: 68px;
    color: white;
    text-align: center;
}
.oragan .xia h4{
    font-size: 68px;
    color: white;
    text-align: center;
}
.oragan .xia li{
    width: 282px;
    height: 100%;
}
.oragan .sh ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.oragan .xia ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.oragan .sh li{
    width: 372px;
    height: 100%;
}
.oragan .xia{
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    
}
.oragan .sh {
    width: 100%;
    height: 49%;
}
.oragan .num{
    width: 1120px;
    height: 272px;
    margin:0 auto;
    margin-top: 38px;
    position: relative;
}
.oragan h2{
    width: 1120px;
    height: 60px;
    margin: 0 auto;
    text-align: center;
    color: white;
    font-size: 32px;
}
.oragan .text{
    width: 180px;
    height:43px;
    font-size: 32px;
    color: black;
}
.oragan .top{
    width: 1128px;
    height: 131px;
    margin: 0 auto;
    color: #791cb5;
    background-color: #ccc;
    position: relative;
    top: -40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.oragan{
    width: 100%;
    height: 750px;
    position: relative;
    top: 632px;
    background: url('../image/summery/zg.jpg');
}
.two .more img{
    background-color: white;
}
.two .more span{
    display: block;
    width: 70px;
     color: white;
     font-size: 12px;
}
.two div .more{
    width: 433px;
    height: 77px;
    background: linear-gradient(to right,#791CB5 60%,#2E21E3);
    position: absolute;
    left: calc((100% - 433px)/2);
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 20px;
}
.two div h2{
    width: 100%;
    height: 61px;
    display: block;
    background-color: #e4e4e4;
    font-size: 32px;
    padding-top: 28px;
    padding-bottom: 65px;
    text-indent: 2.5rem;
}
.two div{
    width: 541px;
    height: 231px;
    position: relative;
}
.two{
    width: 1128px;
    height: 231px;
    margin: 0 auto;
    position: relative;
    top: 550px;
    display: flex;
    justify-content: space-between;
}
.evo .list{
    width: 1261px;
    height: 270px;
    margin: 0 auto;
    background-color: orange;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    top: 130px;
}
.evo .more img{
    display: inline-block;
    margin-left: 20px;
}
.evo .more{
    width: 110px;
    height: 20px;
    margin: 0 auto;
    font-size: 13px;
    color: #791cb5;
    text-align: left;
    border-bottom: 1px solid #791cb5;
}
.evo p{
    width: 744px;
    height: 74px;
    margin: 0 auto;
    font-size: 13px;
    color: #777;
    text-align: center;
    padding-top: 20px;
    margin-top: 30px;
    margin-bottom: 40px;
}
.evo h2{
    width: 1100px;
    height: 60px;
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
    font-size: 32px;
}
.evo{
    width: 100%;
    height: 566px;
    background-color: #f2efef;
    position: relative;
    top: 400px;
    padding-top: 70px;
}
.zc .text .bot{
    margin-top: 25px;
}
.zc .text p{
    font-size: 12px;
    color: #ccc;
}
.zc .text{
    width: 752px;
    height: 100%;
}
.zc .tit span{
    font-size: 13px;
    font-weight: 300;
}
.zc .tit {
    width: 443px;
    height: 25px;
    font-weight: 900;
    margin-top: 28px;
    margin-bottom: 14px;
}
.zc .text h2{
    font-size: 32px;
    font-weight: 300;
}
.zc img{
    width: 564px;
    height: 379px;
    position: absolute;
    right: 0;
    bottom: 0;
}
.zc{
    width: 1128px;
    height: 459px;
    margin: 0 auto;
    position: relative;
    top: 400px;
    margin-top: 70px;
}
.banner .box li{
    width: 100%;
    height: 56px;
    margin-top: 30px;
    color: white;
}
.banner .box span{
    font-size: 45px;
    color: white;
}
.banner .box{
    width: 600px;
    height: 160px;
    position: absolute;
    bottom: 50px;
    left: 150px;
}
.banner{
    width: 100%;
    height: 538px;
    background: url('../image/summery/banner.jpg');
    position: absolute;
    top: 0;
    z-index: -1;
}
header {
    width: 100%;
    height: 138px;
    background-image: linear-gradient(to top, rgba(255, 0, 0, 0), rgba(4, 4, 4, 1.0));
    position: fixed;
    top: 0;
    z-index: 100;
}

.linear {
    width: 100%;
    height: 5px;
    background-image: linear-gradient(to right, #791cb5 50%, rgb(41, 0, 250));
}

.header {
    width: 100%;
    height: 110px;
    /* background-color: #e2c5c5; */
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}

.header-lf {
    width: 180px;
    height: 100%;
    display: flex;
    align-items: center;
}

.header-rt {
    width: 1000px;
    height: 100%;
    /* background-color: #aa0000; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin-right: 130px;
}

.header-rt-top {
    width: 450px;
    height: 38px;
    display: flex;
    position: absolute;
    right: 0;
    justify-content: space-between;
    /* background-color: #00aa7f; */
    align-items: flex-end;
    color: rgb(255, 255, 255);
    font-size: 12px;
    cursor: pointer;
}

.header-rt-bot {
    width: 100%;
    height: 72px;
    font-size: 18px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    cursor: pointer;
}

.search {
    width: 20px;
    height: 40px;
    display: flex;
    align-items: flex-end;
}

.search>img {
    width: 18px;
    height: 18px;
}

.diqiu {
    display: flex;
}

.diqiu>img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
}

.button {
    width: 90px;
    height: 90px;
    background-image: linear-gradient(25deg, #791cb5, rgb(41, 0, 250) 70%);
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>