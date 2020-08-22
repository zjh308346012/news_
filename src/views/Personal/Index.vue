<template>
  <div class='centerWrapper'>
      <div class="header"></div>
  <div class="info">
     <div class="personal">
          <span class="picture">
              <img :src="'http://127.0.0.1:3000'+head_img" alt="">
          </span>
          <i class="iconfont iconxingbienan"></i>
          <span class="nameSelf">{{nickname}}</span>
          <span class="time">{{time}}</span>
          <i class="iconfont iconjiantou1"></i>
      </div>
        </div>
        <AuthPersonal labelText='我的关注' descText='关注的用户'/>
        <AuthPersonal labelText='我的跟帖' descText='跟帖/回复'/>
        <AuthPersonal labelText='我的收藏' descText='文章/视频'/>
        <AuthPersonal labelText='设置' />

         </div>
</template>

<script>

import AuthPersonal from '@/components/AuthPersonal'
export default {
    data() {
        return {
            time:'',
            head_img:'',
            nickname:''
        }
    },
         components:{
             AuthPersonal
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
          console.log(this.time,this.head_img,this.nickname);
           
           }
        })
     
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
            display:inline-block;
            border-radius: 50%;
            width: 70px;
            height: 70px;
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