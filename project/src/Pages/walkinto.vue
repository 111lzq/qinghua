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
    <div class="big">
        <p>学生活动</p>
        <div class="bar">
            <ul>
                <li>首页</li>
                <li>走进清华</li>
                <li>校园生活</li>
                <li>学生活动</li>
            </ul>
        </div>
    </div>

    <div class="aside">
        <ul>
            <li>校园生活</li>
            <li>学生活动</li>
            <li class="lis ">教工活动</li>
            <li class="lis bg">实用信息</li>
            <li class="lis bg">校园风光</li>
            <li class="lis bg">清华文创</li>
        </ul>
    </div>
    <footer>
    <div class="top">
      <h2>常用链接</h2>
      <ul class="list">
        <li>校园参观</li>
        <li>校园地图</li>
        <li>校友总会</li>
        <li>校园公交车</li>
        <li>实用信息</li>
        <li>清华标志</li>
        <li>清华校历</li>
        <li>教育基金会</li>
        <li>宣传资源</li>
      </ul>
      <div class="img">
        <img src="../image/summery/guanweierweima.jpg" alt="" />
        <p>欢迎关注清华大学公众号</p>
      </div>
    </div>
    <div class="bg">
      <div class="end">
        <div class="end-top">
          <img src="../static/banner/logo.png" alt="" />
          <ul class="lianxi">
            <li>
              <img src="../image/summery/电话.png" alt="" />
              <p>010-62793001</p>
            </li>
            <li>
              <img src="../image/summery/邮箱.png" alt="" />
              <p>webmaster@tsinghua.edu.cn</p>
            </li>
            <li>
              <img src="../image/summery/401位置.png" alt="" />
              <p>北京市海淀区清华大学</p>
            </li>
            <li>
              <img src="../image/summery/投诉建议.png" alt="" />
              <p>意见反馈</p>
            </li>
          </ul>
        </div>
        <div class="end-bot">
          <div class="b">
            <p>版权所有 © 清华大学</p>
            <p>京公网安备 110402430053 号</p>
            <p>京公网安备 110402430053 号</p>
          </div>

          <div class="a">
            <img src="../static/icon/查看.png" alt="" />
            21232131
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.aside ul .bg{
    margin-left: 0;
    background:none;
}
.aside ul .bg:hover{
    background: linear-gradient(to right,#791cb5 50%,#2D21E3);
}
.aside ul .lis{
    border-bottom: 1px solid #ccc;
    line-height: 55px;
    color: #777;
}
.aside ul li:nth-child(2){
    color: #791cb5;
    font-size: 13px;
    line-height: 54px;
}
.aside ul li:nth-child(3){
    font-size: 13px;
}
.aside ul li:nth-child(1){
    color: white;
    font-size: 15px;
    background: linear-gradient(to right,#791cb5 50%,#2D21E3);
    line-height: 55px;
}
.aside ul li{
    width: 100%;
    height: 16%;
    font-size: 15px;
    cursor: pointer;
}
.aside ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.aside{
    width: 208px;
    height: 315px;
    position: absolute;
    right: 180px;
    top: 850px;
    z-index: 1000;
}
footer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 650px;
  border-top: 1px solid #999999;
}

h2 {
  margin: 60px 0 30px 0;
  font-size: 34px;
  font-family: SourceSansPro-Regular, 微软雅黑;
  font-weight: 400;
}

.top {
  width: 50%;
  height: 350px;
  margin-bottom: 100px;
  position: relative;
  margin-left: -350px;
}

.img {
  position: absolute;
  bottom: -33%;
  right: -37%;
  color: white;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.img > img {
  width: 219px;
  height: 219px;
  margin-bottom: 10px;
}

.list {
  width: 700px;
  height: 153px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list > li {
  width: 187px;
  height: 45px;
  line-height: 45px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.bg {
  width: calc(100% - 5%);
  height: 192px;
  background-color: #c6cfd7;
  margin-left: 5%;
  position: relative;
}

.end {
  width: calc(100% - 45px);
  height: 235px;
  background-color: #4b0c77;
  margin-left: 45px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: c; */
}

.end-top {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  box-sizing: border-box;
  padding-left: 150px;
  margin-top: 50px;
}

.lianxi {
  width: 400px;
  height: 48px;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
}

.lianxi > li {
  width: auto;
  display: flex;
  align-items: center;
  color: white;
  font-size: 12px;
  margin-right: 15px;
}

.lianxi > li > img {
  width: 15px;
  height: 15px;
  margin-right: 8px;
}

.end-bot {
  width: 1320px;
  height: 69px;
  margin-left: 150px;
  color: #999999;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #999999;
  padding-top: 15px;
  box-sizing: border-box;
}

.b {
  display: flex;
}

.b > p {
  margin-right: 15px;
}

.a {
  display: flex;
  justify-content: center;
  color: white;
  /* align-items: center; */
}

.a > img {
  width: 19px;
  height: 19px;
}
.big .bar li{
    font-size: 12px;
    color: white;
    margin-right: 28px;
}
.big .bar ul{
    width: 298px;
    height: 25px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
.big .bar{
    width: 680px;
    height: 65px;
    background:linear-gradient(to left,#2D21E3,#631DC2);
    position: absolute;
    bottom: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.big p{
    font-size: 45px;
    color: white;
    position: absolute;
    bottom: 50px;
    left: 200px;
}
.big{
    width: 100%;
    height: 539px;
    background: url('../image/walk/walk-b.jpg') center no-repeat;
    position: relative;
}

header .header-rt-bot li{
    color: white;
}
header {
    position: fixed !important;
    top: 0;
    z-index: 100;
}
header {
    width: 100%;
    height: 138px;
    background-image: linear-gradient(to top, rgba(255, 0, 0, 0), rgba(4, 4, 4, 1.0));
    position: relative;
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