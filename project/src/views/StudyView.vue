<style scoped>
	.banner {
		width: 100%;
		height: 690px;
		background: url('../static/stu/banner03.jpg') no-repeat center;
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

	/* 1 */
	.content {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		z-index: 6;
	}

	.test {
		padding: 80px 80px 0px;
		box-sizing: border-box;
		background-color: #ffffff;
	}

	.test>li {
		width: 1040px;
		height: 276px;
		display: flex;
		padding-left: 40px;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		border-left: 4px solid #791cb5;
		margin-bottom: 80px;
		z-index: 6;
	}

	/* 	.content>li::after{
		content: '';
		position: absolute;
		w
		
	} */
	.lf {
		width: 486px;
		height: 276px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.rt {
		width: 420px;
		height: 270px;
		background-color: #fff9d8;
	}

	.rt>img {
		width: 100%;
		height: 100%;
	}

	h1 {
		font-size: 34px;
		font-weight: 400;
	}

	.lf>p {
		width: 486px;
		height: 78px;
		font-size: 14px;
		line-height: 26px;
		color: rgb(146, 146, 146);
	}

	.choose {
		width: 100%;
		height: auto;

	}

	.choose>li {
		width: 30%;
		height: 36px;
		line-height: 36px;
		color: rgb(121, 28, 181);
		font-size: 18px;
		position: relative;
		z-index: 1;
		display: flex;
	}
	.choose>li:hover>img{
		transform:translateX(20px);
	}

	.choose>li>img {
		width: 28px;
		height: 11px;
		margin-left: 40px;
		margin-top: 16px;
		transition: all .4s ease;
	}

	/* 3 */
	.buttom {
		width: 100%;
		height: auto;
		display: flex;
		/* align-items: center; */
		justify-content: center;
		position: relative;
		margin-top: 100px;
	}

	.buttom::after {
		content: '';
		width: 100%;
		height: 663px;
		position: absolute;
		top: -20%;
		left: 0;
		background: url(../static/stu/bg4.jpg) no-repeat center;
		z-index: -1;
	}

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
	}

	.head {
		width: 1200px;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: white 2px solid;
	}

	.head-lf {
		color: white;
		font-size: 24px;
		font-weight: 500;
		margin-left: 20px;
	}

	.head-rt {
		width: auto;
		height: 100%;
		color: white;
		font-size: 12px;
		line-height: 60px;
		position: relative;
	}

	.head-rt::after {
		content: '';
		position: absolute;
		width: 55px;
		height: 2px;
		background-color: white;
		bottom: 0;
		left: -3px;
	}

	.image {
		width: 100%;
		height: 616px;
		display: flex;
		flex-wrap: wrap;

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
		transition: all .4s linear; 
	}
	.image>li:hover>img{
		transform: scale(1.1);
	}
	.image>li::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(to top, rgba(51, 14, 71, 0.85), rgba(0, 0, 0, 0));
	}

	.img {
		width: 100%;
		height: 100%;
		transition: all .2s linear;
	}

	.image>li>p {
		padding: 0 26px;
		margin-top: 250px;
		position: absolute;
		box-sizing: border-box;
		bottom: 34px;
		left: 0;
		z-index: 3;
	}
