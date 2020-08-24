<template>
  <van-cell :title="labelText" is-link :value="descText" @click="goEvent" />
</template>

<script>

export default {
   props:['labelText','descText'],

   methods:{
     goEvent(){
       this.$emit('clickedGo')
     }
   }

}
</script>
<style lang="less" scoped>

</style>