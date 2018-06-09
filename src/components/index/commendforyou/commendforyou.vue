
<template>
  <ul class="computer">
  	<li><span>———————————————————————————————————————— </span><p class="title"> &nbsp;为您推荐&nbsp; </p><span> ————————————————————————————————————</span></li>
  	<li class="list">
  		<div class="listitem" v-for = "(data,index) of commendArr" :key="index">
				<img v-lazy="data.image" alt="" />
				<p class="title">{{data.title}}</p>
				<span>{{data.price}}</span>
  		</div>
  		<!--<div class="listitem">
				<img src="../computer/1.jpg" alt="" />
				<p class="title">ONLY冬装新品雪纺拼接流苏要带长宽连衣裙</p>
				<span>$399.00</span>
  		</div>
  		<div class="listitem">
				<img src="../computer/1.jpg" alt="" />
				<p class="title">ONLY冬装新品雪纺拼接流苏要带长宽连衣裙</p>
				<span>$399.00</span>
  		</div>
  		<div class="listitem">
				<img src="../computer/1.jpg" alt="" />
				<p class="title">ONLY冬装新品雪纺拼接流苏要带长宽连衣裙</p>
				<span>$399.00</span>
  		</div>-->
  	</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      commendArr: []
    };
  },
  created() {
    const commendURL =
      this.config.reqdomain +
      this.config.recommend +
      "?token=" +
      this.config.token;
    this.$http(commendURL, "get", data => {
      this.commendArr = data.data.data;
      console.log(this.commendArr);
    });
  }
};
</script>
<style scoped lang="less">
.computer {
  display: flex;
  flex-direction: column;
  background: #efefef;
  margin-bottom: 1.180555rem;
  & > li:first-child {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0.916666rem;
    /*line-height: 0.916666rem;*/
    .title {
      width: 1.944444rem;
      flex-shrink: 0;
      text-align: center;
      color: #500cfd;
      font-size: 0.361111rem;
    }
    span {
      flex-grow: 1;
      overflow: hidden;
      color: #500cfd;
    }
  }
  .list {
    width: 100%;
    p {
      font-size: 0.361111rem;
      margin: 0.138888rem 0.277777rem;
      line-height: 0.555555rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    span {
      color: red;
      margin-bottom: 0.138888rem;
    }
    img {
      margin: 0.069444rem 0;
      width: 100%;
    }
    .listitem {
      width: 49%;
      margin-bottom: 0.208333rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: white;
    }
    .listitem:nth-child(2n + 1) {
      float: left;
      /*在合适的位置清除浮动*/
    }
    .listitem:nth-child(2n) {
      float: right;
    }
    .listitem:nth-child(3) {
      clear: left;
    }
  }
}
</style>
