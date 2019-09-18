import Vue from 'vue'
import Router from 'vue-router'
import shiyan from './views/shiyan.vue'
import Home from './views/z-home.vue'
import Cfoot from './components/C-foot.vue'

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
    }, 
    {
      path: '/shiyan',
      name: 'shiyan',
      component: shiyan
    },
    
  ]
})
