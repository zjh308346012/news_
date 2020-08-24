<template>
      <div class="focus">
          <span class="label">{{labelText}}</span>
          <span class="desc" >{{descText}}</span>
        <i class="iconfont iconjiantou1"></i>
      </div>
</template>

<script>
export default {
  props:['labelText','descText','type'],
  mounted() {
    console.log(this.time);
  },
}
</script>

<style lang="less" scoped>
    //个人中心的我的关注
    .focus{
        justify-content: space-between;
        align-items: center;
        padding: 0 10/360*100vw;
        display: flex;
        height: 46/360*100vw;
        font-size: 14/360*100vw;
        margin-left: 20/360*100vw;
        border-bottom: 1px solid #ccc;
        .label{
            flex: 1;
            color: #000;
        }
        .desc{
            flex: 1;
             text-align:right;
             padding-right: 8/360*100vw;
             color: #aaa;
        }
    }
  
</style>