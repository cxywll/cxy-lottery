import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/z-home.vue'
import Ctrend from './views/C-trend.vue'
import touzhu from './views/j-touzhu.vue'
import alert from './components/alert.vue'
import point from './views/y-point.vue'
import lotteryRule from './views/f-lotteryRule.vue'
import Login from './views/C-login.vue'
import Register from './views/C-register.vue'

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
    // 登录
    {
<<<<<<< HEAD
      path: '/foot',
      name: 'Cfoot',
      omponent: Cfoot
    },
    {
      path: '/shiyan',
      name: 'shiyan',
      component: shiyan
=======
      path:'/login',
      name:'Login',
      component:Login
    },
    // 注册
    {
      path:'/register',
      name:'register',
      component:Register
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
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/point',
      name: 'point',
      component: point
>>>>>>> 1b005e427db25d0fa6abd9c2fd5e454df47cb58c
    },
    {
      path:'/lotteryRule',
      name:'Rule',
      component:lotteryRule
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 1b005e427db25d0fa6abd9c2fd5e454df47cb58c
  ]
})
