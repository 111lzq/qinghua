
<style scoped>
	.banner {
		width: 100%;
		height: 690px;
		background: url() no-repeat center;
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
</style>
<template>
	<div class="banner" :style="{ 'background-image': `url(${message.url})` }">
		<div class="text">
			<p>{{message.h1}}</p>
			<span>
				{{message.p}}
			</span>
		</div>
	</div>
</template>

<script setup>
	// import { defineProps } from 'vue';
	
	const a= defineProps({
	  message: {
	    required: true,
	    type: Object,
	  },
	});
	// console.log(a.message)
</script>
