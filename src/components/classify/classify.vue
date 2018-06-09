<!--结构-->
<template>
	<div class="classify">
		<ul class="topSearch">
			<img class="back" src="../../../static/back.png" alt="" @click="goBack"/>
			<li class="serarchContainer"><input type="search" name="" class="searchInput" placeholder="请输入宝贝类别" value="" /></li>
		</ul>
		<div class="classifyContainer">
			<div class="wrapper" ref="wrapper">
				<ul class="lefttype" ref="lefttype">
					<li v-for="item in leftMenu" :class="{activeLi:listId==item.cid}" @click="changeRightList(item.cid)">{{item.title}}</li>
				</ul>
			</div>
			<div class="rightinfo" ref="rightinfo">
				<div class="content">
					<div class="rightinfotype" v-for='(item,index) in rightMenu' :key="index">
						<h5>{{item.title}}</h5>
						<div class="typecontainer">
							<dl v-for="data in item.goods" @click="goDetail(data.gid)">
								<dt><img v-lazy="data.image"/></dt>
								<dd>{{data.title}}</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<!--行为-->
<script>
	import BScroll from 'better-scroll';
	export default {
		data() {
				return {
					changeColor: false,
					leftMenu: [],
					rightMenu: [],
					listId: 492, //控制左侧被选中栏目的id
					leftmenunum:0,
					prevPage:""
				}
			},
			created() {
				this.prevPage = this.$route.params.fromPage;
				//		控制左侧被选中栏目的id
				this.listId = this.$route.params.listId ? this.$route.params.listId : 492;
				//		左侧菜单请求
				const leftMenuURL = this.config.reqdomain + this.config.leftMenu + "?token=" + this.config.token;
				this.$http(leftMenuURL, "get", (data) => {
						this.leftMenu = data.data.data;
						this.leftmenunum = this.leftMenu.length;

//						setTimeout(()=>{
//						num  是rem值  变成px   1rem = 根元素的fontSize值的大小
						var num  = this.leftmenunum * 1.041666;
						console.log(this.leftmenunum)
						var strnum =  document.getElementsByTagName("html")[0].style.fontSize;
						var lastindex = strnum.substring(0,strnum.length-2);
						this.$refs.lefttype.style.height = this.leftmenunum*1.041666*lastindex+this.leftmenunum+"px";
//										},150)
						this.$nextTick(() => {
							//是在下一次dom更新循环结束之后，数据使用之后使用newtTick执行回调函数里面的东西
							console.log(1111)
							this.scroll = new BScroll(this.$refs.wrapper);
							this.scroll1 = new BScroll(this.$refs.rightinfo);
						});
					})
					//右侧
				const rightMenuURL = this.config.reqdomain + this.config.rightMenu + "?cid=" + this.listId + "&token=" + this.config.token;
				this.$http(rightMenuURL, "get", (data) => {
					this.rightMenu = data.data.data;
					if(data.data.data == "没有数据") {
						this.$toast("没有数据");
					} else {
						this.$toast("no");
					}
				})
			},
			methods: {
				//点击改变右侧列表的方法
				changeRightList(id) {
					const rightMenuURL = this.config.reqdomain + this.config.rightMenu + "?cid=" + id + "&token=" + this.config.token;
					this.$http(rightMenuURL, "get", (data) => {
						this.listId = id;
						if(data.data.data == "没有数据") {
							this.$toast("没有数据");
						}
						return this.rightMenu = data.data.data;
					})
				},
				goDetail(id){
					console.log(id)
					this.$router.push({
			          path: '/detail',
			          query: {
			            cid: id,
			            fromPage:"/classify"
			          }
			        })
				},
				goBack(){
					this.$router.push({path:this.prevPage})
				}
			}
	}
</script>
<!--样式-->
<style scoped="scoped" lang="less">
	input::-webkit-input-placeholder {
		color: #757575;
		font-size: 0.388888rem;
		text-indent: 5px;
		letter-spacing: 2px;
	}
	.classify {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		padding-top: 1.319444rem;
		.topSearch {
			height: 1.319444rem;
			display: flex;
			align-items: center;
			width: 100%;
			position: fixed;
			left: 0;
			top: 0;
			background: white;
			.back {
				width: 0.833333rem;
				margin-right: 0.277777rem;
				align-self: center;
			}
			.serarchContainer {
				flex: 1;
				/*border: 1px solid red;*/
				.searchInput {
					width: 90%;
					height: 0.972222rem;
					border: 1px solid #efefef;
					border-radius: 0.069444rem;
				}
			}
		}
		.classifyContainer {
			display: flex;
			height: 16.458333rem;
			background: #efefef;
			::-webkit-scrollbar{
				width: 0;
			}
			.wrapper {
				flex-shrink: 0;
				height: 100%;
				overflow: hidden;
				.lefttype {
					width: 2.291666rem;
					background: white;
					/*min-height: 950px;*/
					overflow-y: auto;
					/*height: 1150px;*/
					li {
						height: 1.041666rem;
						font-size: 0.444444rem;
						line-height: 1.041666rem;
						width: 100%;
						text-align: center;
						letter-spacing: 0.041666rem;
						border-top: 1px solid #efefef;
						border-left: 5px solid transparent;
						text-indent: -5px;
					}
					.activeLi {
						background: #efefef;
						border-left: 5px solid red;
						color: white;
						border-radius: 5px 0 0 5px;
					}
				}
			}
			.rightinfo {
				flex-grow: 1;
				padding: 0 0.347222rem;
				height: 100%;
				overflow:hidden;
				.content{
					min-height:1000px;
					.rightinfotype {
						display: flex;
						flex-direction: column;
						h5 {
							align-self: flex-start;
							font-size: 0.444444rem;
							color: #373737;
							margin-bottom: 0.347222rem;
							margin-top: 0.277777rem;
						}
						.typecontainer {
							display: flex;
							flex-wrap: wrap;
							width: 100%;
							justify-content: flex-start;
							background: white;
							dl {
								width: 1.597522rem;
								margin: 0.361111rem;
								/*height: 1.597222rem;*/
								/*border: 1px solid red;*/
								img {
									height: 1.597222rem;
									width: 1.597222rem;
								}
								dd {
									width: 100%;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									font-size: 0.305555rem;
									text-align: center;
								}
							}
						}
					}
				}
			}
		}
	}
</style>