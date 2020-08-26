<template>
  <div class="myFocus">
      <img class="focusImage" :src="'http://127.0.0.1:3000'+img" alt="">
      <div class="news">{{news}} </div>
      <div v-if="newsTime" class="newsTime">{{newsTime.split('T')[0]}}</div>
      <button class="addfollow" @click="concern">{{concerns}}</button>
</div>
</template>

<script>
export default {
    props:['news','newsTime','img'],
    data() {
        return {
            concerns:'取消关注'
        }
    },
   methods: {
       
       concern(){

           this.$emit('addfollows');
          
       }
   },
}
</script>

<style lang="less" scoped>
.myFocus{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20/360*100vw;
    border-bottom: 1px solid #ccc;
    .focusImage{
        width: 50/360*100vw;
        height: 50/360*100vw;
        object-fit: cover;
        border-radius: 50%;
        background-color: pink;
    }
    .news{
        position: absolute;
        top: 20/360*100vw;
        left: 100/360*100vw;
    }
    .newsTime{
        position: absolute;
        top: 50/360*100vw;
        left: 100/360*100vw;
        font-size: 14/360*100vw;
        color: #ccc;
    }
    .addfollow{
        display: block;
        border: none;
        width: 80/360*100vw;
        height: 30/360*100vw;
        border-radius: 14/360*100vw;
        font-size: 14/360*100vw;
        color: #888;
    }
}
</style>