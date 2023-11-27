<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* 1 */
	.number {
		width: 1400px;
		height: 160px;
		position: relative;
	}

	.title {
		font-size: 18px;
		font-weight: 400;
		width: 100%;
		text-align: center;
		position: relative;
		display: flex;
		justify-content: center;
	}

	.title>p {
		width: 150px;
		position: absolute;
		z-index: 999;
	}

	.title::before {
		content: '';
		position: absolute;
		width: 44%;
		height: 1px;
		left: 0;
		top: 10px;
		background-color: rgb(239, 233, 232);
		z-index: -1;
	}

	.title::after {
		content: '';
		position: absolute;
		width: 44%;
		height: 1px;
		right: 0;
		top: 10px;
		background-color: rgb(239, 233, 232);
		z-index: -1;
	}

	.num {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.num>li {
		width: 466px;
		height: 122px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.num>li>p {
		color: rgb(121, 28, 181);
		font-size: 72px;
		font-weight: 700;
		display: block;
	}

	.num>li>span {
		color: rgb(144, 144, 144);
		font-size: 18px;

	}

	/* 2 */
	.photo {
		width: 1700px;
		height: 353px;
		margin: 80px 0;
		display: flex;
		justify-content: space-between;
		position: relative;
	}



	.photo>li {
		width: 550px;
		height: 100%;
		position: relative;
	}

	.photo>li::after {
		content: '';
		width: 550px;
		height: 353px;
		position: absolute;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
		z-index: 2;
	}

	.img {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 2;
	}

	.text {
		position: absolute;
		width: 100%;
		height: 120px;
		bottom: 20px;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		z-index: 8;
	}

	h1 {
		width: 470px;
		display: inline-block;
		color: white;
		font-size: 34px;
		font-weight: 400;
		position: relative;
	}

	h1::before {
		content: '';
		position: absolute;
		width: 170px;
		height: 2px;
		background-color: rgb(238, 150, 64);
		top: 0;
		left: 0;
		z-index: 88;
	}

	h1::after {
		content: '';
		position: absolute;
		background: url(../static/admi/rr7.png);
		width: 28px;
		height: 11px;
		right: 10px;
		bottom: 20px;
	}

	.search {
		width: 470px;
		height: 55px;
		background-color: #fff;
		font-size: 16px;
		line-height: 55px;
		padding: 0 30px;
		box-sizing: border-box;
		position: relative;
	}

	.search::after {
		position: absolute;
		content: '';
		width: 10px;
		height: 5px;
		background: url(../static/admi/xl.png);
		bottom: 25px;
		right: 20px;
	}

	.search:hover .bg {
		display: block;
	}

	.bg {
		position: absolute;
		left: 0;
		top: 55px;
		width: 470px;
		height: 130px;
		background-color: #ffffff;
		padding: 0 30px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		display: none;
	}

	.bg>li {
		width: 100%;
		height: 34px;
		border-left: 1px solid rgb(121, 28, 181);
		color: rgb(121, 28, 181);
		line-height: 30px;
		padding: 0 30px;
		box-sizing: border-box;
	}

	/* 3 */
	.student {
		width: 100%;
		height: 491px;
		background: url(../static/admi/zyfz.jpg) no-repeat center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.heading {
		width: 580px;
		height: 341px;
		margin-left: 600px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	h2 {
		font-size: 34px;
		font-weight: 700;
		color: white;
		position: relative;
	}

	h2::after {
		content: '';
		position: absolute;
		width: 60px;
		height: 3px;
		background-color: rgb(238, 150, 64);
		bottom: -4px;
		left: 0;
	}

	.heading>p {
		width: 100%;
		height: 48px;
		font-size: 14px;
		color: white;
	}

	.btn {
		width: 146px;
		height: 49px;
		background-color: #fff;
		display: flex;
		justify-content: space-evenly;
		color: rgb(121, 28, 181);
		align-items: center;
		font-size: 14px;
	}

	.btn>img {
		width: 28px;
		height: 11px;
	}
</style>
<template>
	<div class="admiss">
		<Banner :message="info"></Banner>
		<div class="content">
			<div class="number">
				<div class="title">
					<p>在学学生人数</p>
				</div>
				<ul class="num">
					<li>
						<p>{{data[0].numone}}</p>
						<span>{{name.a}}</span>
					</li>
					<li>
						<p>{{data[0].numtwo}}</p>
						<span>{{name.b}}</span>
					</li>
					<li>
						<p>{{data[0].numthree}}</p>
						<span>{{name.c}}</span>
					</li>
				</ul>
			</div>
			<ul class="photo">
				<li>
					<img src="../static/admi/pic11.png" alt="" class="img" />
					<div class="text">
						<h1>本科生招生</h1>
						<div class="search">
							你希望直接找哪些内容
							<ul class="bg">
								<li>国内生</li>
								<li>国际学生</li>
								<li>招生专业类</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<img src="../static/admi/pic22.png" alt="" class="img" />
					<div class="text">
						<h1>本科生招生</h1>
						<div class="search">
							你希望直接找哪些内容
							<ul class="bg">
								<li>博士招生</li>
								<li>硕士招生</li>
								<li>港澳台招生</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<img src="../static/admi/pic33.png" alt="" class="img" />
					<div class="text">
						<h1>国际学生招生</h1>
						<div class="search">
							你希望直接找哪些内容
							<ul class="bg">
								<li>本科生招生</li>
								<li>研究生招生</li>
								<li>国际学生学者中心</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
			<div class="student">
				<div class="heading">
					<h2>学生职业发展</h2>
					{{message[0].img}}
					<img :src="message[0].img" alt="">
					<p>{{message[0].partone}}</p>
					<p>{{message[0].parttwo}}</p>
					<p>{{message[0].partthree}}</p>
					<div class="btn">
						<span>查看详细</span>
						<img src="../static/admi/rr8.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>
<script setup>
	import Foot from '../components/FooterView.vue'
	import Banner from '../components/Banner.vue'
	import axios from 'axios'
	import {ref} from "vue"

	const data = ref([]);
	const message=ref([])
	// console.log(data)
	
	axios.post('http://47.109.111.80:3000/commun')
		.then(response => {
			// console.log(response.data);
			data.value = response.data
		})
		.catch(error => {
			console.log(error);
		});
		
	axios.post('http://47.109.111.80:3000/rightmain')
		.then(response => {
			console.log(response.data);
			message.value = response.data
		})
		.catch(error => {
			console.log(error);
		});

	const info = ref({
		url: 'src/static/admi/banner05.jpg',
		h1: '招生就业',
		p: '32年前，我怀着人生梦想来到清华，从此就一直浸润在这个美丽而充满生机的园子里。今天，你们像当年的我一样，怀揣梦想、憧憬未来。如果你们要问我:“大学有多大？”我会告诉你们，“清华足够大，就看你的梦想有多大。”——清华大学党委书记 邱勇'
	})
	const name = ref({
		a: '本科生',
		b: '硕士生',
		c: '博士生'
	}, )
</script>