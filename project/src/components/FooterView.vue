<style scoped>
footer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
</style>

<template>
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
        <img src="../static/banner/guanweierweima.jpg" alt="" />
        <p>欢迎关注清华大学公众号</p>
      </div>
    </div>
    <div class="bg">
      <div class="end">
        <div class="end-top">
          <img src="../static/banner/logo.png" alt="" />
          <ul class="lianxi">
            <li>
              <img src="../static/icon/电话.png" alt="" />
              <p>010-62793001</p>
            </li>
            <li>
              <img src="../static/icon/邮箱.png" alt="" />
              <p>webmaster@tsinghua.edu.cn</p>
            </li>
            <li>
              <img src="../static/icon/401位置.png" alt="" />
              <p>北京市海淀区清华大学</p>
            </li>
            <li>
              <img src="../static/icon/投诉建议.png" alt="" />
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

<script>
</script>