<template>
   <div class="InputLogin">
          <input 
          :type="type" 
          :placeholder="placeholder"
           v-model="inputVal"
           :class="{success:isOk,fail:!isOk}"
          
            >
      </div>
</template>

<script>
export default {
    data() {
        return {
            inputVal:'',
            isOk:false
        }
    },
    props:['type','placeholder','rule'],
    watch: {
        inputVal(n){
            if(this.rule.test(n)){
            
                   this.isOk=true
            }else{
                   this.isOk=false
            }
            this.$emit('clicked',n)
        }
    },
    methods:{
        // checkVal(){
        //     if(!this.isOk){
        //        this.$toast.fail(this.err_message)
        //     }else{
        //        this.$toast.success('输入合法')
        //     }
        // }
    }
}
</script>

<style lang="less" scoped>
.InputLogin
      {
        text-align: center;
        margin-top: 60/360*100vw;
      input{
        width: 80%;
        border: none;
        outline: none;
        border-bottom: 2px solid #aaa;
        font-size: 18/360*100vw;
      }
      .success{
          border-color: green;
      }
      .fail{
          border-color: red;
      }
       
    }
</style>