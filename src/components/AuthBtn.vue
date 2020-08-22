<template>
   <div class="btn" @click="loginBtn">
              <button >{{btnText}}</button>
        </div>
</template>

<script>
export default {
     props:['btnText'],
     methods:{
         loginBtn(){
             this.$emit('clickedBtn')
         }
     }
}
</script>

<style lang="less" scoped>
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
</style>