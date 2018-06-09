import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/components/index/index'
//import classify from '@/components/classify/classify'
Vue.use(Router)
//                                [依赖的模块数组,回调函数,模块名]      
const INDEX = r => require.ensure([],()=>r(require('@/components/index/index')),"INDEX")
const CLASSIFY = r => require.ensure([],()=>r(require('@/components/classify/classify')),"CLASSIFY")
const DETAIL = r => require.ensure([],()=>r(require('@/components/detailinfo/detail')),"DETAIL")
const DETAILINDEX = r => require.ensure([],()=>r(require('@/components/detailinfo/detailindex')),"DETAILINDEX")
const DETAILINFO = r => require.ensure([],()=>r(require('@/components/detailinfo/detailinfo')),"DETAILINFO")
const DETAILTALK = r => require.ensure([],()=>r(require('@/components/detailinfo/detailtalk')),"DETAILTALK")
const REGISTER = r => require.ensure([],()=>r(require('@/components/index/login/login')),"REGISTER")
const PATHS='/';

export default new Router({
mode:"history",//去掉地址上面的#号,
  routes: [
  	{
  		path:PATHS,
  		redirect:"/index"
  	},
    {
      path: PATHS+"index",
      name: 'index',
      component: INDEX,
      meta: { title: '首页' }
    },
    {
      path: PATHS+"register",
      name: 'register',
      component: REGISTER,
      meta: { title: '注册' }
    },
    {
      path: PATHS+"classify",
      name: 'classify',
      component: CLASSIFY,
      meta: { title:'分类'}
    },
    {
      path: "/detail/",
      name: 'detail',
      component: DETAIL,
      meta: { title:'详情'},
      children:[
      	{ path: '/detail', redirect: '/detail/detailindex' },
      	{ path: '/detail/detailindex', component: DETAILINDEX },
      	{ path: '/detail/detailinfo', component: DETAILINFO },
      	{ path: '/detail/detailtalk', component: DETAILTALK },
      ]
    },
    {
      path: "*",
      redirect:{name:"index"}
    }
  ]
})
