<style scoped>
	.yanjiu {
		width: 100%;
		height: 740px;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
	}

	.yj-lf {
		width: 400px;
		height: 740px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-right: 50px;
	}

	h1 {
		font-size: 34px;
		font-weight: 400;
		position: relative;
		margin-top: 20px;
	}

	h1::before {
		content: 'RESEARCH';
		position: absolute;
		font-size: 18px;
		top: -23px;
		left: 0;
	}

	h1::after {
		content: '';
		position: absolute;
		width: 68px;
		height: 4px;
		background-color: rgb(101, 16, 173);
		bottom: -16px;
		left: 0;
	}

	.yj-lf>p {
		width: 360px;
		height: 130px;
		font-size: 14px;
		color: rgb(146, 146, 146);
		line-height: 26px;
		margin-top: -40px;
	}

	.heading {
		width: 100%;
		height: 363px;
		/* background-color: #47D800; */
		box-sizing: border-box;
	}

	.heading>li {
		width: 100%;
		height: auto;
		padding: 15px 0;
		font-size: 17px;
		font-weight: 700;
		line-height: 26px;
		border-bottom: #e7e7e7 solid 1px;
		transition: all .1s;
		/* background: url(../static/home/libg.png)no-repeat center 100%/100%; */
		position: relative;
		box-sizing: border-box;
		z-index: 4;
	}

	.heading>li>p {
		transition: all .5s ease;
		/* z-index: 999; */
	}

	.bg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transition: all .5s ease;
	}

	.heading>li:hover {
		border-left: 2px solid rgb(101, 16, 173);
		border-bottom: none;
	}


	.heading>li:hover .bg{
		color: rgb(101, 16, 173);
		transform: translateX(100px);
	}

	.heading>li:hover>p {
		color: rgb(101, 16, 173);
		transform: translateX(50px);
	}

	.yj-rt {
		width: 1163px;
		height: 740px;
		position: relative;
	}

	.yj-rt::after {
		content: '';
		position: absolute;
		width: 1050px;
		height: 786px;
		background: url(../static/home/img1080.jpg) no-repeat center;
		top: -150px;
		right: 0;
		z-index: -1;
	}

	.yj-rt>img {
		width: 100%;
		height: 100%;
	}

	/*  */
	.study {
		width: 100%;
		height: 707px;
		display: flex;
		justify-content: center;
		position: relative;
	}

	.stu-content {
		width: 1320px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		background: url(../static/home/index-admissions.png) no-repeat center;
	}

	h2 {
		font-size: 34px;
		font-weight: 400;
		position: relative;
		margin-top: 20px;
	}

	h2::before {
		content: 'ADMISSIONS';
		position: absolute;
		font-size: 16px;
		top: -23px;
		left: 21px;
	}

	h2::after {
		content: '';
		position: absolute;
		width: 68px;
		height: 4px;
		background-color: rgb(101, 16, 173);
		bottom: -16px;
		left: 34px;
	}

	.stu-content>p {
		width: 590px;
		height: 78px;
		color: rgb(146, 146, 146);
		font-size: 14px;
		line-height: 26px;
		text-align: center;
	}

	.icon {
		width: 100%;
		height: 226px;
		display: flex;
		justify-content: space-between;
	}

	.icon>li {
		width: 211px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	b {
		font-size: 30px;
		font-weight: 700;
		color: rgb(101, 16, 173);
	}

	em {
		font-size: 12px;
	}

	.icon>li>p {
		font-size: 14px;
		color: rgb(146, 146, 146);
		line-height: 18px;
	}

	/*  */
	.video {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		position: relative;
		bottom: 70px;
	}

	.vid-lf {
		width: 319px;
		height: 480px;
		background: url(../static/home/img319.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.vid-lf>img {
		width: 100%;
		height: 100%;
	}

	.vid-lf>li {
		width: 219px;
		height: 61px;
		border-bottom: rgb(179, 179, 179) 1px solid;
		font-size: 18px;
		font-weight: 700;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.vid-lf>li:hover {
		color: rgb(101, 16, 173);
	}

	.vid-lf>li:nth-child(3) {
		margin-bottom: 40px;
	}

	.vid-rt {
		width: 1001px;
		height: 436px;
	}

	video {
		width: 100%;
		height: 436px;
	}

	/*  */
	.guanzhu {
		width: 100%;
		height: auto;
		/* background-color: antiquewhite; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		align-items: center;
		margin-bottom: 80px;
	}

	.guanzhu::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1308px;
		z-index: -1;
		top: -35%;
		left: 0;
		background: url(../static/home/index-flow.jpg) no-repeat center;
	}

	.gz-tp {
		width: 1320px;
		height: 138px;
		display: flex;
		justify-content: space-between;
		position: relative;
		align-items: center;
	}

	.gz-tp::before {
		content: '';
		position: absolute;
		width: 345px;
		height: 3px;
		background-color: rgb(238, 150, 64);
		top: 0;
		left: 0;
	}

	h3 {
		color: white;
		font-size: 34px;
		font-weight: 400;
		position: relative;
	}

	h3::before {
		position: absolute;
		content: 'FOLLOW US @SOCIAL MEDIA';
		font-size: 18px;
		top: -20px;
		left: 0;
	}

	.gz-tp>span {
		display: block;
		width: 58px;
		height: 28px;
		font-size: 12px;
		text-align: center;
		line-height: 28px;
		color: white;
		border-bottom: 2px solid white;
	}

	.logo {
		width: 456px;
		height: 56px;
		display: flex;
		justify-content: space-between;
	}

	.logo>li {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.11);
		transition: all 1s linear;
	}

	.logo>li:last-child {
		background-color: rgba(255, 255, 255, 0.58);
	}

	.gz-bt {
		width: 1760px;
		height: 880px;
		background-color: #ff7967;
		display: flex;
		flex-wrap: wrap;
		transition: all 1.1s linear;
	}

	.gz-bt>li {
		width: 440px;
		height: 440px;
		position: relative;
		overflow: hidden;
		transition: all 1.1s linear;
	}

	.gz-bt>li::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: url(../static/home/bg10.png) repeat-x center;
		background-size: auto 100%;
		left: 0;
		top: 0;
	}

	.gz-bt>li:hover>img {
		transform: scale(1.1);
	}

	.gz-bt>li:nth-child(3) {
		width: 880px;
	}

	.gz-bt>li:nth-child(4) {
		width: 880px;
	}

	.gz-bt>li>img {
		width: 100%;
		height: 100%;
		transition: all .2s linear;
	}

	.text {
		position: absolute;
		width: 360px;
		height: 112px;
		bottom: 0;
		left: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.text>span {
		color: rgb(177, 177, 177);
		font-size: 12px;
		margin-bottom: -16px;
	}

	.text>p {
		color: white;
		font-size: 15px;
	}

	.text>img {
		width: 26px;
		height: 21px;
		position: relative;
	}

	.text::before {
		content: '微信';
		position: absolute;
		left: 35px;
		bottom: 25px;
		width: 29px;
		height: 18px;
		color: white;
		font-size: 14px;
		z-index: 99;
	}

	.bto {
		width: 64px;
		height: 8px;
		background-color: #47D800;
	}

	.logo>li:hover {
		background-color: rgb(101, 16, 173);
	}
</style>
<template>
	<div class="home">
		<Banner :message="info"></Banner>
		<!--  -->
		<div class="yanjiu">
			<div class="yj-lf">
				<h1>学术研究</h1>
				<p>清华始终坚持面向世界科技前沿和国家重大战略需要，坚定地走中国特色自主创新之路。百年创新，硕果累累，清华师生在科技进步和学术发展中填补了一个又一个空白，刷新着一项又一项纪录，作出了重要的思想、理论和知识贡献。
				</p>
				<ul class="heading">
					<li @mouseenter="changeSrc('src/static/home/b1.png')">
						<p> 材料学院刘锴课题组在二维可重构器件方面取得进展</p>
						<img src="../static/home/libg.png" alt="" class="bg"/>
					</li>
					<li @mouseenter="changeSrc('src/static/home/b2.jpg')">
						<p> 生命学院颉伟课题组揭示哺乳动物基因组激活到第一次细胞命运决定转换的分子机制</p>
						<img src="../static/home/libg.png" alt="" class="bg"/>
						</li>
					<li @mouseenter="changeSrc('src/static/home/b3.jpg')">
						<p> 自动化系谢震团队提出环状RNA的可编程翻译调控策略实现目标细胞类型的精准识别</p>
						<img src="../static/home/libg.png" alt="" class="bg"/>
						</li>
					<li @mouseenter="changeSrc('src/static/home/b4.jpg')">
						<p> 电子系方璐团队在大规模光电智能计算方向取得进展</p>
						<img src="../static/home/libg.png" alt="" class="bg"/>
						</li>
					<li @mouseenter="changeSrc('src/static/home/b5.jpg')">
						<p> 化工系生物育种技术与装备团队报道高精度对蛋白表达特征进行大规模并行表征的方法</p>
						<img src="../static/home/libg.png" alt="" class="bg"/>
						</li>
				</ul>
			</div>
			<div class="yj-rt">
				<img :src="imgPath" alt="" />
			</div>
		</div>
		<!--  -->
		<div class="study">
			<div class="stu-content">
				<h2>入读清华</h2>
				<p>
					32年前，我怀着人生梦想来到清华，从此就一直浸润在这个美丽而充满生机的园子里。今天，你们像当年的我一样，怀揣梦想、憧憬未来。如果你们要问我:“大学有多大？”我会告诉你们，“清华足够大，就看你的梦想有多大。”——清华大学党委书记
					邱勇
				</p>
				<ul class="icon">
					<li v-for="item in img">
						<img :src="item.url" alt="" />
						<div class="info">
							<b>{{item.b}}</b>
							<em>{{item.em}}</em>
						</div>
						<p>{{item.p}}</p>
					</li>
				</ul>
			</div>
		</div>
		<!--  -->
		<div class="video">
			<ul class="vid-lf">
				<li>
					本科生招生
					<img src="../static/admi/rr8.png" alt="" />
				</li>
				<li>
					研究生招生
					<img src="../static/admi/rr8.png" alt="" />
				</li>
				<li>
					国际学生招生
					<img src="../static/admi/rr8.png" alt="" />
				</li>
				<li>
					在线教育
					<img src="../static/admi/rr8.png" alt="" />
				</li>
				<li>
					终身教育
					<img src="../static/admi/rr8.png" alt="" />
				</li>
			</ul>
			<div class="vid-rt">
				<video src="https://v.cic.tsinghua.edu.cn/vod/video/0/a/508393.mp4" controls="true" autoplay="autoplay"
					loop="loop" preload="metadata" muted="muted"></video>
			</div>
		</div>
		<!--  -->
		<div class="guanzhu">
			<div class="gz-tp">
				<h3>关注社交媒体上的我们</h3>
				<span>查看更多</span>
				<ul class="logo">
					<li>
						<img src="../static/home/dy.png" alt="" />
					</li>
					<li>
						<img src="../static/home/ks.png" alt="" />
					</li>
					<li>
						<img src="../static/home/wb.png" alt="" />
					</li>
					<li>
						<img src="../static/home/bilbi.png" alt="" />
					</li>
					<li>
						<img src="../static/home/wx.png" alt="" />
					</li>
					<li>
						<img src="../static/home/dots.png" alt="" />
					</li>
				</ul>
			</div>
			<ul class="gz-bt">
				<li>
					<img src="../static/home/bt1.jpg" alt="" class="img" />
					<div class="text">
						<span>11月24日 10:50</span>
						<p>从工科女生到攻坚先锋，她的秘诀是“飞”常努力！</p>
						<img src="../static/home/wx2png.png" alt="" />
						<div class="bto"></div>
					</div>
				</li>
				<li>
					<img src="../static/home/bt2.jpg" alt="" />
					<div class="text">
						<span>11月24日 10:50</span>
						<p>从工科女生到攻坚先锋，她的秘诀是“飞”常努力！</p>
						<img src="../static/home/wx2png.png" alt="" />
						<div class="bto"></div>
					</div>
				</li>
				<li>
					<img src="../static/home/bt3.jpg" alt="" />
					<div class="text">
						<span>11月24日 10:50</span>
						<p>从工科女生到攻坚先锋，她的秘诀是“飞”常努力！</p>
						<img src="../static/home/wx2png.png" alt="" />
						<div class="bto"></div>
					</div>
				</li>
				<li>
					<img src="../static/home/bt4.jpg" alt="" />
					<div class="text">
						<span>11月24日 10:50</span>
						<p>从工科女生到攻坚先锋，她的秘诀是“飞”常努力！</p>
						<img src="../static/home/wx2png.png" alt="" />
						<div class="bto"></div>
					</div>
				</li>
				<li>
					<img src="../static/home/bt5.jpg" alt="" />
					<div class="text">
						<span>11月24日 10:50</span>
						<p>从工科女生到攻坚先锋，她的秘诀是“飞”常努力！</p>
						<img src="../static/home/wx2png.png" alt="" />
						<div class="bto"></div>
					</div>
				</li>
				<li>
					<img src="../static/home/bt6.jpg" alt="" />
					<div class="text">
						<span>11月24日 10:50</span>
						<p>从工科女生到攻坚先锋，她的秘诀是“飞”常努力！</p>
						<img src="../static/home/wx2png.png" alt="" />
						<div class="bto"></div>
					</div>
				</li>
			</ul>
		</div>

		<Footer></Footer>
	</div>
</template>
<script setup>
	import Banner from '../components/Banner.vue'
	import Footer from '../components/FooterView.vue'
	import {
		ref,
		reactive
	} from "vue";
	const info = ref({
		url: 'src/static/team/444.png',
		h1: '首页',
	})

	const img = ref(
		[{
				url: 'src/static/home/a.png',
				b: '69',
				em: '个',
				p: '学院 21个；系 59个'
			},
			{
				url: 'src/static/home/b.png',
				b: '232',
				em: '个',
				p: '学院 21个；系 59个'
			}, {
				url: 'src/static/home/c.png',
				b: '14',
				em: '个',
				p: '学院 21个；系 59个'
			}, {
				url: 'src/static/home/d.png',
				b: '63',
				em: '个',
				p: '学院 21个；系 59个'
			}, {
				url: 'src/static/home/e.png',
				b: '656',
				em: '个',
				p: '学院 21个；系 59个'
			}, {
				url: 'src/static/home/a.png',
				b: '232',
				em: '个',
				p: '学院 21个；系 59个'
			},
		]
	)

	const imgPath = ref('src/static/home/b1.png')
	const changeSrc = (src) => {
		imgPath.value = src
		// console.log(src)
	}
</script>