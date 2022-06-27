<template>
	<view class="content">
		<userInfo/>
		<view class="main">
			<img src="/static/相机.png" alt="" class="camera" @click="camera">
		</view>
		<view class="sharing" @click="sharing()">
			<uni-icons type="star-filled" size="20" color="#ffaa00"></uni-icons>推荐给好友
		</view>
	</view>
</template>

<script>
	import userInfo from '@/components/useInfo.vue'
	export default {
		onLoad() {
			console.log(13);
		},
		components:{
			userInfo
		},
		data() {
			return {
			}
		},
		methods: {
			camera(){
				console.log('照相');
			},
			sharing(){
				
			}
		}
	}
</script>

<style>
	.main{
		position: relative;
		padding-top: 10%;
		width: 100%;
		height: 400px;
		background-color:#ffffff;
		
	}
	.main .camera{
		position: absolute;
		top: 50%;
		left: 50%;
		transform:translate(-43%,-45%) scale(1.3);
	}
	.sharing{
		text-align: center;
		border-radius: 15px;
		width: 35%;
		height: 35px;
		line-height: 35px;
		margin: 0 auto;
		color: #454545;
		background-color: #f7f9fa;
	}
</style>
