import Vue from 'vue'
import App from './App'
//导入全局重置样式
import {apiconfig} from "./common/js/apiconfig"
Vue.prototype.config = apiconfig
import router from './router'
//防止点击穿透事件的发生
import fastclick from 'fastclick'
import {myAjax} from './common/js/myajax'
//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//导入图片懒加载插件
import VueLazyload from 'vue-lazyload'
import "./common/less/reset.less"
import Toast from './components/common/toast/toast'
import {$http} from './common/js/testpromise'
Vue.use(Toast);
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: './static/nopic.png',
	loading: './static/timgs.gif',
	attempt: 3
})
//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
fastclick.attach(document.body)
//将自己封装的ajax的方法放到实例的原型上
Vue.prototype.$http = myAjax

Vue.prototype.mypromise = $http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
