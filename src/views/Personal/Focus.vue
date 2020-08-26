<template>
  <div class="focusWrapper">
       <div class="header"></div>
      <AuthHead headText='我的关注' @goBackcenter='back'/>
      <AuthFocus v-for="(value,index) in fansInfo" :key="index" :news='value.nickname' :newsTime='value.create_date' :img='value.head_img' @addfollows='delFans'/>
     

  </div>
</template>

<script>
import AuthHead from '@/components/AuthHead'
import AuthFocus from '@/components/AuthFocus'
export default {
    data() {
        return {
            fansInfo:{}
        }
    },
    components:{
        AuthHead,AuthFocus
    },
    methods:{
        back(){
            this.$router.push({name:'Index'})
        },
        delFans(){
            const id =localStorage.getItem('userId')
            this.$axios({
                url:'/user_unfollow/'+id,
                params:{
                    id:id
                },
                 headers: {

        Authorization: "Bearer " + localStorage.getItem('token')
          //Bearer是标准化
    }
            })
            .then(res=>{
                this.$toast.success(res.data.message)
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    created(){
        this.$axios({
            url:'/user_follows',
            headers: {

        Authorization: "Bearer " + localStorage.getItem('token')
          //Bearer是标准化
    }
        })
        .then(res=>{
              this.fansInfo=res.data.data
              
             
        })
        .catch(res=>{
              console.log(err);
        })
    }
}
</script>

<style lang="less" scoped>
.focusWrapper{
    .header{
        background-color: #757575;
        width: 100%;
        height: 30/360*100vw;
    }   
}
  
</style>