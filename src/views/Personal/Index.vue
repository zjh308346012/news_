<template>
  <div class='centerWrapper'>
      <div class="header"></div>
  <div class="info">
     <div class="personal">
          <van-image  class="picture" round  :src="'http://127.0.0.1:3000'+head_img"/>
          <i class="iconfont" :class="isTrue? 'iconxingbienan':'iconxingbienv'"></i>
          <span class="nameSelf">{{nickname}}</span>
          <span class="time">{{time}}</span>
          <i class="iconfont iconjiantou1"></i>
      </div>
        </div>
         <Authnew labelText='我的关注' descText='关注的用户'/>
         <Authnew labelText='我的跟帖' descText='跟帖/回复'/>
        <Authnew labelText='我的收藏' descText='文章/视频'/>
        <Authnew labelText='设置' />
        <AuthBtn btnText='退出登录' @clickedBtn='logout'/>
         </div>
</template>

<script>
import AuthBtn from '@/components/AuthBtn'
import AuthPersonal from '@/components/AuthPersonal'

import Authnew from '@/components/Authnew'
export default {
    data() {
        return {
            time:'',
            head_img:'',
            nickname:'',
            isTrue:''
        }
    },
         components:{
             AuthPersonal,AuthBtn,Authnew
         },
          mounted() {
         
        const id = localStorage.getItem('userId')
        this.$axios({
        
            url:'http://127.0.0.1:3000/user/'+id,
            
            headers: {

        Authorization: "Bearer " + localStorage.getItem('token')

    }
        })
      
        .then((res)=>{
            let that =this
           console.log(res);
           if(res.data.message=='获取成功'){
               console.log(123);
              
          console.log(res.data.data.nickname);
          this.nickname= res.data.data.nickname

          this.time=res.data.data.create_date;

          this.head_img=res.data.data.head_img;
          
          if(res.data.data.gender==1){
              this.isTrue=true
          }else if(res.data.data.gender==0){
              this.isTrue=false
          }
           
           }
        })
     
    },
    methods:{
        logout(){
            localStorage.removeItem('token');

             localStorage.removeItem('userId');

            this.$router.replace({name:'Home'})
        }
    }
}
</script>

<style lang="less" scoped>
.centerWrapper{
    .header{
        background-color: #757575;
        width: 100%;
        height: 30/360*100vw;
    }
    .info{
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    height: 140/360*100vw;
    border-bottom: 3px solid #ccc;
    .personal{
        position: relative;
        
        .picture{
            width: 70/360*100vw;
            height: 70/360*100vw;
            margin: 30px 30px;
            background-color: darkkhaki;
            img{
                width: 100%;
            }
        }
        .iconfont{
            position: absolute;
            top: 50px;
            left: 120px;
            font-size: 18/360*100vw;
            color: #90c6ee;
            
        }
        .nameSelf{
            position: absolute;
            top: 48px;
            left: 146px;
        }
        .time{
            position: absolute;
            top: 72px;
            left: 120px;
           font-size: 14/360*100vw;
           color: #ccc;
        }
        .iconjiantou1{
            position: absolute;
            top:50px;
            right: 10px;
            font-size: 20/360*100vw;
            color: #ccc;
        }
    }
}
}

</style>