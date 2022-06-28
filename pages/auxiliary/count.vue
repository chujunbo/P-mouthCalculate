<template>
	<div>
		<view class="returnUp">
			<uni-icons type="back" size="28"></uni-icons>
			<view class="time">
				09:46
			</view>
		</view>
		<view class="countBack">
			<view class="count">
				
			</view>
			<view class="text">
				十几减9
			</view>
			<view class="topics">
				{{topic}}/20题
			</view>
		</view>
		<view class="computer">
			
		</view>
	</div>
</template>

<script>
	export default{
		onLoad() {
			uni.hideTabBar()
		},
		data(){
			return{
				topic:1
			}
		}
	}
</script>

<style>
	.returnUp{
		display:flex;
		text-align: center;
	}
	.returnUp .time{
		width: 80px;
		height: 30px;
		line-height: 30px;
		border-radius: 15px;
		color: #44a6ff;
		font-weight: 700;
		background-color: pink;
	}
	.countBack{
		position: relative;
	}
	.countBack .count{
		z-index: 10;
		margin: 100px auto 0;
		width: 90%;
		height: 135px;
		border-radius: 20px;
		background-color: #2794f5;
	}
	.countBack .text{
		z-index: 9;
		position: absolute;
		bottom: -38px;
		left: 9%;
		margin: 0 auto;
		width: 80%;
		height: 80px;
		border-radius: 15px;
		background-color:red;
		text-align: center;
		line-height: 80px;
		font-size: 19px;
	}
</style>