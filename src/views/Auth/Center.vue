<template>
  <div class='centerWrapper'>
      <div class="header"></div>
      <AuthCenter :time='time' :nickname='nickname' :img='head_img'/>
  </div>
</template>

<script>

import AuthCenter from '@/components/AuthCenter'

export default {
    data() {
        return {
           time:'',
           nickname:'',
           head_img:''
        }
    },
   
    components:{
        AuthCenter
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
     
    },
}
</script>
<style lang="less" scoped>
.centerWrapper{
    .header{
        background-color: #757575;
        width: 100%;
        height: 30/360*100vw;
    }
}
</style>