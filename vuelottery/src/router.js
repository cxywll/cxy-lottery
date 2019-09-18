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
      name: 'Cfoot',
      component: Cfoot
<<<<<<< HEAD
    },
    {
      path: '/shiyan',
      name: 'shiyan',
      component: shiyan
=======
>>>>>>> e384c4d787334ac309a08d23be89c4a05a597277
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
  ]
})
