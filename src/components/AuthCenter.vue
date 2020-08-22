<template>
  <div class="info">
      <div class="personal">
          <span class="picture">
              <img :src="'http://127.0.0.1:3000'+img" alt="">
          </span>
          <i class="iconfont iconxingbienan"></i>
          <span class="nameSelf">{{nickname}}</span>
          <span class="time">{{time}}</span>
          <i class="iconfont iconjiantou1"></i>
      </div>
      <div class="focus">
          <span class="myFocus">我的关注</span>
          <span class="focusUser ">关注的用户
               <i class="iconfont iconjiantou1"></i>
          </span>
         
      </div>
      <div class="follow">
           <span class="myFollow">我的跟帖</span>
          <span class="reply">跟帖/回复
               <i class="iconfont iconjiantou1"></i>
          </span>
      </div>
      <div class="collect">
           <span class="myCollect">我的收藏</span>
          <span class="artVideo">文章/视频
               <i class="iconfont iconjiantou1"></i>
          </span>
      </div>
      <div class="setting">
           <span class="mySetting">设置</span>
          <span class="settingInfo">
               <i class="iconfont iconjiantou1"></i>
          </span>
      </div>
  </div>
</template>

<script>
export default {
  props:['time','nickname','img'],
  mounted() {
    console.log(this.time);
  },
}
</script>

<style lang="less" scoped>
.info{
    display: flex;
    flex-direction: column;
   justify-items: center;
    width: 100%;
    height: 360px;
    
    //个人中心的个人信息
    .personal{
        position: relative;
        flex: 2;
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
    //个人中心的我的关注
    .focus{
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        display: flex;
        flex: 1;
        font-size: 14/360*100vw;
        .myFocus{
            color: #000;
        }
        .focusUser{
           vertical-align: middle;
            color: #aaa;
        }
    }
    //个人中心的跟帖
    .follow{
      justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        display: flex;
        flex: 1;
        font-size: 14/360*100vw;
        .myFollow{
            color: #000;
        }
        .reply{
           vertical-align: middle;
            color: #aaa;
        }
    }
    //个人中心的收藏
    .collect{
       justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        display: flex;
        flex: 1;
        font-size: 14/360*100vw;
        .myCollect{
            color: #000;
        }
        .artVideo{
           vertical-align: middle;
            color: #aaa;
        }
    }
    //个人中心的设置
    .setting{
       justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        display: flex;
        flex: 1;
        font-size: 14/360*100vw;
        .mySetting{
            color: #000;
        }
        .settingInfo{
           vertical-align: middle;
            color: #aaa;
        }
    }
}
</style>