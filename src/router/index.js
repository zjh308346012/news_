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
   }
]

const router = new VueRouter({
  routes
})

export default router
