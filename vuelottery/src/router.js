import Vue from 'vue'
import Router from 'vue-router'
import shiyan from './views/shiyan.vue'
import Home from './views/z-home.vue'
import Cfoot from './components/C-foot.vue'
import lotteryRule from './views/f-lotteryRule.vue'

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
      path:'/lotteryRule',
      name:'Rule',
      component:lotteryRule
    },
>>>>>>> db3f3413e92ba180b28b5c1324f8f41b4a15d96d
  ]
})
