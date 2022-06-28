<template>
	<view class="content">
		<userInfo/>
		<view class="main">
			<view class="card">
				<view class="trapezoid left" v-if="flag===1"></view>
				<view  class="trapezoid right" v-if="flag===2"></view>
				<view class="card-main">
					<view class="top-box">
						<view @click="tabSelect(1)" :class="flag===1?'box-z text-Left active':'box-z text-Left'">
							AI智能练习
							
						</view>
						<view @click="tabSelect(2)" :class="flag===2?'box-z text-Left active':'box-z text-Left'">
							知识点练习
						</view>
					</view>
					<view class="tabMain">
						<view class="leftdog" v-if="tabFlag">
							<view class="imgPhoto">
								<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170819%2Ff4db5f72c8234b29a60e8e60526d49c9.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658891585&t=0869bf0ec957f39a5d42eb39f95c9da7" mode=""></image>
							</view>
							<view style="font-size: 21px;font-weight: 700;">
								用人工智能高效提升口算能力
							</view>
							<view style="margin-top: 12px;font-size: 15px;color: #666666;">
								自动匹配学习进度，智能识别薄弱环节
							</view>
							<button style="margin-top: 30px;border-radius: 20px;width: 300px;font-size: 18px;color: #ffffff;background-color: #108eff;font-weight: 700;">立即口算</button>
							<view style="margin-top: 15px;color: #feb237;font-size: 14px;">
								已有{{num}}人使用AI智能练习
							</view>
						</view>
						<view class="rightCalculate" v-if="!tabFlag">
							123
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import userInfo from '@/components/useInfo.vue'
	export default{
		components:{
			userInfo
		},
		data(){
			return{
				flag:1,
				tabFlag:true,
				num:123123
			}
		},
		methods:{
			tabSelect(num){
				this.flag = num
				if(num===1){
					this.tabFlag =true
				}else{
					this.tabFlag =false
				}
			}
		}
	}
</script>

<style>
.main{
	padding: 15px 20px 20px;
	width: 100%;
	height: 576px;
	background-color: #f5f5f5;
	box-sizing: border-box;
}
.main .card{
	position: relative;
	padding-top: 20px;
	width: 100%;
	height: 96%;
	background-color:#f5f5f5;
	border-radius: 15px;
	overflow: hidden;
}
/* 梯形 */
.main .card .trapezoid{
	/* display: none; */
	border-radius: .5em .5em 0 0;
	margin: 20px;
	height: 40px;
	width: 116px;
	background: #ffffff;
	transform-origin: bottom;
	transform: scaleY(1.7) perspective(.5em) rotateX(3.5deg)scale(2);
	 /*scaleY: 纵轴放大1.3倍，使梯形高度等于height；perspective:3d透视效果，元素距离视图的距离*/
}
.main .card .right{
	position: absolute;
	top: 24px;
	right: -8px;
}

.main .card .left{
	position: absolute;
	top: 24px;
	left: -8px;
}
/* 梯形 end */

.card-main{
	width: 100%;
	height: 100%;
	background-color: #f7f9fa;
}
.card-main .top-box{
	display: flex;
	position: relative;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 12%;
	border-radius: 15px 15px 0 0;
}
.card-main .top-box .box-z{
	width: 150px;
	height: 100%;
	line-height: 60px;
	text-align: center;
}
.active{
	font-weight: 700;
	font-size: 26px;
}
.card-main .tabMain{
	border: 1px solid transparent;
	width: 100%;
	height: 500px;
	background-color: #ffffff;
}
.card-main .tabMain .leftdog {
	text-align: center;
}
.card-main .tabMain .leftdog .imgPhoto{
	margin: 40px auto;
	width: 150px;
	height: 150px;
	border-radius: 75px;
	overflow: hidden;
}
.card-main .tabMain .leftdog .imgPhoto image{
	width: 100%;
	height: 100%;
}
.card-main .tabMain .rightCalculate{
	
}
</style>