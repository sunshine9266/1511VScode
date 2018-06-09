<template>
	<div class="index">
    <pull-to :top-load-method="refresh">
		<div class="header" :class="changeColor?'blueColor':''">
			<router-link :to='{name:"classify",params:{fromPage:"/index"}}'><img class="list" src="./class.png" /></router-link>
			<div class="serarchContainer">
				<img src="./search.png" />
				<input type="text" class="searchInput" placeholder="输入喜欢的宝贝名称" />
			</div>
			<img src="./my.png" @click="goLogin()" />
		</div>
		<div class="swiperCointer">
			<swiper :test='listImg'></swiper>
		</div>
		<div class="drakline"></div>
		<ul class="biglist">
			<router-link v-for="(data) in typeList" :key="data.cid" :to="{name:'classify',params:{listId:data.cid}}" tag="li">
				<img :src="data.image" />
				<p>{{data.title}}</p>
			</router-link>
		</ul>
		<div class="drakline"></div>
		<!--潮流女装组件-->
		<girldress :girlData="girlObj"></girldress>
		<div class="drakline"></div>
		<!--品牌男装组件-->
		<boydress :boyData="boyObj"></boydress>
		<div class="drakline"></div>
		<!--办公电脑组件-->
		<computer :computerData="computerObj"></computer>
		<!--为你推荐模块组件-->
		<commendforyou></commendforyou>
		<bottom-nav></bottom-nav>
    </pull-to>
	</div>
</template>

<script>
import swiper from "../common/swiper";
import girldress from "./girldress/girldress";
import boydress from "./boydress/boydress";
import computer from "./computer/computer";
import commendforyou from "./commendforyou/commendforyou";
import bottomNav from "./bottomnav/bottomNav";
import PullTo from "vue-pull-to";
export default {
  name: "index",
  data() {
    return {
      changeColor: false,
      listImg: [],
      typeList: [],
      girlObj: {},
      boyObj: {},
      computerObj: {}
    };
  },
  created() {
    console.log("===================");
    const sliderURL =
      this.config.reqdomain +
      this.config.slider +
      "?token=" +
      this.config.token;
    this.mypromise("get", sliderURL)
      .then(data => {
        console.log(JSON.parse(data));
      })
      .catch(err => {
        console.log(err);
      });

    //首页轮播的图片素材
    this.$http(sliderURL, "get", data => {
      this.listImg = data.data.data;
    });
    //首页导航接口
    const topNavUrl =
      this.config.reqdomain +
      this.config.topNav +
      "?token=" +
      this.config.token;
    this.$http(topNavUrl, "get", data => {
      this.typeList = data.data.data;
    });
    //首页大分类接口
    const shoppingTypeUrl =
      this.config.reqdomain +
      this.config.shoppingType +
      "?token=" +
      this.config.token;
    this.$http(shoppingTypeUrl, "get", data => {
      this.girlObj = data.data.data[0];
      this.boyObj = data.data.data[1];
      this.computerObj = data.data.data[2];
    });
  },
  mounted() {
    document.addEventListener("scroll", this.changeColorFn);
  },
  methods: {
    changeColorFn() {
      var lengths = document.documentElement.scrollTop;
      if (lengths >= 150) {
        //				console.log("再来")
        this.changeColor = true;
        //					document.removeEventListener("scroll",this.changeColorFn)
      } else {
        this.changeColor = false;
      }
    },
    refresh(loaded) {
      loaded("done");
    },
    goLogin() {
      console.log("register");
      this.$router.push({ name: "register" });
    }
  },
  //定义这个sweiper对象
  components: {
    swiper,
    girldress,
    boydress,
    computer,
    commendforyou,
    bottomNav,
    PullTo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("./../../common/less/mixin.less");
input::-webkit-input-placeholder {
  color: white;
  font-size: 0.388888rem;
}
.blueColor {
  background: linear-gradient(
    to bottom,
    #eb1625 0%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
}
.index {
  width: 100%;
  overflow: hidden;
}
.header {
  display: flex;
  height: 0.888888rem;
  background: linear-gradient(
    rgba(1, 1, 1, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  a {
    align-self: center;
    img {
      margin: 0 0.188888rem;
      height: 0.694444rem;
      width: 0.694444rem;
    }
  }
  img {
    margin: 0 0.188888rem;
    height: 0.694444rem;
    width: 0.694444rem;
  }
  .serarchContainer {
    align-self: center;
    flex-grow: 1;
    border-radius: 0.111111rem;
    background: rgba(255, 255, 255, 0.5);
    height: 0.704444rem;
    display: flex;
    img {
      margin-top: 0.101111rem;
      margin-left: 0.069444rem;
      width: 0.516666rem;
      height: 0.516666rem;
    }
    .searchInput {
      align-items: center;
      background: transparent;
      border: none;
      height: 0.704444rem;
      text-indent: 0.138888rem;
      width: 85%;
      font-size: 0.388888rem;
      color: white;
    }
  }
}
.swiperCointer {
  width: 100%;
  height: 4.833333rem;
  img {
    width: 100%;
    height: 100%;
  }
}

.drakline {
  height: 0.208333rem;
  background: #efefef;
}

.biglist {
  height: 2.152777rem;
  background: white;
  .flexbox(flex,row,space-around,space-around);
  /*display: flex;
		flex-direction: row;
		justify-content: space-around;*/
  li {
    width: 25%;
    .flexbox(flex,column,space-around);
    /*display:flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;*/
    text-align: center;
    color: #7b7f82;
    font-size: 0.388888rem;
    img {
      height: 1.083333rem;
      width: 1.083333rem;
    }
  }
}
</style>
