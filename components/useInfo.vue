<template>
	<view class="userInfos">
		<!-- 用户信息及反馈 -->
		<view class="userMsg" @click="open">
			<van-image
			  round
			  width="4rem"
			  height="4rem"
			  :src="img"
			/>
			<view style="margin-left: 10px;">
				<view style="font-size: 20px;margin:5px 0 10px 0px;font-weight: 700;">{{userName}}</view>
				<view style="font-size: 15px;">{{classMsg || '未设置'}}<uni-icons type="map-pin-ellipse" size="15"></uni-icons></view>
			</view>
		</view>
		<view class="left-box">
			<view class="box">
				<van-icon name="todo-list" class="icon" color="#1989fa" style="font-size: 25px;" />
				<text style="font-size: 10px;margin-top: 5px;">历史记录</text>
			</view>
			<view class="box">
				<van-icon name="gift" class="icon" color="#1989fa" style="font-size: 25px;"/>
				<text style="font-size: 10px;margin-top: 5px;"> 反馈 </text>
			</view>
		</view>
		<!-- 底部选择 -->
		<view class="tob-box" v-if="flag">
			<view class="box">
				<view style="text-align: center;position: relative;">
					<text style="color: #ccc;position: absolute;top: 0;left: 20px;" @click="close()">暂不设置</text>
					<text style="font-size: 30px;font-weight: 600;">选择年级</text>
					<img src="/static/小熊猫头.png" alt="" style="position: absolute;top: -166px;left: -101px;transform: scale(.3);">
				</view>
				<view style="height: 100%;">
					<view class="msgBox">
						<view v-for="item in classList" :key="item.id" :class="{active:num===item.name}" @click="select(item.id,item.name)">{{item.name}}</view>
					</view>
					<view class="but" @click="sub()">
					确定
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default{
	onLoad() {
		this.open()
	},
	data() {
		return{
			flag:false,
			num:'',
			name:'',
			userName:'霸天道人',
			img:'https://img.yzcdn.cn/vant/cat.jpeg',
			classList:[
				{'name':'一年级','id':1},
				{'name':'二年级','id':2},
				{'name':'三年级','id':3},
				{'name':'四年级','id':4},
				{'name':'五年级','id':5},
				{'name':'六年级','id':6}
			]
		}
	},
	methods:{
		...mapMutations('user',['upDataClass']),
		open(){
			this.flag=true
			uni.hideTabBar()
			console.log("年级",this.classMsg);
			console.log("num",this.num);
			this.num = this.classMsg
		},
		close(){
			this.upDataClass('')
			this.flag=false
			uni.showTabBar()
		},
		select(id,name){
			this.num = name
			this.name = name
		},
		sub(){
			if(!this.name) return
			this.flag = false
			uni.showTabBar()
			this.upDataClass(this.name)
			console.log(this.classMsg)
		}
	},
	computed:{
		...mapState('user',['classMsg'])
		
	}
}
</script>

<style>
	.userInfos {
		display: flex;
		justify-content: space-between;
		height: 65px;
	}
	.userInfos .userMsg{
		display: flex;
	}
	.left-box{
		display: flex;
		justify-content: space-evenly;
		width: 150px;
		
	}
	.left-box .box{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.left-box .box .icon{
		font-size: 30px
	}
	
	.tob-box{
		z-index: 9;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.6);
		overflow: hidden;
	}
	.tob-box .box{
		text-align: center;
		position: absolute;
		width: 100%;
		height: 40%;
		bottom: 0px;
		left: 0px;
		padding-top: 30px;
		background-color: #ffffff;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
	}
	.tob-box .msgBox{
		display: flex;
		flex-wrap:wrap;
		padding: 5%;
		height: 40%;
		text-align: center;
		justify-content: space-evenly;
	}
	.tob-box .botbox{
		margin-bottom: 8%;
	}
	.tob-box .msgBox view{
		font-size: 20px;
		width: 100px;
		height: 50px;
		line-height: 50px;
		background-color: #f7f9fa;
		border-radius: 15px;
	}
	.tob-box .but{
		text-align: center;
		margin: 0 auto;
		width: 80%;
		height: 50px;
		background-color: #1490ff;
		border-radius: 25px;
		font-size: 25px;
		line-height: 50px;
	}
	.active{
		color: #44a6ff;
		background-color: #ecf6ff;
	}
</style>