</style>
<template>
	<div class="study">
		<div class="banner">
			<div class="text">
				<p>科学研究</p>
				<span>
					清华始终坚持面向世界科技前沿和国家重大战略需要，坚定地走中国特色自主创新之路。百年创新，硕果累累，清华师生在科技进步和学术发展中填补了一个又一个空白，刷新着一项又一项纪录，
					作出了重要的思想、理论和知识贡献。
				</span>
			</div>
		</div>

		<div class="content">
			<ul class="test">
				<li v-for="item in data" :key="item.id">
					<div class="lf">
						<h1>{{item.h}}</h1>
						<p>{{item.p}}</p>
						<ul class="choose">
							<li v-for="li in item.ul">
								{{li}}
								<img src="../static/stu/jiantopu.png" alt="" />
							</li>
						</ul>
					</div>
					<div class="rt">
						<!-- <img src="../static/stu/kyxm002.jpg" alt="" /> -->
						<img :src="item.src" alt="" />
					</div>
				</li>
			</ul>
		</div>

		<div class="buttom">
			<div class="dongtai">
				<div class="head">
					<div class="head-lf">学术科研在清华</div>
					<div class="head-rt">查看更多</div>
				</div>
				<ul class="image">
					<li>
						<img src="../static/stu/a.png" alt="" class="img" />
						<p>清华大学三位教师在第五届全国高校混合式教学设计创新大赛中获得佳绩</p>
					</li>
					<li>
						<img src="../static/stu/b.jpg" alt="" class="img" />
						<p>2022年度北京市科学技术奖揭晓 清华荣获突出贡献中关村奖1人，成果奖一等奖7项...</p>
					</li>
					<li>
						<img src="../static/stu/c.jpg" alt="" class="img" />
						<p>清华大学物理人才培养“攀登计划”启动仪式举行</p>
					</li>
					<li>
						<img src="../static/stu/d.jpg" alt="" class="img" />
						<p>2023年清华大学本科生特等奖学金答辩会举行</p>
					</li>
					<li>
						<img src="../static/stu/e.jpg" alt="" class="img" />
						<p>第一届“王玉明科技强基奖”颁奖典礼举行</p>
					</li>
					<li>
						<img src="../static/stu/f.jpg" alt="" class="img" />
						<p>清华大学在第十八届全国“挑战杯”竞赛中取得佳绩</p>
					</li>
				</ul>
			</div>
		</div>

		<Footer></Footer>
	</div>
</template>

<script setup>
	import Footer from '../components/FooterView.vue'
	import {
		reactive,
		ref
	} from 'vue'
	const data = ref([
		{
			id: '1',
			h: '科研项目',
			p: '科研项目是开展高水平科学研究和支撑高质量人才培养的重要依托，也是引领学科发展的重要力量。国家科技计划（专项、基金等）是我校科研项目和经费的重要来源。',
			src: 'src/static/stu/kyxm001.jpg',
			ul: {
				a: '科研项目概况',
				b: '新立重大项目',
				c: '重点推广项目',
			}
		},
		{
			id: '2',
			h: '科研机构',
			p: '清华大学科研机构根据其批准设立的主体不同，分为三类，包括政府批准机构、学校自主设立机构和学校与校外独立法人单位联合共建机构。',
			src: 'src/static/stu/kyxm002.jpg',
			ul: {
				a: '政府批建机构',
				b: '自主设立机构',
				c: '联合共建机构',
			}
		},
		{
			id: '3',
			h: '科研合作',
			p: '清华大学面向国民经济主战场，机构和海外知名跨国企业积极开展前瞻性、高水平的科研合作与交流，提升科研水平，促进学科建设，提升学校学术科研的国际影响力和知名度。',
			src: 'src/static/stu/kyxm003.jpg',
			ul: {
				a: '地方合作',
				b: '企业合作',
				c: '海外合作',
			}
		},
		{
			id: '4',
			h: '科研成果',
			p: '围绕建设世界一流大学，清华大学瞄准世界科技前沿和国家重大需求，在重大基础研究、战略高技术、服务经济发展等方面，取得了一批重要科研成果。',
			src: 'src/static/stu/kyxm004.jpg',
			ul: {
				a: '获奖成果',
				b: '论文著作',
			}
		},
		{
			id: '5',
			h: '技术转移',
			p: '将现有的科技成果通过技术许可、技术转让、技术作价投资等方式转移到企业实施运用',
			src: 'src/static/stu/kyxm005.jpg',
			ul: {

			}
		},
		{
			id: '6',
			h: '学术交流',
			p: '随着学校世界一流大学建设和全球战略的全面推进，学校积极开展多渠道、高层次、实质性的科研合作与学术交流活动，高水平论坛、国际学术会议、学术期刊日益成为学校人才培养、科学研究、合作交流的重要平台。',
			src: 'src/static/stu/kyxm006.jpg',
			ul: {
				a: '清华论坛',
				b: '国际会议',
				c: '学术期刊',
			}
		}
	])
		
		console.log(data)
</script>