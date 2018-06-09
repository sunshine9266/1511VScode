<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for='(data,index) in test' :key="index">
    	<img :src="data.image"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    props:['test'],
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          autoplay: true,
          effect:"fade",
					pagination: {
						el:'.swiper-pagination',
						clickable: true
					},
					loop: true
        }
      }
    },
    mounted() {
    }
  }
</script>
<style scoped="">
	img{
		width: 100%;
		height: 4.833333rem;
	}
</style>