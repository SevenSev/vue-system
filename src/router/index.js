import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'

import Homepage from '@/components/homepage'

import Sidebar from '@/components/sideBar'

Vue.use(Router)

//路由配置文件
//统一配置成命名路由，方便调试
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path: '/homePage',
    	name: 'Homepage',
    	component: Homepage
    },
    {
      path:'/sideBar',
      name:'Sidebar',
      component:Sidebar
    }
  ]
})
