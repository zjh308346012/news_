<template>
  <div class="registerWrapper">
        <div class="header"></div>
      <div class="close" @click="goRegisterSelf">
          <span class="iconfont iconicon-test"></span>
      </div >
     <div class="logo">
          <span class="iconfont iconnew">  
      </span>
     </div>
     <AuthInput  type='text' 
     placeholder='用户名/手机号码' 
     :rule='/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/'
     err_message='请输入有效的用户名'
      @clicked='setusername'
     />
      <AuthInput type='text' 
      placeholder='昵称'
      :rule='/^[\u4e00-\u9fa5]{0,}$/'
      err_message='请输入正确的昵称'
      @clicked='setnickname'
      />
       <AuthInput
       type='password'
       placeholder='密码'
       :rule='/^[a-zA-Z]\w{5,17}$/'
       err_message='请输入有效的密码'
        @clicked='setpassword'
       />
       <AuthBtn btnText='注册' @clickedBtn='register'/>
  </div>
</template>

<script>
import AuthInput from '@/components/AuthInput'

import AuthBtn from '@/components/AuthBtn'
export default {
    data() {
        return {
            username:'',
            password:'',
            nickname:''
        }
    },
  components:{
      AuthInput,AuthBtn
  },
  methods:{
      register(){
         
      },
      setusername(n){
        this.username=n;
      },
      setnickname(n){
          this.nickname=n;
      },
      setpassword(n){
          this.password=n;
      },
      register(){
          if(!this.username||this.nickname||this.password){
              this.$toast.fail('请输入完整的信息')
          }
         this.$axios({
             url:'/register',
             method:'post',
             data:{
               username:this.username,
               password:this.password,
               nickname:this.nickname
             }
         })
         .then(res=>{
             
             if(res.data.message=='注册成功'){
                 this.$toast.success(res.data.message)
             }else{
                 this.$toast.fail(res.data.message)
             }
             console.log(res);
             this.$router.push({name:'Index'})
         })
         .catch(err=>{
             console.log(err);
         })
      },
      goRegisterSelf(){
          this.$router.push({name:'Home'})
      }
  }
}
</script>

<style lang="less" scoped>
.registerWrapper{
   
    .header{
        background-color: #757575;
        width: 100%;
        height: 30/360*100vw;
    }
    .close{
        padding: 16/360*100vw;
        .iconicon-test{
            font-size: 24/360*100vw;
        }
    }
    .logo{
        text-align: center;
        .iconnew{
            font-size: 80/360*100vw;
            color: #d81e06;
        }
    }
    
     
    .btn{
        border: none;
        margin-top: 30/360*100vw;
        text-align: center;
        button{
        overflow: hidden;
        width: 80%;
        line-height: 40/360*100vw;
        color: #fff;
        background-color: #cc3300;
        border: none;
        border-radius: 20/360*100vw;
        outline: none;
        
       }
    }
    
}
</style>