<template>
  <div class="home">
    <div class="header"></div>
   <!-- <router-link to="/login">登录页</router-link>
   <router-link to="/register">注册页</router-link> -->
     <div class="logo">
          <span class="iconfont iconnew">  
      </span>
     </div>
     <div class="changeWeb">
        <h4>已有账号?请登录! 如果没有赶紧去注册吧!</h4>
    </div>
    <div class="entrance">
       <button class="login" @click="login">登录</button>
      <button class="register" @click="register">注册</button>
    </div> 
       <AuthBtn btnText='个人中心' @clickedBtn='Index'/>
  </div>
 
</template>

<script>
// @ is an alias to /src
 import AuthBtn from '@/components/AuthBtn'

export default {
  components:{
    AuthBtn
  },
  methods: {
    login(){
      this.$router.push({name:'Login'})
    },
    register(){
      this.$router.push({name:'Register'})
    },
    Index(){
      this.$router.push({name:'Index'})
    }
  },
 
}
</script>
<style lang="less" scoped>
 .header{
        background-color: #757575;
        width: 100%;
        height: 30/360*100vw;
    }
   
    .logo{
        text-align: center;
        .iconnew{
            font-size: 80/360*100vw;
            color: #d81e06;
        }
    }
    .changeWeb{
      width: 90%;
      margin: 20px auto;
    }
    .entrance{
      width: 80%;
      height: 100px;
      margin: 30px auto;
      
       display: flex;
       justify-content: space-between;
      .login{
        width: 40%;
        border: none;
      }
      .register{
        width: 40%;
        border: none;
      }
    }
</style>
