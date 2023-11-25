<style scoped>
	.setting {
		background-color: #fff;
	}

	.banner {
		width: 100%;
		height: 690px;
		background: url('../static/banner/banner07.jpg') no-repeat center;
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
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 130px;
	}

	.content-top {
		width: 1200px;
		height: 44px;
		display: flex;
		position: relative;
	}

	.content-top::before {
		content: '';
		height: 1px;
		width: 80%;
		background-color: #e3e3e3;
		position: absolute;
		top: 50%;
		right: 0;
		z-index: ;
	}

	.shuzhuang {
		width: 110px;
		height: 100%;
		background-color: #791cb5;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: white;
		border: 1px solid #791cb5;
		box-sizing: border-box;
		position: relative;
		margin-left: 75px;
	}

	.shuzhuang>img {
		margin-right: -12px;
	}

	.shuzhuang::after {
		content: '';
		position: absolute;
		border: 10px solid transparent;
		border-top-color: #791cb5;
		bottom: -20px;
	}

	.zimu {
		width: 110px;
		height: 100%;
		background-color: white;
		border: 1px solid #791cb5;
		box-sizing: border-box;
		color: #791cb5;
		line-height: 44px;
		text-align: center;
		z-index: 3;
	}

	.content-bot {
		width: 1200px;
		height: auto;
		margin-top: 10px;
	}

	.title {
		width: 100%;
		height: 52px;
		display: flex;
		justify-content: center;
	}

	.yuanxi {
		width: 100%;
		height: auto;
		display: flex;
		position: relative;
	}

	.yuanxi::after {
		content: '';
		position: absolute;
		width: 1px;
		height: 100%;
		background-color: #dcdcdc;
		top: 0;
		left: 50%;
		z-index: 0;
	}

	.yuanxi::before {
		content: '';
		position: absolute;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background-color: #9879ab;
		bottom: 0;
		left: 49%;
		z-index: 1;
	}

	.left {
		width: 50%;
		height: auto;
	}

	.right {
		width: 50%;
		height: auto;
	}

	.bulid {
		width: 100%;
		padding: 20px 30px 0 0;
		box-sizing: border-box;
		border-top: 1px solid #791cb5;
		display: flex;
		justify-content: space-between;
		/* background-color: #106cff; */
		margin-bottom: 3.125rem;
		position: relative;
		margin-top: 40px;
	}

	.bulid::before {
		content: '';
		position: absolute;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #791cb5;
		right: -3px;
		top: -3px;
		z-index: 3;
	}

	.lf>li {
		margin: 10px 0;
		font-size: 16px;
	}

	.rt {
		width: auto;
		position: relative;
		text-align: right;
		padding-right: 22px;
	}

	.rt>img {
		position: absolute;
		right: 0px;
		top: 0;
	}

	h1 {
		font-size: 24px;
		color: rgb(121, 28, 181);
	}

	.manage {
		width: 100%;
		padding: 20px 150px 0 30px;
		box-sizing: border-box;
		border-top: 1px solid #791cb5;
		display: flex;
		justify-content: space-between;
		/* background-color: #106cff; */
		margin-bottom: 3.125rem;
		position: relative;
		margin-top: 90px;
	}

	.manage::before {
		content: '';
		position: absolute;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #791cb5;
		left: -3px;
		top: -3px;
		z-index: 3;
	}

	.zhushi {
		width: 100%;
		height: 48px;
		background-color: #f5f5f5;
		line-height: 48px;
		font-size: 12px;
		padding-left: 25px;
		color: #999999;
		box-sizing: border-box;
		position: relative;
		margin-top: 60px;
	}
	.zhushi::after{
		content: '';
		width: 51%;
		height: 48px;
		position: absolute;
		top: 0;
		right: -351px;
		background-color: #f5f5f5;
		z-index: 0;
		overflow: hidden;
	}
