<style >
	/* @import './base.css'; */
	*{
	  margin: 0;
	  padding: 0;
	  /* overflow-x: hidden; */
	}
	a{
		text-decoration: none;
		color: white;
		transition: all .3s ease;
	}
	a:hover{
		color: rgb(226, 202, 91);
	}
	li{
		list-style: none;
		cursor: pointer;
	}
	#app {
	padding: 0;
	margin: 0;
	font-family: SourceSansPro-Regular, 微软雅黑;
	}
	
	header{
		width: 100%;
		height: 138px;
		background-image: linear-gradient(to top, rgba(255,0,0,0), rgba(4, 4, 4, 1.0));
		position: relative;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.linear{
		width: 100%;
		height: 5px;
		background: url(../src/static/icon/head-bg2.jpg);
		/* background-image: linear-gradient(to right, #791cb5 50%, rgb(41, 0, 250)); */
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

	.header-rt-bot>li:hover{
		color: rgb(226, 202, 91);
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
	.button{
		width: 100px;
		height: 80px;
		background-image:url(../src/static/icon/img100.png) ;
		/* background-image: linear-gradient(25deg, #791cb5 , rgb(41, 0, 250) 70%); */
		position: absolute;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
.content{
	
	/* background-color: #aaff00; */
}
.a{
	color: rgb(226, 202, 91);
}
</style>
<template>
	<header>
		<div class="linear"></div>
		<div class="button">
		<img src="./static/banner/navA.png" alt="" srcset="" />
		</div>
		<div class="header">
			<div class="header-lf">
				<router-link to="/">
					<img src="../src/static/banner/logo.png" alt="" srcset="" />
				</router-link>
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
						<img src="/src/static/icon/地球.png" alt="" />
						English
					</li>
					<li class="search">
						<img src="/src/static/icon/search.png" alt="" srcset="">
					</li>
				</ul>
				<ul class="header-rt-bot">
					<li >
						<div >清华新闻</div></li>
					<li>学校概况</li>
					<router-link to="/set">
						<li @click="change('b')"  :class="{a:isAction==='b'}">院系设置</li>
					</router-link>
					<router-link to="/edu">
						<li @click="change('a')"  :class="{a:isAction==='a'}">教育教学</li>
					</router-link>
					<router-link to="/stu">
						<li @click="change('c')"  :class="{a:isAction==='c'}">科学研究</li>
					</router-link>
					<router-link to="/admi">
						<li @click="change('d')"  :class="{a:isAction==='d'}">招生就业</li>
					</router-link>
					<router-link to="/team">
						<li @click="change('e')"  :class="{a:isAction==='e'}">合作交流</li>
					</router-link>
					<li>走进清华</li>
				</ul>
			</div>
		</div>
	</header>
	<div class="content">
		<router-view></router-view>
	</div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const isAction = ref('')

const change = (value) => {
	isAction.value=value
}

</script>


<!-- <template>
  <div>
    <ul>
      <li class="nav-item" v-for="item in items" :key="item.id" 
        :class="{ 'active': item.isActive }" @click="activateItem(item)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { id: 1, label: '清华新闻', isActive: false },
  { id: 2, label: '学校概况', isActive: false },
  { id: 3, label: '院系设置', isActive: false },
  { id: 4, label: '教育教学', isActive: false },
  { id: 5, label: '科学研究', isActive: false },
  { id: 6, label: '招生就业', isActive: false },
  { id: 7, label: '合作交流', isActive: false },
  { id: 8, label: '走进清华', isActive: false }
]);

const activateItem = (item) => {
  items.value.forEach((i) => {
    i.isActive = false;
	console.log(i)
  });

  item.isActive = true;
};
</script>

<style scoped>
.nav-item {
  padding: 10px;
  cursor: pointer;
}

.active {
  background-color: #f00;
  color: #fff;
}
</style> -->