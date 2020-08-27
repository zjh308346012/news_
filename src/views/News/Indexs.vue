<template>
  <div class="indexWrapper">
    <div class="header"></div>
    <div class="top">
      <div class="logo">
        <i class="iconfont iconnew"></i>
      </div>
      <van-search v-model="value" shape="round" placeholder="搜索新闻" />
      <span class="login">
        <i class="iconfont iconwode" @click="goIndex"></i>
      </span>
    </div>
    <van-tabs v-model="active" @click="getPage">
      <van-tab v-for="value in category" :key="value.id" :title="value.name" ></van-tab>
    </van-tabs>
    <AuthArticle :categoryList='categoryList' :active='active'/>
  </div>
</template>

<script>
import AuthArticle from '@/components/AuthArticle'
export default {
  components:{
    AuthArticle
  },
  data() {
    return {
      value: "",
      category: [],
      active: 0,
      categoryList:''
    
    };
  },
  created() {
    this.$axios({
      url: "/category",
    })
      .then((res) => {
        console.log(res);
        this.category = res.data.data;
        console.log(this.category);
       
      
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    goIndex() {
      this.$router.push({ name: "Index" });
    },
    getPage(){
    const categoryId = this.category[this.active].id
      console.log(this.category[this.active].id);
      this.$axios({
        url:'/post',
        
        params:{
             category:categoryId
        }
      })
      .then(res=>{
        console.log(res);
          this.categoryList=res.data.data
          console.log(this.categoryList);

      })
    }
  },
};
</script>

<style lang="less" scoped>
.indexWrapper {
  .header {
    background-color: #757575;
    width: 100%;
    height: 30/360 * 100vw;
  }
  .top {
    width: 100%;
    height: 54/360 * 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ff0000;
  }
  .logo {
    flex: 1;
    .iconnew {
      font-size: 50/360 * 100vw;
      padding: 10/360 * 100vw;
      color: #fff;
    }
  }
  /deep/.van-search {
    height: 50/360 * 100vw;
    background-color: red;
  }
  .login {
    flex: 1;
    .iconwode {
      font-size: 30/360 * 100vw;
      margin-left: 12/360 * 100vw;
      color: #fff;
    }
  }
}
</style>
