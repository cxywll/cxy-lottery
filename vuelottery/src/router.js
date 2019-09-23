import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import shiyan from './views/shiyan.vue'
import Stype from './views/S-type.vue'
import Home from './views/z-home.vue'
import Cfoot from './components/C-foot.vue'
=======
import Home from './views/z-home.vue'
<<<<<<< HEAD
import Cfoot from './components/C-foot.vue'  
=======
import Ctrend from './views/C-trend.vue'
import touzhu from './views/j-touzhu.vue'
// import alert from './components/alert.vue'
>>>>>>> 53a89600d3d63b6dd9723b562d9099bcff38d2c0
import point from './views/y-point.vue'
import lotteryRule from './views/f-lotteryRule.vue'
import Login from './views/C-login.vue'

<<<<<<< HEAD
=======
>>>>>>> b92adc91a89ef102fb9ec3a2ef1f7efa42efe72d
Vue.use(Router)

>>>>>>> 53a89600d3d63b6dd9723b562d9099bcff38d2c0
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
<<<<<<< HEAD
    },{
      path: '/shiyan',
      name: 'shiyan',
      component: shiyan
=======
    }, 
    {
      path: '/shiyan',
      name: 'shiyan',
      component: shiyan
=======
      path:'/login',
      name:'Login',
      component:Login
>>>>>>> b92adc91a89ef102fb9ec3a2ef1f7efa42efe72d
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
>>>>>>> 53a89600d3d63b6dd9723b562d9099bcff38d2c0
    },
    // {
    //   path: '/alert',
    //   name: 'alert',
    //   component: alert
    // },
    // 兑换
    {
      path: '/point',
      name: 'point',
      component: point
    },
<<<<<<< HEAD
=======
    // 玩法规则
>>>>>>> 53a89600d3d63b6dd9723b562d9099bcff38d2c0
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
