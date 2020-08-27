<template>
  <div class="articleWrapper">
      <div v-for="(value,index) in categoryList" :key="index">
          <div >
      <div
        class="singleImg"
        v-if="value.type == 1 && value.cover.length >= 1" >
        <div class="left">
          <div class="title">
            {{ value.title }}
          </div>
           <img :src="value.cover[0].url" alt="" class="cover" />
          <div class="info">
            {{ value.user.nickname }}
            {{ value.comment_length }}跟帖
          </div>
         
        </div>
        
      </div>
    </div>
    <!-- 单图片 -->

    <div class="multiImg" v-if="value.type == 1 && value.cover.length >= 3">
        <div class="title">{{value.title}}</div>
        <div class="coversWrapper">
            <img :src="value.cover[0].url" alt="">
            <img :src="value.cover[1].url" alt="">
            <img :src="value.cover[2].url" alt="">
        </div>
        <div class="info">
            {{value.user.nickname}} {{value.comment_length}}跟帖
        </div>
    </div>
    <!-- 多图片 -->

    <div class="singleVideo" v-if="value.type == 2 && value.cover.length >=0">
        <div class="title">
            {{value.title}}
        </div>
        <div class="coverWrapper">
            <img :src="value.cover[0].url" alt="" class="cover">
            <div class="btn">
                <span class="iconfont iconshipin"></span>
            </div>
        </div>
        <div class="info">
            {{value.user.nickname}} {{value.comment_length}}跟帖
        </div>
    </div>
      </div>
    
  </div>
</template>

<script>
export default {
    props:['categoryList','active']
};
</script>

<style lang="less" scoped>
.singleImg{
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ccc;
    .left{
        display: flex;
        flex-direction: column;
        padding: 20/360*100vw;
        .title{
          font-size: 16/360*100vw;
          color: #000;
          padding-bottom: 20/360*100vw;
        }
        .cover{
            display: block;
            width: 100%;
            height: 200/360*100vw;
        }
        .info{
            font-size: 14/360*100vw;
             margin-top: 16/360*100vw;
              color: #ccc;
        }
    }
}
.multiImg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 20/360*100vw;
    border-bottom: 1px solid #ccc;
    .title{
          font-size: 16/360*100vw;
          color: #000;
          padding-bottom: 20/360*100vw;
        }
        .coversWrapper{
           display: flex;
           justify-content: space-between;
           img{
              width: 100/360*100vw;
              height: 80/360*100vw;
             
           }
        }
        .info{
            font-size: 14/360*100vw;
            margin-top: 16/360*100vw;
            color: #ccc;
        }
}
.singleVideo{
    position: relative;
     display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 20/360*100vw;
    border-bottom: 1px solid #ccc;
     .title{
          font-size: 16/360*100vw;
          color: #000;
          padding-bottom: 20/360*100vw;
        }
        .coverWrapper{
           width: 100%;
           display: flex;
           justify-content: center;
           .cover{
            display: block;
            width: 100%;
            height: 200/360*100vw;
        }
        }
        .btn{
            position: absolute;
            top: 150/360*100vw;
            left: 150/360*100vw;
            width: 50/360*100vw;
            height: 50/360*100vw;
            background-color: #ccc;
            border-radius: 50%;
            opacity: .7;
            text-align: center;
            line-height: 50/360*100vw;
        }
        .info{
            font-size: 14/360*100vw;
             margin-top: 16/360*100vw;
              color: #ccc;
        }
}
</style>
