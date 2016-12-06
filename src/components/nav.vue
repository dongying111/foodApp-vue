<template>
  <div class="footer">
      <a v-link="{path:'/index/home'}" class="active"><small></small><br/>推荐</a>
      <a v-link="{path:'/index/list'}"><small></small><br/>发现</a>
      <a v-link="{path:'/index/about'}"><small></small><br/>商城</a>
      <a v-link="{path:'/index/chat'}"><small></small><br/>食话</a>
      <a v-link="{path:'/index/my'}"><small></small><br/>我的</a>

  </div>
</template>

<script>
  document.documentElement.style.fontSize=document.documentElement.clientWidth/10.8+'px';
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*scoped是html5新增的属性，表明style里的样式只在nav页面里有用！*/
.footer{
  width: 100%;
  height: 1.49rem;
  border-top: 1px solid #ccc;
  background: #F5F5F5;
  font-size: 0;
  position: fixed;
  z-index: 9999; 
  bottom:0;
  left:0;

}
.footer a {
    width: 20%;
    height: 100%;
    display: inline-block;
    text-align: center;
    font-size: .26rem;
    color: #AAAAAA;
    padding-top: .2rem; }
    .footer a small:before {
      font-family: "iconfont";
      content: "\e7ab";
      font-size: 0.6rem;
      color: #868686; }
  .footer .active {
    color: #FF4C38; }
    .footer .active small:before {
      color: #FF4C38; }
  .footer a:nth-of-type(2) small:before {
    font-family: "iconfont";
    content: "\e776";
    font-size: 0.6rem; }
  .footer a:nth-of-type(3) small:before {
    font-family: "iconfont";
    content: "\e81e";
    font-size: 0.6rem; }
  .footer a:nth-of-type(4) small:before {
    font-family: "iconfont";
    content: "\e7e6";
    font-size: 0.6rem; }
  .footer a:nth-of-type(5) small:before {
    font-family: "iconfont";
    content: "\e792";
    font-size: 0.6rem; }
</style>
