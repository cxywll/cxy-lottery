import Vue from 'vue'
import Router from 'vue-router'
import Stype from './views/S-type.vue'
import Home from './views/z-home.vue'
<<<<<<< HEAD
import Ctrend from './views/C-trend.vue'
import Login from './views/C-login.vue'
=======

import Ctrend from './views/C-trend.vue'

import Cfoot from './components/C-foot.vue'
>>>>>>> cc0a59a9370fd4f4918b1e669d6c2a81d8600f07
import touzhu from './views/j-touzhu.vue'
// import alert from './components/alert.vue'
import point from './views/y-point.vue'
import lotteryRule from './views/f-lotteryRule.vue'
<<<<<<< HEAD
=======
import Login from './views/C-login.vue'
>>>>>>> cc0a59a9370fd4f4918b1e669d6c2a81d8600f07

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
