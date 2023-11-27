<style scoped>
	.work .content {
		width: 1200px;
		height: 550px;
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
		background-color: rgb(121, 28, 181);
		bottom: -10px;
		left: 33px;
	}

	.content>p {
		width: 800px;
		height: 52px;
		color: rgb(146, 146, 146);
		line-height: 26px;
		font-size: 14px;
		text-align: center;
	}

	.hezuo {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	.hezuo::after {
		content: '';
		height: 0;
		width: 24%;
	}

	.hezuo>li {
		width: 24%;
		height: 127px;
		margin-bottom: 70px;
		padding-left: 30px;
		;
		box-sizing: border-box;
		border-left: 1px solid #791cb3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	h2 {
		font-size: 30px;
		font-weight: 400;
		margin-bottom: 10px;
	}

	.text {
		width: auto;
		height: 36px;
		line-height: 36px;
		font-size: 18px;
		color: #791cb3;
		position: relative;
		padding-right: 50px;
		position: relative;
	}

	.text:hover .img {
		transform: translateX(20px);
	}
	.img{
		transition: all .7s ease;
	}
	.text:hover>p {
		color: #003db8;
	}

	.text>p {
		width: auto;
		display: inline-block;
		margin-right: 25px;
		bottom: -20px;
		right: 0;
		transition: all 1s ease;
	}
</style>
<template>
	<div class="work">
		<div class="content">
			<h1>{{message.head}}</h1>
			<p>{{message.p}}</p>
			<ul class="hezuo">
				<li v-for="item in message.ul">
					<h2>{{item.h2}}</h2>
					<div class="text" v-for="li in item.text">
						<p>{{li}}</p>
						<img :src="item.url" alt="" class="img" />
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	const a = defineProps({
		message: {
			required: true,
			type: Object,
		},
	});
</script>