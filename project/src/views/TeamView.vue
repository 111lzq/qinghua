<style scoped>
	.guonei {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
	}

	.bg {
		width: 100%;
		height: 759px;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(../static/team/gjheBG.jpg);
		display: flex;
		justify-content: center;
		align-items: flex-end;
		color: white;
	}

	.work .content {
		width: 1200px;
		height: 689px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	

	h1 {
		font-size: 33px;
		font-weight: 400;
		position: relative;
	}

	h1::before {
		content: '';
		position: absolute;
		width: 63px;
		height: 4px;
		background-color: rgb(255, 255, 255);
		bottom: -10px;
		left: 33px;
	}

	.content>p {
		width: 800px;
		height: 104px;
		color: rgb(146, 146, 146);
		line-height: 26px;
		font-size: 14px;
		text-align: center;
	}

	.hezuo {
		width: 1000px;
		height: 484px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		padding: 0 100px;
	}

	/* .hezuo::after {
		content: '';
		height: 0;
		width: 24%;
	} */

	.hezuo>li {
		width: 33%;
		height: 127px;
		/* margin-bottom: 40px; */
		padding-left: 30px;
		box-sizing: border-box;
		border-left: 1px solid #791cb3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hezuo>li:last-child {
		height: auto;
	}

	h2 {
		font-size: 30px;
		font-weight: 400;
		margin-bottom: 10px;
		color: #000;
	}

	.text {
		width: auto;
		height: 36px;
		line-height: 36px;
		font-size: 18px;
		color: #791cb3;
		position: relative;
		/* padding-right: 50px; */
		position: relative;
	}

	.text>p {
		width: auto;
		display: inline-block;
		margin-right: 25px;
		bottom: -20px;
		right: 0;
	}
	
	/*  */
	.buttom {
		width: 100%;
		height: auto;
		display: flex;
		/* align-items: center; */
		justify-content: center;
		position: relative;
		margin-top: 100px;
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
	
	.image>li::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(to top, rgba(51, 14, 71, 0.85), rgba(0, 0, 0, 0));
	}
	.image>li:hover .img{
		transform: scale(1.1);
	}
	.img {
		width: 100%;
		height: 100%;
		transition: all .3s ease; 
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
	.text:hover .imgs {
		transform: translateX(20px);
	}
	.imgs{
		transition: all .7s ease;
	}
	.text:hover>p {
		color: #003db8;
	}
	
</style>
<template>
	<div class="team">
		<Banner :message="info"></Banner>

		<div class="guonei">
			<Team :message="data"></Team>
		</div>
		<div class="bg">
			<div class="work">
				<div class="content">
					<h1>国际合作</h1>
					<p>清华大学积极开展多渠道、高层次、实质性的国际合作与交流活动，加强国际化能力建设；与一批世界知名大学和机构建立了战略伙伴关系，在面向全球性重大问题进行学术研究、科技研发和决策咨询方面发挥了重要作用。通过联合培养、学生交换、开设海外名师讲堂和主办国际会议等多种形式，培养具有全球视野、能够适应国际竞争的拔尖创新人才；通过策划推进重大国际文化和学术交流活动，提升学校国际声誉和学术影响力。
					</p>
					<ul class="hezuo">
						<li v-for="item in text">
							<h2>{{item.h2}}</h2>
							<div class="text" v-for="li in item.text">
								<p>{{li}}</p>
								<img :src="item.url" alt="" class="imgs"/>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="buttom">
			<div class="dongtai">
				<div class="head">
					<div class="head-lf">学术科研在清华</div>
					<div class="head-rt">查看更多</div>
				</div>
				<ul class="image">
					<li>
						<img src="../static/team/a.jpg" alt="" class="img" />
						<p>清华大学三位教师在第五届全国高校混合式教学设计创新大赛中获得佳绩</p>
					</li>
					<li>
						<img src="../static/team/b.png" alt="" class="img" />
						<p>2022年度北京市科学技术奖揭晓 清华荣获突出贡献中关村奖1人，成果奖一等奖7项...</p>
					</li>
					<li>
						<img src="../static/team/c.jpeg" alt="" class="img" />
						<p>清华大学物理人才培养“攀登计划”启动仪式举行</p>
					</li>
					<li>
						<img src="../static/team/d.jpeg" alt="" class="img" />
						<p>2023年清华大学本科生特等奖学金答辩会举行</p>
					</li>
					<li>
						<img src="../static/team/e.jpeg" alt="" class="img" />
						<p>第一届“王玉明科技强基奖”颁奖典礼举行</p>
					</li>
					<li>
						<img src="../static/team/f.png" alt="" class="img" />
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
	import Banner from '../components/Banner.vue'
	import Team from '../components/TeamWrok.vue'
	import {
		ref,
		reactive
	} from "vue";
	const info = ref({
		url: 'src/static/team/444.png',
		h1: '合作交流',
		p: '32年前，清华大学深度参与国家创新驱动发展战略实施，与多个部委、省市、企业等深入开展科技、人才、教育、咨询等全方位的合作。清华大学积极开展多渠道、高层次、实质性的国际合作与交流活动，加强国际化能力建设；与一批世界知名大学和机构建立了战略伙伴关系，在面向全球性重大问题进行学术研究、科技研发和决策咨询方面发挥了重要作用。'
	})
	const data = ref({
		head: '国内合作',
		p: '清华大学坚持服务国家，深度参与创新驱动发展战略实施，建设校地合作研究院，与各级地方政府、企业、高校、中央部委、事业单位等国内合作对象，在科学研究、人才培养、终身教育、战略咨询等方面开展全面合作。',
		ul: [{
				h2: '全面合作',
			},
			{
				h2: '科研合作',
				text: {
					a: '科学研究',
					b: '技术转移',
				},
				url: 'src/static/team/rr8.png'
			},
			{
				h2: '人才培养与交流',
				text: {
					a: '学生就业',
					b: '学生社会实践',
				},
				url: 'src/static/team/rr8.png'
			}, {
				h2: '终身教育',

			}, {
				h2: '战略咨询与智库',
			}, {
				h2: '校地合作研究院',
			},
			{
				h2: '对口支援与定点帮扶',
			},
		]
	})
	const text = ref(
		[{
				h2: '全球战略',
				text: {
					a: '海外基地',
					b: '世界大学联盟',
				},
				url: 'src/static/team/rr8.png'
			},
			{
				h2: '世界大学联盟',
			}, {
				h2: '国际学生学者',
			}, {
				h2: '国际校园',
			}, {
				h2: '海外科研合作',
			}, {
				h2: '暑期学校',
				text: {
					a: '云上全球暑期学校GSS',
					b: '院系暑期学校',
				},
				url: 'src/static/team/rr8.png'
			},
			{
				h2: '清华共识',
			},
		]
	)
</script>