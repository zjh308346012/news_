import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '@/views/Auth/Login'

import Register from '@/views/Auth/Register'

import Personal from '@/views/Personal/Index'

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
   }
]

const router = new VueRouter({
  routes
})

export default router
