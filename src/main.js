import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Vant from 'vant'

import 'vant/lib/index.css'

import axios from "axios";

Vue.prototype.$axios = axios;

Vue.use(Vant)

router.beforeEach((to, from, next) => {
  
  const hasToken = localStorage.getItem('token');

if(to.name==='Index'){
 

  if(hasToken){

    return next()

  }else{
   return router.replace('/login')
  }
}
  next();
  
})

export default axios.create({
  baseURL:'http://127.0.0.1:3000',
  
})



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
