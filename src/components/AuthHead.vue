<template>
   <div class="proHead">
          <i class="iconfont iconjiantou2" @click="goBack"></i>
          <span class="editDatum">{{headText}}</span>
      </div>
</template>

<script>
export default {
props:['headText'],

methods:{
    goBack(){
        this.$emit('goBackcenter')
    }
}
}
</script>

<style lang="less" scoped>

 .proHead{
        width: 100%;
        height: 40/360*100vw;
        display: flex;
        align-items: center;
        .iconjiantou2{
            position: absolute;
            left: 10/360*100vw;
        }
        .editDatum{
         position: absolute;
         left: 150/360*100vw;
         font-size: 16/360*100vw;
        }
    }
</style>