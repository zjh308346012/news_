<template>
  <div class="loginWrapper">
      <div class="header"></div>
      <div class="close" @click="goLoginSelf">
          <span class="iconfont iconicon-test"></span>
      </div >
     <div class="logo">
          <span class="iconfont iconnew">  
      </span>
     </div>
     <AuthInput type='text' placeholder='用户名/手机号码' :rule='/^\w{4,15}$/'
  
     @clicked='setusername'
     />
     
    <AuthInput type='password' placeholder='密码' :rule='/^\w{2,17}$/'
    
     @clicked='setpassword'
     />
     
      <AuthBtn btnText='登录' @clickedBtn='login'/>

    
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
            
        }
    },
  components:{
      AuthInput,AuthBtn
  },
  methods:{
      setusername(data){
          
          this.username=data
      },
      setpassword(data){
         this.password=data
      },
      login(){
        //进行AJAX的请求
          this.$axios({
              url:'http://127.0.0.1:3000/login',
              method:'post',
              //data是post请求方式的设置参数方法
              data:{
                  username:this.username,
                  password:this.password
              }
          })
          .then(res=>{
              console.log(res.data);
              
            if(res.data.message == '登录成功'){
               

              
                //登录成功之后.将token值以及userid进行存储,存储在本地localStorage

              localStorage.setItem('token',res.data.data.token);

              localStorage.setItem('userId',res.data.data.user.id)

              this.$toast.success(res.data.message)
               //登录成功之后进行弹窗提示登录成功
           
               setTimeout(() => {
                  //设置定时器,用Timeout的方法,因为如果是设置成setInval的是定时器,它会无限触发
                    this.$router.push({name:'Index'})

              }, 1000);
            }else{
                this.$$toast.fail(res.data.message)
            }
          })
          .catch(err=>{
              console.log(err);
          })
        
      },
      goLoginSelf(){
          this.$router.push({name:'Home'})
      }
  }
}
</script>

<style lang="less" scoped> 
.loginWrapper{
   
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
    
     
   
  
}
</style>