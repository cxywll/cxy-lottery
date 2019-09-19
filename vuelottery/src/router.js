import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/z-home.vue'
import Ctrend from './views/C-trend.vue'

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
    // 走势图
    {
      path:'/trend',
      name:'Ctrend',
      component:Ctrend
    }
  ]
})
