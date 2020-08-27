<template>
  <div class="columnWrapper">
    <AuthHead headText="栏目管理" />
    <span class="delete">点击删除以下频道</span>
    <div class="clickDel">
      <van-grid :gutter="10">
        <van-grid-item
          v-for="(val, index) in columns"
          :key="index"
          :text="val.name"
          @click="delcolumn(index)"
        />
      </van-grid>
    </div>
    <span class="add">点击添加以下频道</span>
    <div class="clickAdd">
      <van-grid :gutter="10">
        <van-grid-item
          v-for="(value, index) in addcolumns"
          :key="index"
          :text="value.name"
          @click="addcolumn(index)"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import AuthHead from "@/components/AuthHead";
export default {
  data() {
    return {
      columns: [],
      addcolumns: [],
    };
  },
  components: {
    AuthHead,
  },
 
  //监测,如果添加项被修改,就存放到本地
  //如果删除项被修改了,也存放到本地
  watch: {
    columns() {
      localStorage.setItem("columns", JSON.stringify(this.columns));
    },
    addcolumns() {
      localStorage.setItem("addcolumns", JSON.stringify(this.addcolumns));
    },
  },
   created() {
    //进入页面的时候,发现有旧数据,就使用旧数据,不发送请求
    if (localStorage.getItem("columns")) {
      //如果本地存储的columns存在就取值
      this.columns = JSON.parse(localStorage.getItem("columns"));
      if (localStorage.getItem("addcolumns")) {
        //如果本地存储的addcolumns存在就取值
        this.addcolumns = JSON.parse(localStorage.getItem("addcolumns"));
      }
    } else {
      //如果没有旧数据就发送数据
      this.$axios({
        url: "/category",
      })
        .then((res) => {
          this.columns = res.data.data;
          console.log(this.columns);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  methods: {
    //当点击增加部分的时候,增加部分的数据要减去相应的,删除部分应该增加相应的
    addcolumn(index) {
      this.columns.push(this.addcolumns[index]);
      this.addcolumns.splice(index, 1);
    },
    delcolumn(index) {
      this.addcolumns.push(this.columns[index]);
      this.columns.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
.delete {
  display: block;
  margin: 20/360 * 100vw;
  font-size: 12/360 * 100vw;
  color: #aaa;
}
.clickDel {
  width: 100%;
  /deep/ .van-grid-item {
    margin-top: 20/360 * 100vw;
    font-size: 20/360 * 100vw;
  }
}
.add {
  display: block;
  margin: 20/360 * 100vw;
  font-size: 12/360 * 100vw;
  color: #aaa;
}
</style>
