<template>
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
</template>
<script>
	export default {
		name: 'detailinfo',
		data() {
			return {
				reviewinfo: [],
				commentnum: 0 //评论数目
			}
		},
		created() {
				//详情页商品评价信息
			const reviewsURL = this.config.reqdomain + this.config.reviews + this.$route.query.cid + "&type=details&token=" + this.config.token
			this.$http(reviewsURL, "get", (data) => {
				this.reviewinfo = data.data.data;
				if(this.reviewinfo != "没有数据") {
					this.commentnum = this.reviewinfo.length;
				}
			})
		}
	}
</script>
<style scoped lang="less">
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
</style>