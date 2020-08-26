<template>
   <div class="followWrapper">
       <div class="header"></div>
       <AuthHead headText='我的跟帖' @goBackcenter='back'/>
       </div>
</template>

<script>
import AuthHead from '@/components/AuthHead'
export default {
   components:{
       AuthHead
   },
   methods:{
       back(){
           this.$router.push({name:'Index'})
       }
   }
}
</script>

<style lang="less" scoped>
.followWrapper{
    .header{
        background-color: #757575;
        width: 100%;
        height: 30/360*100vw;
    }   
}
</style>