</style>
<template>
	<div class="setting">
		<div class="banner">
			<div class="text">
				<p>院系设置</p>
				<span>目前，清华大学设有21个学院，59个系， 已成为一所具有理学、工学、文学、
					艺术学、历史学、哲学、经济学、管理学、法学、教育学和医学等学科的综合性的研究型大学。</span>
			</div>
		</div>
		<div class="content">
			<div class="content-top">
				<div class="shuzhuang">
					<img src="../static/banner/szIcOn.png" alt="" />
					树状
				</div>
				<div class="zimu">
					A-z
				</div>
			</div>
			<div class="content-bot">
				<div class="title">
					<img src="../static/banner/logo2.png" alt="" />
				</div>
				<div class="yuanxi">
					<div class="left">
						<div class="bulid" v-for="item in data.faculty" :key="item.id">
							<ul class="lf">
								<li v-for="i in item.li">{{i}}</li>
							</ul>
							<div class="rt">
								<h1>{{item.ul}}</h1>
								<img src="../static/icon/lj.png" alt="" />
							</div>
							<!-- <img :src="item.scr" alt="" /> -->
						</div>
					</div>
					<div class="right">
						<div class="manage" v-for="item in data.two" :key="item.id">
							<div class="rt">
								<h1>{{item.ul}}</h1>
								<img src="../static/icon/lj.png" alt="" />
							</div>
							<ul class="lf">
								<li v-for="i in item.li">{{i}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="zhushi">
					<p>注：* 为非实体学院</p>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup>
	import {
		reactive
	} from 'vue'
	import Footer from '../components/FooterView.vue'
	const data = reactive({
		faculty: [{
				id: '1',
				ul: '建筑学院',
				scr:'../static/stu/kyxm002.jpg',
				li: {
					a: '建筑系',
					b: '城市规划系',
					c: '建筑技术科学系',
					d: '景观学系',
				}
			},
			{
				id: '2',
				ul: '土木水利学院',
				li: {
					a: '土木工程系',
					b: '水利水电工程系',
					c: '建设管理系',
				}
			},
			{
				id: '3',
				ul: '环境学院',
				li: {
					a: '环境工程系',
					b: '环境科学系',
					c: '环境规划与管理系',
				}
			}, {
				id: '4',
				ul: '* 机械工程学院 * ',
				li: {
					a: '机械工程系',
					b: '精密仪器系',
					c: '能源与动力工程系',
					d: '车辆与运载学院',
					e: '工业工程系',
					f: '基础工业训练中心',
				}
			}, {
				id: '5',
				ul: '航天航空学院',
				li: {
					a: '工程力学系',
					b: '航空宇航工程系',
				}
			}, {
				id: '6',
				ul: '* 信息科学技术学院 * ',
				li: {
					a: '电子工程系',
					b: '计算机科学与技术系',
					c: '集成电路学院',
					d: '电子工程系',
					e: '计算机科学与技术系',
					f: '集成电路学院',
					a: '电子工程系',
					g: '计算机科学与技术系',
				}
			}, {
				id: '7',
				ul: '材料学院',
				li: {

				}
			}, {
				id: '8',
				ul: '电机工程与应用电子技术系',
				li: {}
			}, {
				id: '9',
				ul: '工程物理系',
				li: {

				}
			}, {
				id: '10',
				ul: '土木水利学院',
				li: {
					a: '土木工程系',
					b: '水利水电工程系',
					c: '建设管理系',
				}
			}, {
				id: '11',
				ul: '化学工程系',
				li: {

				}
			}, {
				id: '12',
				ul: '核能与新能源技术研究院',
				li: {}
			}, {
				id: '13',
				ul: '* 理学院 * ',
				li: {
					a: '数学科学系',
					b: '物理系',
					c: '地球系统科学系',
					e: '物理系',
					f: '地球系统科学系',
				}
			}, {
				id: '14',
				ul: '生命科学学院',
				li: {

				}
			}, {
				id: '15',
				ul: '医学院',
				li: {
					a: '生物医学工程系',
					b: '基础医学系',
					c: '临床医学院',
				}
			}, {
				id: '16',
				ul: '药学院',
				li: {

				}
			}, {
				id: '17',
				ul: '万科公共卫生与健康学院',
				li: {

				}
			}, {
				id: '18',
				ul: '交叉信息研究院',
				li: {

				}
			}, {
				id: '19',
				ul: '航空发动机研究院',
				li: {

				}
			}, {
				id: '20',
				ul: '低碳能源实验室',
				li: {

				}
			}, {
				id: '21',
				ul: '数学科学中心',
				li: {

				}
			}, {
				id: '22',
				ul: '生物医学交叉研究院',
				li: {

				}
			}, {
				id: '23',
				ul: '未来实验室',
				li: {

				}
			}, {
				id: '24',
				ul: '脑与智能实验室',
				li: {

				}
			}, {
				id: '25',
				ul: '碳中和研究院',
				li: {

				}
			}, {
				id: '26',
				ul: '国际与地区研究院',
				li: {

				}
			},
		],
		two: [{
				id: '1',
				ul: '建筑学院',
				li: {
					a: '建筑系',
					b: '城市规划系',
					c: '建筑技术科学系',
					d: '景观学系',
				}
			},
			{
				id: '2',
				ul: '土木水利学院',
				li: {
					a: '土木工程系',
					b: '水利水电工程系',
					c: '建设管理系',
				}
			},
			{
				id: '3',
				ul: '环境学院',
				li: {
					a: '环境工程系',
					b: '环境科学系',
					c: '环境规划与管理系',
				}
			}, {
				id: '4',
				ul: '* 机械工程学院 * ',
				li: {
					a: '机械工程系',
					b: '精密仪器系',
					c: '能源与动力工程系',
					d: '车辆与运载学院',
					e: '工业工程系',
					f: '基础工业训练中心',
				}
			}, {
				id: '5',
				ul: '航天航空学院',
				li: {
					a: '工程力学系',
					b: '航空宇航工程系',
				}
			}, {
				id: '6',
				ul: '* 信息科学技术学院 * ',
				li: {
					a: '电子工程系',
					b: '计算机科学与技术系',
					c: '集成电路学院',
					d: '电子工程系',
					e: '计算机科学与技术系',
					f: '集成电路学院',
					a: '电子工程系',
					g: '计算机科学与技术系',
				}
			}, {
				id: '7',
				ul: '材料学院',
				li: {

				}
			}, {
				id: '8',
				ul: '电机工程与应用电子技术系',
				li: {}
			}, {
				id: '9',
				ul: '工程物理系',
				li: {

				}
			}, {
				id: '10',
				ul: '土木水利学院',
				li: {
					a: '土木工程系',
					b: '水利水电工程系',
					c: '建设管理系',
				}
			}, {
				id: '11',
				ul: '化学工程系',
				li: {

				}
			}, {
				id: '12',
				ul: '核能与新能源技术研究院',
				li: {}
			}, {
				id: '13',
				ul: '* 理学院 * ',
				li: {
					a: '数学科学系',
					b: '物理系',
					c: '地球系统科学系',
					e: '物理系',
					f: '地球系统科学系',
				}
			}, {
				id: '14',
				ul: '生命科学学院',
				li: {

				}
			}, {
				id: '15',
				ul: '医学院',
				li: {
					a: '生物医学工程系',
					b: '基础医学系',
					c: '临床医学院',
				}
			}, {
				id: '16',
				ul: '药学院',
				li: {

				}
			}, {
				id: '17',
				ul: '万科公共卫生与健康学院',
				li: {

				}
			}, {
				id: '18',
				ul: '交叉信息研究院',
				li: {

				}
			},
		]
	})
</script>