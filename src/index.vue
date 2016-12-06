<template>
  <div class="wrap">
  <!-- 此页面为承载三个二级路由的页面 -->
   <Navs class="navs"></Navs>
   <content class="content"></content>  
  </div>
</template>

<script>
document.documentElement.style.fontSize=document.documentElement.clientWidth/10.8+'px';
import Navs from './components/nav'
import Content from './components/content'

export default {
  components: {
    Navs,
    Content
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*scoped是html5新增的属性，表明style里的样式只在nav页面里有用！*/
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  font-size: 0.12rem; }

html, body, .wrap {
  width: 100%;
  height: 100%;
  overflow: hidden; }

@font-face {
  font-family: "iconfont";
  src: url(../fonts/iconfont.eot) format("embedded-opentype");
  src: url(../fonts/iconfont.ttf) format("truetype");
  src: url(../fonts/iconfont.svg) format("svg");
  src: url(../fonts/iconfont.woff) format("woff"); }
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale; }

 /*a:before{
      font-family:"iconfont";
      content:"\e625";
      font-size:0.23rem;
      color:#fff;
    }*/
.clearfix::after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  overflow: hidden;
  clear: both; }

.wrap {
  display: -webkit-box;
  -webkit-box-orient: vertical; }
  .navs{
      width: 100%;
      height: 1.49rem;
      border-top: 1px solid #ccc;
      background: #F5F5F5;
      font-size: 0;
      z-index: 9999; 
  }
  .content{
      width:100%;
      webkit-flex:1;
  }
</style>
