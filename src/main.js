import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Vant, { Toast } from 'vant'

import 'vant/lib/index.css'

import axios from "axios";


Vue.prototype.$axios = axios;

Vue.use(Vant)


//路由守卫 to是要去那个页面,from是从那个页面而来 next是一个放行函数
router.beforeEach((to, from, next) => {
  
  const pageEdit=['Index','Edit']
  const hasToken = localStorage.getItem('token');
    //在这里是否跳转到个人中心页面
    if(pageEdit.indexOf(to.name) != -1){
 
  if(hasToken){
    //然后判断是否有token

    return next()
    //如果有 就放行 这里使用到return 是为了阻止后面的语句继续进行

  }else{
    //如果没有就跳到登录页
   return router.replace('/login')
  }
}
  next();
  //如果不是跳到个人中心页 要放行 不然页面是不会显示的
  
})


axios.defaults.baseURL='http://127.0.0.1:3000';
//封装axios的基准路径


axios.interceptors.response.use(res=>{
   //这里是服务器数据响应时候的拦截器,因为终端只能判断有没有token 而不能判断token正不正确
  const reg = /^4\d{2}$/
  //正则表达式 让状态码(不是真的状态码 跟status有区别)

  if(reg.test(res.data.statusCode)){
    //正则进行状态码验证 如果true 那么就进行弹窗 
     
    Toast.fail(res.data.message || '系统错误')

  }

  if(res.data.message=='用户信息验证失败'){
         //如果res.data.message的用户信息验证失败的话
    localStorage.clear();
    //清除所有的localStorage 防止有人恶心利用假的token进入中心页面

    router.replace('/login')
    //将页面返回到登录页

    return;
}

return res;
})



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
