<template>
  <div>
   <form action="http://localhost:8080/#!/index" method="post">
      <input type="text" name="username">
      <input type="password" name="password">
      <input type="button" value="提交" v-on:click="login">
   </form>
  </div>
  <alert :show="true" :title="title" :button-text='btntext' @on-hide="hideFn">
    <p class="cont">这是弹框的内容部分，可以自己写样式</p>
  </alert>  
  <dialog></dialog>   
</template>

<script>
export default{
  data:function(){
    return {
       title:"Are you sure?",
       btntext:"sure"
    }
   
  },
  methods:{
    login:function(){
       this.$router.go('/index')
      //console.log(this.$http)引入成功
      // this.$http({
      //   url:"http://ogtpw0pl6.bkt.clouddn.com/user.json",
      //   method:"get"
      // }).then(function(res){
      //   console.log(res)
      // },function(err){
      //   console.log(err)
      // })
    },
    hideFn:function(){
      alert("已关闭！")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*scoped是html5新增的属性，表明style里的样式只在nav页面里有用！*/
@import './vux.css'
</style>
