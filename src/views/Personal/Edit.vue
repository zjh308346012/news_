<template>
   <div class="editWrapper">
      <div class="header"></div>
      
     <AuthHead headText='编辑资料' @goBackcenter='back'/>
       <div class="fileImage">
         <!-- <van-image round width="24vw" height="24vw" :src="'http://127.0.0.1:3000'+list.head_img"/> -->
         <img v-if="list.head_img"  v-cloak class="avatar" :src="'http://127.0.0.1:3000'+list.head_img" alt="">
         <img v-else class="avatar" v-cloak src="@/assets/logo.png" alt="">
         <!-- //渲染页面的时候进行判断这个头像是否取得到数据,如果取到了数据就渲染数据里面的图片,如果取到数据就显示默认头像 -->
        <!-- <van-uploader  width="24vw" height="24vw"  :after-read="afterRead" /> -->
       </div>
     
       <Authnew labelText='昵称' :descText='list.nickname' @click.native=' isNickname=true'/>
       <!-- //进行组件引入 注册 渲染,用click.native进行强制绑定 -->
           <van-dialog v-model="isNickname" title="修改昵称" show-cancel-button @confirm='setNickname' >
               <!-- 这是Dialog的弹出框, v-model是用来准备这个弹框是否弹出 title修改标题 show-cancel-button是取消按钮 -->
           <van-field v-model="newNickname"  placeholder='请输入你新的昵称'/>
           <!-- 这是里面的弹出框内容,里面的内容也一样进行双向绑定,点击确定按钮后进行操作 -->
          </van-dialog>
    
         <Authnew  labelText='密码' descText='******' @click.native='isPassword=true'/>

         <van-dialog v-model="isPassword" title="修改密码" show-cancel-button @confirm='setPassword' >
           <van-field v-model="newPassword"  placeholder='请输入你新的密码'/>
          </van-dialog>
        <Authnew  labelText='性别' :descText='["女","男"][list.gender]' @click.native="isGender=true"/>
             <!-- 利用父子传值,根据数据中的gender来判断是男生还是女生,这里用到数组的方式进行决定 -->
        <van-action-sheet
        v-model="isGender"
        :actions="actions"
        cancel-text="取消"
        description="请选择你的性别"
        close-on-click-action
        @select='selectGender'
/>
         
         <!-- <AuthPersonal v-if="list.nickname" labelText='昵称' :descText='list.nickname'/>
         <AuthPersonal v-if="list.password" labelText='密码' :descText='list.password' type='password'/>
         <AuthPersonal  labelText='性别' :descText="['女','男'][list.gender]"/> -->
      </div>
</template>

<script>
// import Authnew from '@/components/Authnew'

import Authnew from '@/components/Authnew'

import AuthHead from '@/components/AuthHead'
export default {
     data() {
          return {
              list:{},
              isNickname:false,
              isPassword:false,
              isGender:false,
              newNickname:'',
              newPassword:'',
               actions: [{ name: '男',gender:1 }, { name: '女',gender:0 }],
          }
      },
  components:{
     
     Authnew,AuthHead
  },
  methods:{
      //设置昵称的函数
      setNickname(){
       this.editDatum( {nickname:this.newNickname})
       this.$toast.success('修改成功')
        this.newNickname=''
      },
      //设置新的密码
      setPassword(){
       this.editDatum( {password:this.newPassword})
       this.$toast.success('修改成功')
        this.newPassword=''
      },

      //性别选择后触发的事件
       selectGender(item){
        const gender = item.gender;

        this.editDatum( {gender:gender})
       this.$toast.success('修改成功')
      },
       //点击箭头返回个人中心
       back(){
         this.$router.push({name:'Index'});
       },
      //封装一个修改数据后的axios请求,编辑资料的公共axios
      
      editDatum(newData){
        
         const id = localStorage.getItem('userId')
       this.$axios({

           url:'/user_update/'+id,

           method:'post',

           data:newData,
            headers: {

        Authorization: "Bearer " + localStorage.getItem('token')
          //Bearer是标准化
    }

       })
       .then(res=>{
            this.loadPage();
       })
       .catch(err=>{
           console.log(err);
       })


      },

      //封装axios 可以进行数据的刷新 注意要带上token的验证
      loadPage(){
       let id =localStorage.getItem('userId');

      let token =localStorage.getItem('token');

      this.$axios({
           
          url:'/user/'+id,

          method:'get',

          params:{
              id:id
          },

     headers: {

        Authorization: "Bearer " + token
          //Bearer是标准化
    }
      })
      .then(res=>{
         
         this.list=res.data.data
       
          
      })
      .catch(err=>{
          console.log(err);
      })
      },
      
     

  },

  //页面进来就加载数据渲染
  created(){

  this.loadPage();
  }
 

}
</script>

<style lang="less" scoped>
.editWrapper{
    .header{
        background-color: #757575;
        width: 100%;
        height: 30/360*100vw;
    }     
    .fileImage{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 180/360*100vw;
        .avatar{
            width: 70/360*100vw;
            height: 70/360*100vw;
            object-fit: cover;
            border-radius: 50%;
        }
    }
   [v-cloak]{
       display: none;
   }
 
}
</style>