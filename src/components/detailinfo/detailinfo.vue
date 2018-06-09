<template>
	<div class="detailinfo">
		<h6><span>商品名:</span>{{detailinfo.title}}</h6>
		<h6><span>价格:</span>{{detailinfo.price}}</h6>
		<h6><span>运费:</span>{{detailinfo.freight}}</h6>
		<h6><span>描述:</span>{{detailinfo.bodys}}</h6>
	</div>
</template>

<script>
	export default {
		name: 'detailinfo',
		data() {
			return {
				detailinfo:{}
			}
		},
		created(){
			const detailURL = this.config.reqdomain + this.config.detailinfo + this.$route.query.cid + "&type=details&token=" + this.config.token
			this.$http(detailURL, "get", (data) => {
				this.detailinfo = data.data.data
				console.log(this.detailinfo)
			})
		}	
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.detailinfo {
		width: 100%;
		margin-top: 0.416666rem;
		h6{
			height: 0.694444rem;
			line-height: 0.694444rem;
			font-size: 0.444444rem;
			color: #ADB0B2;
			span{
				color: #323232;
				margin-right: 0.138888rem;
				margin-left: 0.277777rem;
			}
		}
	}
</style>