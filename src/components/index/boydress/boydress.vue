
<template>
  <ul class="boydress" v-if="boyData.items">
  	<li><span>———— </span><span> &nbsp;{{boyData.title}}&nbsp; </span><span> ————</span></li>
  	<li>
  		<div class="left" v-for="(item,index) in boyData.items.slice(0,2)">
  			<h6>{{item.title}}</h6>
  			<p>火爆开售</p>
  			<img :src="item.image"/>
  		</div>
  		<!--<div class="right">
  			<h6>波司登秋冬季加绒加厚打底裤</h6>
  			<img src="./1.jpg"/>
  		</div>-->
  	</li>
  	<li>
  		<ul v-for="(item,index) in boyData.items.slice(2,6)">
  			<li class="name">{{item.title}}</li>
  			<img :src="item.image" alt=""/>
  			<li class="newprice">$10</li>
  			<li class="oldprice">$20</li>
			</ul>
  	</li>
  </ul>
</template>
 
<script>
  export default {
    data() {
      return {
        
      }
    },
    props:{
    	boyData:{
    		type:Object,
    		required:true
    	}
    }
  }
</script>
<style scoped lang="less">
	.boydress{
		width: 100%;
		overflow: hidden;
		display:flex;
		flex-direction: column;
		&>li:first-child{
			align-self: center;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height:0.833333rem;
			border-bottom: 1px solid #efefef;
			color: #f2c732;
			font-size: 0.388888rem;
			
		}
		&>li:nth-child(2){
			display: flex;
			.left{
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 50%;
				border-right: 1px solid #efefef;
				border-bottom: 1px solid #efefef;
				h6{
					font-size: 0.347222rem;
					font-weight: bolder;	
					width: 90%;
					margin-top: 0.069444rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;	
				}
				p{
					color: #7b7f82;
					margin: 0.099444rem 0;
					font-size: 0.305555rem;
				}
				img{
					width: 100%;
					/*margin-bottom: 0.027777rem;*/
				}
			}
				
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;	
				align-items: center;
				h6{
					font-size: 0.347222rem;
					font-weight: bolder;		
				}
				p{
					color: #7b7f82;
					margin: 0.069444rem 0;
				}
			}
		}
		&>li:last-child{
			display: flex;
			flex-direction: row;
			ul{
				flex-grow: 1;
				border-right: 1px solid #efefef;
				display: flex;
				flex-direction: column;
				width: 25%;
				/*justify-content: space-around;*/
				align-items:center;
				.name{
					width: 90%;
					font-size: 0.361111rem;
					font-weight: bolder;
					margin-top: 0.238888rem;
					margin-bottom: 0.138888rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				img{
					width: 2.013888rem;
					height: 2.013888rem;
					margin-bottom: 0.138888rem;
				}
				.newprice{
					color: #d23555;
					font-size: 0.388888rem;
					margin-bottom: 0.069444rem;
				}
				.oldprice{
					color: #7b7f82;
					text-decoration: line-through;
					margin-bottom: 0.069444rem;
					
				}
			}
		}
		
	}
</style>