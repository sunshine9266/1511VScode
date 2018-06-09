<template>
	<div class="detailInfo">
		<div class="header">
			<img class="back" src="../../../static/back.png" alt="" @click="goBack"/>
			<ul>
				<router-link :to="{path:'/detail/detailindex',query:{cid:cid}}" tag="li" ref="firstLoad" >商品</router-link>
				<router-link :to="{path:'/detail/detailinfo',query:{cid:cid}}" tag="li" >详情</router-link> 
				<router-link :to="{path:'/detail/detailtalk',query:{cid:cid}}" tag="li" >评价</router-link>  
				<!--<li ref="firstLoad" @click="goTodetail('index')">商品</li>
				<li @click="goTodetail('info')">详情</li>
				<li @click="goTodetail('talk')">评价</li>-->
				<li><img class="car" src="./car.png" /></li>
			</ul>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<div class="detailfooter">
			<div class="save">收藏</div>
			<div class="tocar">加入购物车</div>
		</div>
	</div>
</template>

<script>
	import swiper from "../common/swiper";
	export default {
		name: 'detailinfo',
		data() {
			return {
				detailinfo: [],
				reviewinfo: [],
				commentnum: 0, //评论数目
				cid: "",//商品的id
				prevPage:""
			}
		},
		created() {
			//将用户id作为值保存起来
			this.cid=this.$route.query.cid
//			console.log(this.cid)
			this.prevPage = this.$route.params.fromPage;
			console.log(this.prevPage)
		},
		mounted() {
		},
		methods: {
			goBack(){
				this.$router.push({path:this.prevPage})
			}
			
//			goTodetail(data) {
//				if(data == "index") {
//					this.$router.push({
//						path: '/detail/detailindex',
//						query: {
//							cid:this.cid
//						}
//					})
//				}else if(data == "info"){
//					this.$router.push({
//						path: '/detail/detailinfo',
//						query: {
//							cid:this.cid,
//							active:true
//						}
//					})
//				}else if(data == "talk"){
//					this.$router.push({
//						path: '/detail/detailtalk',
//						query: {
//							cid:this.cid
//						}
//					})
//				}
//			}
		
		
		
		
		
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.detailInfo {
		width: 100%;
		background: white;
		padding-top: 1.319444rem;
		padding-bottom: 1.388888rem;
		.header {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 999;
			width: 100%;
			height: 1.319444rem;
			border-bottom: 1px solid #f0f0f0;
			display: flex;
			background: white;
			align-items: center;
			.back {
				width: 0.916666rem;
				height: 0.916666rem;
			}
			ul {
				margin-left: 0.277777rem;
				height: 100%;
				flex-grow: 1;
				display: flex;
				justify-content: space-around;
				align-items: center;
				li {
					height: 100%;
					width: 1.388888rem;
					line-height: 1.333333rem;
					text-align: center;
					color: #323232;
					border-bottom: 2px solid transparent;
					font-size: 0.5rem;
				}
				li.router-link-active {
					border-bottom: 2px solid #fba12b;
					color: #fba12b;
				}
				li.activeLi {
					border-bottom: 2px solid #fba12b;
					color: #fba12b;
				}
				img.car {
					width: 0.916666rem;
					height: 0.916666rem;
					vertical-align: middle;
				}
			}
		}
		.detailfooter {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 1.388888rem;
			display: flex;
			div {
				flex-grow: 1;
				width: 50%;
				color: white;
				font-size: 0.583333rem;
				text-align: center;
				line-height: 1.388888rem;
			}
			.save {
				background: #FAB32E;
			}
			.tocar {
				background: #CA0816;
			}
		}
	}
</style>