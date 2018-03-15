import Vue from 'vue'
import Router from 'vue-router'

//登录页
import Login from '@/components/login'

//系统容器
import Layout from '@/components/layout'
//主页
import Homepage from '@/components/homepage'

//图标页
import Icon from '@/components/icon'  

//文档页
import Document from '@/components/document'

//表单页
import Form from '@/components/form'

//组件页
import Component from '@/components/component'

//用户管理
import Monitor from '@/components/monitor' 

//柱状图
import Bar from '@/components/bar'

//折线图
import Line from '@/components/line'

//饼图
import Pie from '@/components/pie'

//table页
import Table from '@/components/table'

//权限管理
import Authority from '@/components/authority'
//创建配置文件管理组件的引入

Vue.use(Router)

//路由配置文件
//统一配置成命名路由，方便调试
export default new Router({
  routes: [
  //登录
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    //系统容器
    {
      path:'/layout',
      name:'Layout',
      component:Layout,
      children:[
      //首页
        {
          path:'homepage',
          name:'Homepage',
          component:Homepage
        },
        //图标
        {
        path: 'icon',
        name: 'Icon',
        component: Icon
      },
      //文档
      {
        path:'file',
        name:'Document',
        component:Document
      },
      //表单页
      {
        path:'form',
        name:'Form',
        component:Form
      },
      //组件页
      {
        path:'component',
        name:'Component',
        component:Component
      },
      //用户管理
      {
        path:'monitor',
        name:'Monitor',
        component:Monitor
      },
      //权限管理
      {
        path:'authority',
        name:'Authority',
        component:Authority
      },
      //柱状图
      {
        path:'bar',
        name:'Bar', 
        component:Bar
      },
      //折线图
      {
        path:'line',
        name:'Line',
        component:Line
      },
      //饼图
      {
        path:'pie',
        name:'Pie',
        component:Pie
      },
      //table页
      {
        path:'table',
        name:'Table',
        component:Table
      }    
      ]
    }
    
  ]
})
