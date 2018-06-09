<template>
  <ul class="bottomNav">
  	<li>
  		<div class="nav_index_icon_active"></div>
  		<span>
  			首页
  		</span>
  	</li>
  	<li>
  		<div class="nav_car_icon"></div>
  		<span>
  			购物车
  		</span>
  	</li>
  	<li>
  		<div class="nav_my_icon"></div>
  		<span>
  			我的
  		</span>
  	</li>
  </ul>
</template>
 
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style scoped lang="less">
	.bottomNav{
		position: fixed;
		z-index: 999;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		background: white;
		li{
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 0.388888rem;
			padding-top: 0.069444rem;
			span{
				margin: 0.069444rem 0;
			}
			.nav_index_icon_active{
				background: url(./home2_bak.png) no-repeat;
				background-size: 0.666666rem 0.666666rem;
				width: 0.666666rem;
				height: 0.666666rem;
			}
			.nav_index_icon{
				background: url(./home1.png) no-repeat;
				background-size: 0.666666rem 0.666666rem;
				width: 0.666666rem;
				height: 0.666666rem;
			}
			.nav_car_icon{
				background: url(cart1.png) no-repeat;
				background-size: 0.666666rem 0.666666rem;
				width: 0.666666rem;
				height: 0.666666rem;
			}
			.nav_car_icon_active{
				background: url(cart2.png) no-repeat ;
				background-size: 0.666666rem 0.666666rem;
				width: 0.666666rem;
				height: 0.666666rem;
			}
			.nav_my_icon{
				background: url(my1.png) no-repeat ;
				background-size: 0.666666rem 0.666666rem;
				width: 0.666666rem;
				height: 0.666666rem;
			}
			.nav_my_icon_active{
				background: url(my2.png) no-repeat ;
				background-size: 0.666666rem 0.666666rem;
				width: 0.666666rem;
				height: 0.666666rem;
			}
		}
	}
</style>