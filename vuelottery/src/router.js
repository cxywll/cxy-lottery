import Vue from 'vue'
import Router from 'vue-router'
import Stype from './views/S-type.vue'
import Home from './views/z-home.vue'
<<<<<<< HEAD
import Cfoot from './components/C-foot.vue'  
=======
>>>>>>> 6d060c8ae89ad737a68824ee8d469de054109f3f
import Ctrend from './views/C-trend.vue'
import Login from './views/C-login.vue'
import touzhu from './views/j-touzhu.vue'
<<<<<<< HEAD
// import alert from './components/alert.vue'
=======
>>>>>>> 6d060c8ae89ad737a68824ee8d469de054109f3f
import point from './views/y-point.vue'
import lotteryRule from './views/f-lotteryRule.vue'
import Recharge from './views/c-recharge.vue'

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
<<<<<<< HEAD
      path: '/foot',
      name: 'Cfoot',
      component: Cfoot
    }, 
    // {
    //   path: '/shiyan',
    //   name: 'shiyan',
    //   component: shiyan
    // },
    {
=======
>>>>>>> 6d060c8ae89ad737a68824ee8d469de054109f3f
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
    },
    // 充值
    {
      path:'/recharge',
      name: 'Recharge',
      component: Recharge
    }
  ]
})
