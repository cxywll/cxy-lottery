import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/z-home.vue'
<<<<<<< HEAD
import Ctrend from './views/C-trend.vue'
=======
import Cfoot from './components/C-foot.vue'
<<<<<<< HEAD
import touzhu from './views/j-touzhu.vue'
import alert from '@/components/alert.vue'
=======
<<<<<<< HEAD
import point from './views/y-point.vue'
=======
import lotteryRule from './views/f-lotteryRule.vue'
>>>>>>> d3a3bde80ef07a59c8dde7835a29d8854c886230

>>>>>>> c872833555fa0e2ed2b4e36bd134357c412febb7
>>>>>>> 9bb1ce259c0f6635fe1ced6dac68a092c7e074db
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'home',
      component: Home
    },
    // 走势图
    {
      path:'/trend',
      name:'Ctrend',
      component:Ctrend
    }
=======
      name: 'home',
      component: Home
    },
    {
      path: '/foot',
      name: 'Cfoot',
      component: Cfoot
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }, 
=======
<<<<<<< HEAD
>>>>>>> 9880fcab38d9cff0ee860b1de6baf38c0d498ab3
    },
>>>>>>> db3f3413e92ba180b28b5c1324f8f41b4a15d96d
    {
      path: '/shiyan',
      name: 'shiyan',
      component: shiyan
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },
    
=======
=======
>>>>>>> e384c4d787334ac309a08d23be89c4a05a597277
>>>>>>> 9880fcab38d9cff0ee860b1de6baf38c0d498ab3
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/touzhu',
      name: 'touzhu',
      component: touzhu
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
=======
<<<<<<< HEAD
      path: '/point',
      name: 'point',
      component: point
    }
=======
      path:'/lotteryRule',
      name:'Rule',
      component:lotteryRule
    },
>>>>>>> db3f3413e92ba180b28b5c1324f8f41b4a15d96d
>>>>>>> c872833555fa0e2ed2b4e36bd134357c412febb7
>>>>>>> 9bb1ce259c0f6635fe1ced6dac68a092c7e074db
>>>>>>> d3a3bde80ef07a59c8dde7835a29d8854c886230
  ]
})
