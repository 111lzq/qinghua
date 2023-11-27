<style scoped>
	.banner {
		width: 100%;
		height: 690px;
		background: url('../static/edu/banner12.jpg') no-repeat center;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 80px;
		position: relative;
	}

	.text {
		width: 637px;
		height: auto;
		position: absolute;
		bottom: 40px;
		left: 300px;
	}

	.text>p {
		font-size: 48px;
	}

	.text>span {
		font-size: 18px;
		line-height: 30px;
		display: block;
		margin-top: 15px;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.content::after {
		content: '';
		width: 100%;
		height: 501px;
		background-color: rgb(242, 243, 248);
		position: absolute;
		bottom: 0;
		left: 0;
	}

	/* //1 */
	.shizi {
		width: 1200px;
		height: 486px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 80px;
	}

	h1 {
		font-size: 33px;
		font-weight: 400;
		position: relative;
	}

	h1::after {
		content: '';
		position: absolute;
		width: 64px;
		height: 4px;
		background-color: #791cb5;
		bottom: -10px;
		left: 33px;
	}

	.shizi>p {
		width: 810px;
		height: 52px;
		line-height: 26px;
		color: rgb(146, 146, 146);
		font-size: 14px;
		text-align: center;
	}

	.logo {
		width: auto;
		height: auto;
		display: flex;
	}

	.logo>li {
		width: 316px;
		height: 160px;
		margin-right: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	h6 {
		color: rgb(65, 65, 65);
		font-size: 14px;
		font-family: SourceSansPro-Regular, 微软雅黑;
		font-weight: normal;
	}

	.logo>li:nth-child(2) {
		border-left: 1px solid rgb(204, 204, 204);
	}

	.logo>li:nth-child(3) {
		border-left: 1px solid rgb(204, 204, 204);
	}

	.num {
		width: auto;
		height: auto;
		display: flex;
	}

	.num>li {
		width: 225px;
		height: 120px;
		margin-right: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.num li:not(:first-child) {
		border-left: 1px solid rgb(204, 204, 204);
	}

	.number {
		color: rgb(122, 29, 182);
		font-size: 72px;
		font-weight: 700;
	}

	/* //2 */
	.jiaoyu {
		width: 100%;
		height: 600px;
		display: flex;
	}

	.jiaoyu>li {
		width: 25%;
		height: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid #dfdfdf;
	}

	.jiaoyu>li:not(:last-child) {
		border-right: 1px solid #dfdfdf;
	}

	.top {
		width: 100%;
		height: 327px;
		background-color: #ffbca1;
		position: relative;
	}

	.a {
		/* background: url(../static/edu/picLink01.jpg); */
	}

	.b {
		background: url(../static/edu/picLink02.jpg);
	}

	.c {
		background: url(../static/edu/picLink04.jpg);
	}

	.d {
		background: url(../static/edu/picLink03.jpg);
	}

	h3 {
		font-size: 33px;
		font-weight: 400;
		color: white;
		position: absolute;
		left: 40px;
		bottom: 10px;
	}

	h3::after {
		content: '';
		width: 68px;
		height: 4px;
		background-color: rgb(156, 210, 79);
		position: absolute;
		bottom: -10px;
		left: 0;
	}

	.bot {
		width: 100%;
		height: calc(600px - 327px);
		box-sizing: border-box;
	}

	.bot-content {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
		box-sizing: border-box;
	}

	.bot-content>li {
		width: 236px;
		height: 58px;
		font-size: 20px;
		cursor: pointer;
		color: rgb(102, 102, 102);
		line-height: 38px;
		padding: 10px 42px;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
	}
	.bot-content>li::after{
		content: '';
		position: absolute;
		right: 30px;
		top: calc(50% - 3px);
		width: 28px;
		height: 11px;
		background: url('../static/admi/rr7.png');
	}

	.bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 236px;
		height: 58px;
		z-index: -1;
		transition: all .4s linear;
		transform: translateX(-236px);
		background-image: linear-gradient(to right, #791cb5 50%, rgb(41, 0, 250));
	}

	.bot-content>li:hover {
		color: white;
	}

	.bot-content>li:hover>.bg {
		transform: translateX(0);
	}

	/* //3 */
	.dongtai {
		width: 1400px;
		height: 685px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		position: relative;
		z-index: 22;
		margin-bottom: 150px;
		margin-top: 100px;
	}

	.head {
		width: 1200px;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: #791cb3 2px solid;
	}

	.head-lf {
		color: #791cb3;
		font-size: 24px;
		font-weight: 500;
		margin-left: 20px;
	}

	.head-rt {
		width: auto;
		height: 100%;
		color: #791cb3;
		font-size: 12px;
		line-height: 60px;
		position: relative;
	}

	.head-rt::after {
		content: '';
		position: absolute;
		width: 55px;
		height: 2px;
		background-color: #791cb3;
		bottom: 0;
		left: -3px;
	}

	.image {
		width: 100%;
		height: 616px;
		display: flex;
		flex-wrap: wrap;
		transition: all .6s linear;
	}

	.image>li {
		width: 466px;
		height: 308px;
		color: white;
		font-size: 18px;
		font-weight: 700;
		background-color: #ffd815;
		position: relative;
		overflow: hidden;
	}

	.image>li:hover>img {
		transform: scale(1.1);
	}

	.img {
		width: 100%;
		height: 100%;
		transition: all .4s linear;
	}

	.image>li>p {
		padding: 0 26px;
		margin-top: 250px;
		position: absolute;
		box-sizing: border-box;
		bottom: 34px;
		left: 0;
	}
</style>
<template>
	<div class="edu">
		<div class="banner">
			<div class="text">
				<p>教育教学</p>
				<span>
					建校早期,清华就确立了"培植全才，增进国力" 的宗旨。百年树人，桃李芬芳，十七万莘莘学子
					在清华精神熏陶下奋发向上，一大批治学、兴业、治国的英才挺起民族的脊梁。
				</span>
			</div>
		</div>
		<div class="content">
			<div class="shizi">
				<h1>师资队伍</h1>
				<p>清华大学培育和凝聚了一批又一批高水平的专家学者。近年来，学校遵循"引进与培养并举"的方针，
					加强青年教师队伍建设，在国内外选聘优秀人才，师资队伍水平稳步提高。</p>
				<ul class="logo">
					<li>
						<img src="../static/edu/l.png" alt="" />
						<h6>国际重要奖励获得者</h6>
					</li>
					<li>
						<img src="../static/edu/c.png" alt="" />
						<h6>中国科学院院士</h6>
					</li>
					<li>
						<img src="../static/edu/r.png" alt="" />
						<h6>中国工程院院士</h6>
					</li>
				</ul>
				<ul class="num">
					<li>
						<div class="number">125</div>
						<h6>历届国家及北京市教学名师奖获得者</h6>
					</li>
					<li>
						<div class="number">625</div>
						<h6>历届清华大学荣誉奖励获得者</h6>
					</li>
					<li>
						<div class="number">3225</div>
						<h6>教师人数</h6>
					</li>
					<li>
						<div class="number">2231</div>
						<h6>博士后在站人数</h6>
					</li>
				</ul>
			</div>
			<ul class="jiaoyu">
				<li v-for="(item,index) in data">
					<div class="top" :style="{ 'background-image': `url(${item.url})` }">
						<h3>{{item.h3}}</h3>
					</div>
					<div class="bot">
						<ul class="bot-content">
							<li v-for="li in item.ul">
								<div class="bg"></div>
								{{li}}
							</li>
						</ul>
					</div>
				</li>
			</ul>
			<div class="dongtai">
				<div class="head">
					<div class="head-lf">最近教学动态</div>
					<div class="head-rt">查看更多</div>
				</div>
				<ul class="image">
					<li>
						<img src="../static/edu/a.png" alt="" class="img" />
						<p>清华大学三位教师在第五届全国高校混合式教学设计创新大赛中获得佳绩</p>
					</li>
					<li>
						<img src="../static/edu/b.jpg" alt="" class="img" />
						<p>2022年度北京市科学技术奖揭晓 清华荣获突出贡献中关村奖1人，成果奖一等奖7项...</p>
					</li>
					<li>
						<img src="../static/edu/c.jpeg" alt="" class="img" />
						<p>清华大学物理人才培养“攀登计划”启动仪式举行</p>
					</li>
					<li>
						<img src="../static/edu/d.png" alt="" class="img" />
						<p>2023年清华大学本科生特等奖学金答辩会举行</p>
					</li>
					<li>
						<img src="../static/edu/e.png" alt="" class="img" />
						<p>第一届“王玉明科技强基奖”颁奖典礼举行</p>
					</li>
					<li>
						<img src="../static/edu/f.jpg" alt="" class="img" />
						<p>清华大学在第十八届全国“挑战杯”竞赛中取得佳绩</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<Footer></Footer>
</template>

<script setup>
	import Footer from '../components/FooterView.vue'
	import {
		ref
	} from 'vue'

	const data = ([
		{
			url: 'src/static/edu/picLink01.jpg',
			h3: '本科生教育',
			ul: {
				a: '教学名师',
				b: '优质课程',
				c: '优质课程',
				d: '教学成果',
				e: '特色项目',
			},
		},
		{
			url: 'src/static/edu/picLink02.jpg',
			h3: '研究生教育',
			ul: {
				a: '教学名师',
				b: '优质课程',
				c: '优质课程',
				d: '教学成果',
			},
		}, {
			url: 'src/static/edu/picLink04.jpg',
			h3: '在线教育',
			ul: {
				a: '教学名师',
				b: '优质课程',
				c: '优质课程',
				d: '教学成果',
				e: '特色项目',
				f: '优质课程',
				g: '教学成果',
				h: '特色项目',
			},
		}, {
			url: 'src/static/edu/picLink03.jpg',
			h3: '终身教育',
			ul: {
				a: '教学名师',
				b: '优质课程',
				c: '优质课程',
			},
		},
	])
</script>