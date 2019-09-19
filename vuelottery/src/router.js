import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/z-home.vue'
import Ctrend from './views/C-trend.vue'
<<<<<<< HEAD
import touzhu from './views/j-touzhu.vue'
import alert from './components/alert.vue'
=======
=======
import Cfoot from './components/C-foot.vue'
import touzhu from './views/j-touzhu.vue'
import alert from '@/components/alert.vue'

>>>>>>> d874944a38e13917d5dcfa1ea7778436d566e57a
import point from './views/y-point.vue'
import lotteryRule from './views/f-lotteryRule.vue'
import Login from './views/C-login.vue'

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
mode: 'history',
base: process.env.BASE_URL,
routes: [{
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

{
	path: '/',
	name: 'home',
	component: Home
},
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
},
{
path: '/lotteryRule',
name: 'Rule',
component: lotteryRule
},
]
})
=======
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
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/point',
      name: 'point',
      component: point
    },
    {
      path:'/lotteryRule',
      name:'Rule',
      component:lotteryRule
    },
  ]
})
>>>>>>> deccd22a3f3cde8a8ed556d1fac9e872f30a6eef
