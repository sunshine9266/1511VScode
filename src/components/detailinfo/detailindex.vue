<template>
	<div class="detailcontent">
		<div class="imginfo">
			<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide v-for='(data,index) in detailinfo.images' :key="index">
					<img :src="data" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<h5>{{detailinfo.title}}</h5>
		<h6>￥{{detailinfo.price}}</h6>
		<div class="info">
			<div>快递:<span>{{detailinfo.freight}}</span>元</div>
			<div>月销量:<span>{{detailinfo.freight}}</span>件</div>
		</div>
		<div class="drakline"></div>
		<dl>
			<dt>商品评价(<span>{{commentnum}}</span>)</dt>
			<dd v-if="commentnum" v-for="item in reviewinfo">
				<div class="userinfo">
					<span class="name">{{item.nickname}}</span>
					<img :src="item.head" alt="" />
					<span class="time">{{item.times}}</span>
				</div>
				<div class="content">
					{{item.content}}
				</div>
			</dd>
		</dl>
	</div>
</template>

<script>
	import swiper from "../common/swiper";
	export default {
		name: 'detailinfo',
		data() {
			return {
				swiperOption: {
					autoplay: true,
					effect: "fade",
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					loop: true
				},
				changeColor: false,
				detailinfo: [],
				reviewinfo: [],
				commentnum: 0 //评论数目
			}
		},
//		mounted(){
//			console.log(1111)
//		},
//		updated(){
//			console.log(2222)
//		},
		//使用keepalive缓存组件的时候,要在这个钩子函数里面获取数据,否则,数据不会刷新
		created() {
			//详情页信息
			console.log(this.$route.query);
			const detailURL = this.config.reqdomain + this.config.detailinfo + this.$route.query.cid + "&type=details&token=" + this.config.token
			this.$http(detailURL, "get", (data) => {
					this.detailinfo = data.data.data
				})
				//详情页商品评价信息
			const reviewsURL = this.config.reqdomain + this.config.reviews + this.$route.query.cid + "&type=details&token=" + this.config.token
			this.$http(reviewsURL, "get", (data) => {
				this.reviewinfo = data.data.data;
				if(this.reviewinfo != "没有数据") {
					this.commentnum = this.reviewinfo.length;
				}
//				console.log(this.reviewinfo);
			})
		}
		//路由离开时的钩子函数
//		beforeRouteLeave(to, from, next) {
//			console.log(to)		
//			next()
//		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.detailcontent {
		height: 100%;
		overflow: hidden;
		overflow-y: auto;
		.imginfo {
			margin-top: 1px;
			width: 100%;
			height: 10rem;
		}
		h5 {
			height: 1.666666rem;
			line-height: 1.666666rem;
			font-size: 0.416666rem;
			font-weight: bold;
			width: 85%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			text-indent: 0.277777rem;
		}
		h6 {
			text-indent: 0.277777rem;
			font-size: 0.388888rem;
			color: #ca0816;
			font-weight: bold;
		}
		.info {
			color: #979797;
			font-size: 0.305555rem;
			display: flex;
			justify-content: space-between;
			padding: 0.555555rem 0.277777rem;
			span {
				color: #fab32e;
			}
		}
		.drakline {
			height: 0.208333rem;
			background: #efefef;
		}
		dl {
			width: 100%;
			dt {
				font-size: 0.5rem;
				color: #7b7f82;
				line-height: 1.388888rem;
				font-weight: bold;
				margin-left: 0.277777rem;
				span {
					color: #000000 !important;
					font-size: 0.527777rem;
				}
			}
			dd {
				font-size: 0.361111rem;
				color: #969696;
				border-bottom: 1px solid #ADB0B2;
				padding-top: 0.277777rem;
				.userinfo {
					display: flex;
					height: 0.833333rem;
					justify-content: space-between;
					line-height: 0.833333rem;
					.name {
						color: #333333;
						margin-left: 0.277777rem;
						width: 1.111111rem;
					}
					.time {
						color: #979797;
						flex-grow: 1;
						text-indent: 2.777777rem;
					}
					img {
						align-self: center;
						width: 0.972222rem;
						border-radius: 50%;
						margin: 0 0.277777rem;
					}
				}
				.content {
					height: 0.694444rem;
					padding-top: 0.277777rem;
					color: #000000;
					text-indent: 0.347222rem;
				}
			}
		}
	}
</style>