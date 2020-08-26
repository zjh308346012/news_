<template>
  <div class='centerWrapper'>
      <div class="header"></div>
  <div class="info"  @click="goEdit">
     <div class="personal">
          <van-image  class="picture" round  :src="'http://127.0.0.1:3000'+userInfo.head_img"/>
          <!-- <i class="iconfont" :class="isTrue? 'iconxingbienan':'iconxingbienv'"></i> -->
          <i v-if="userInfo.gender==1" class="iconfont iconxingbienan"></i>
           <i v-else class="iconfont iconxingbienv"></i>
           <!-- 进行v-if判定 -->
          <span class="nameSelf">{{userInfo.nickname}}</span>
          <span v-if="userInfo.create_date" class="time">{{userInfo.create_date.split('T')[0]}}</span>
          <i class="iconfont iconjiantou1"></i>
      </div>
        </div>
         <Authnew labelText='我的关注' descText='关注的用户' @clickedGo='addfollows'/>
         <Authnew labelText='我的跟帖' descText='跟帖/回复'  @clickedGo='follow_up'/>
        <Authnew labelText='我的收藏' descText='文章/视频'   @clickedGo='collect'/>
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
            // time:'',
            // head_img:'',
            // nickname:'',
            // isTrue:''

            userInfo:{}
        }
    },
         components:{
             AuthPersonal,AuthBtn,Authnew
         },
          created() {
         
        const id = localStorage.getItem('userId')
        this.$axios({
        
            url:'/user/'+id,
            
            headers: {

        Authorization: "Bearer " + localStorage.getItem('token')
          //Bearer是标准化
    }
        })
      
        .then((res)=>{

        this.userInfo=res.data.data
        
        })
     
    },
    methods:{
        logout(){
            localStorage.removeItem('token');

             localStorage.removeItem('userId');

            this.$router.replace({name:'Home'})
        },
       goEdit(){
           
            this.$router.push({name:'Edit'})
        },
        addfollows(){
            this.$router.push({name:'Focus'})
        },
        follow_up(){
            this.$router.push({name:'Follow'})
        },
        collect(){
            this.$router.push({name:'Collect'})
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
        
           
        .iconxingbienan{
             position: absolute;
            top: 50px;
            left: 120px;
            font-size: 18/360*100vw;
            color: #90c6ee;
        }
        .iconxingbienv{
              position: absolute;
            top: 50px;
            left: 120px;
            font-size: 18/360*100vw;
            color: red;
        
            
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
            width: 20/360*100vw;
            height: 20/360*100vw;
            top: 60/360*100vw;
            left: 328/360*100vw;
            font-size: 20/360*100vw;
            color: #ccc;
        }
    }
}
}

</style>