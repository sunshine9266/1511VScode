<template>
	<ul class="girldress" v-if='girlData.items'>
		<li><span>———— </span><span> &nbsp;{{girlData.title}}&nbsp; </span><span> ————</span></li>
		<li>
			<!--<router-link :to='{path:"/detailinfo",query:"{shopid:'girlData.items'}"}' tag="div" class="left">-->
			<div class="left" @click="goDetail(girlData.items[0].gid)">	
				<h6>{{girlData.items[0].title}}</h6>
				<p>精品打折<span>{{girlData.items[0].price}}元</span></p>
				<img :src="girlData.items[0].image" /> 
			</div>
			<!--</router-link>-->
			<ul class="right">
				<li v-for="(item ,index) in girlData.items" v-if="index>0&&index<3" @click="goDetail(item.gid)">
					<div>
						<h6>{{item.title}}</h6><span>品质精挑</span>
					</div>
					<div><img :src="item.image"/></div>
				</li>
			</ul>
		</li>
		<li>
			<ul v-for="(item ,index) in girlData.items.slice(3)">
				<li class="name">{{item.title}}</li>
				<img :src="item.image" alt=""/>
				<li class="newprice">{{item.price}}</li>
				<li class="oldprice">$20</li>
			</ul>
		</li>
	</ul>
</template>
<script>
	export default {
		data() {
				return {
					msg:""
				}
			},
			props: {
				girlData:{
					type:Object,
					required:true
				}
			},
			methods:{
				goDetail(id){
					console.log(id)
					this.$router.push({
			          path: '/detail',
			          query: {
			            cid: id,
			            fromPage:"/index"
			          }
			        })
				}
			}
	}
</script>
<style scoped lang="less">
	.girldress {
		display: flex;
		flex-direction: column;
		&>li:first-child {
			align-self: center;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 0.833333rem;
			border-bottom: 1px solid #efefef;
			color: #f43e63;
			font-size: 0.388888rem;
		}
		&>li:nth-child(2) {
			display: flex;
			.left {
				flex-grow: 1;
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 3.236111rem;
				border-right: 1px solid #efefef;
				border-bottom: 1px solid #efefef;
				/*padding-top: 0.361111rem;*/
				h6 {
					font-size: 0.361111rem;
					font-weight: 200;
					margin: 0 0 0.138888rem 0.277777rem;
					padding-top: 0.255rem;
					align-self: flex-start;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				p {
					margin-left: 0.277777rem;
					align-self: flex-start;
					font-size: 0.291666rem;
					color: #cc4566;
					margin-bottom: 0.138888rem;
					span {
						margin-left: 0.833333rem;
						font-size: 0.361111rem;
						font-weight: bolder;
						background: #ef2452;
						color: white;
						display: inline-block;
						padding: 0.069444rem 0.069444rem;
						border-radius: 0.277777rem;
					}
				}
				img {
					/*width: 100%;*/
					flex-grow: 1;
					height: 1.805555rem;
					margin-bottom: 0.027777rem;
				}
			}
			.right {
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				width: 49%;
				li {
					display: flex;
					justify-content: flex-start;
					padding-left: 0.277777rem;
					height: 1.611111rem;
					border-bottom: 1px solid #efefef;
					div{
						width: 50%;
						h6 {
							align-self: flex-start;
							padding-top: 0.222222rem;
							font-size: 0.361111rem;
							font-weight: bolder;
							/*margin: 0.361111rem 0 0.138888rem 0.277777rem;*/
							align-self: flex-start;
							margin-bottom: 0.138888rem;
							width: 80%;				
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							
						}
						span {
							font-size: 0.277777rem;
							color: #adb0b2;
						}
						
					}
					img {
						margin-left: 10%;
						height: 1.597222rem;
					}
				}
			}
		}
		&>li:last-child {
			display: flex;
			flex-direction: row;
			ul {
				flex-grow: 1;
				width: 25%;
				border-right: 1px solid #efefef;
				display: flex;
				flex-direction: column;
				/*justify-content: space-around;*/
				align-items: center;
				.name {
					font-size: 0.361111rem;
					font-weight: bolder;
					margin-top: 0.238888rem;
					margin-bottom: 0.138888rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					width: 100%;
					text-align: center;
				}
				img {
					width: 2.013888rem;
					height: 2.013888rem;
					margin-bottom: 0.138888rem;
				}
				.newprice {
					color: #d23555;
					font-size: 0.388888rem;
					margin-bottom: 0.069444rem;
				}
				.oldprice {
					color: #7b7f82;
					text-decoration: line-through;
					margin-bottom: 0.069444rem;
				}
			}
		}
	}
</style>