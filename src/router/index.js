import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '@/views/Auth/Login'
//登录页面

import Register from '@/views/Auth/Register'
//注册页

import Personal from '@/views/Personal/Index'
//个人中心页

import Edit from '@/views/Personal/Edit'
//编辑资料页

import Focus from '@/views/Personal/Focus'

//我的关注页

import Follow from '@/views/Personal/Follow'

//我的跟帖页

import Collect from '@/views/Personal/Collect'

//我的收藏页

import Indexs from '@/views/News/Indexs'

//新闻主页

import Addfans from '@/views/Personal/Addfans'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
   {
     path:'/index',
     name:'Index',
     component:Personal
   },
   {
     path:'/edit',
     name:'Edit',
     component:Edit
   },
   {
     path:'/focus',
     name:'Focus',
     component:Focus
   },
   {
     path:'/follow',
     name:'Follow',
     component:Follow
   },
   {
     path:'/collect',
     name:'Collect',
     component:Collect
   },
   {
     path:'/indexs',
     name:'Indexs',
     component:Indexs
   },
   {
     path:'/addfans',
     name:'Addfans',
     component:Addfans
   }
]

const router = new VueRouter({
  routes
})

export default router
