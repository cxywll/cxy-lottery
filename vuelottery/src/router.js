import Vue from 'vue'
import Router from 'vue-router'
import Stype from './views/S-type.vue'
import Cfoot from './components/C-foot.vue'
import Home from './views/z-home.vue'
import Ctrend from './views/C-trend.vue'
import touzhu from './views/j-touzhu.vue'
// import alert from './components/alert.vue'
import point from './views/y-point.vue'
import lotteryRule from './views/f-lotteryRule.vue'
import Login from './views/C-login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 注册
    {
      path: '/foot',
      name: 'Cfoot',
      component: Cfoot
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    // 走势图
    {
      path:'/trend',
      name:'Ctrend',
      component:Ctrend
    },
    // 投注列表
    {
      path: '/touzhu',
      name: 'touzhu',
      component: touzhu
    },
    // 兑换
    {
      path: '/point',
      name: 'point',
      component: point
    },
    // 玩法规则
    {
      path:'/lotteryRule',
      name:'Rule',
      component:lotteryRule
    },
    // 彩票类型选择
    {
      path:'/Stype',
      name: 'Stype',
      component: Stype
    }
  ]
})
