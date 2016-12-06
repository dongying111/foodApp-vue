<template>
<scroller lock-x :scrollbar-y="false">
  <div class="main">
  <section id="my">
    <div class="scroller">
      <div class="banner">
        <img src="image/40.jpg" alt="">
        <p> <a href="">奇怪阿姨</a></p>
        <p>正在通往美食达人的路上...</p>
        <p>美食杰DNA 0 条</p>
      </div>
      <div class="m_top">
        <a href=""><span> 1 </span>关注</a>
        <a href=""><span> 1 </span>粉丝</a>
        <a href=""><span> 1 </span>菜谱</a>
      </div>
      <div class="hornor">
        <p>荣誉勋章</p>
        <img src="image/38.jpg" alt="">
        <img src="image/39.jpg" alt="">
        <img src="image/39.jpg" alt="">
        <img src="image/39.jpg" alt="">
        <img src="image/39.jpg" alt="">
        <img src="image/39.jpg" alt="">

      </div>
      <ol>
        <li><a href="">积分商城<span>免费兑换</span></a></li>
        <li><a href="message.html">消息通知</a></li>
      </ol>
      <ul>
        <li><a href="upload.html">我的发布</a></li>
        <li><a href="my_fav.html">我的收藏</a></li>
        <li><a href="order.html">我的订单</a></li>
      </ul>
    </div>
  </section>
</div>
</scroller>  
</template>

<script>
export default {
   
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*scoped是html5新增的属性，表明style里的样式只在此页面里有用！*/
.main {
  width: 100%;
  -webkit-box-flex: 1;
  position: relative; }
  .main section {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff; }

/*------------------------my---------------------------------*/
#my {
  background: #F5F5F5; }
  #my .banner {
    width: 100%;
    height: 5.4rem;
    background: url(image/37.jpg) no-repeat;
    background-size: cover;
    position: relative; }
    #my .banner img {
      width: 2rem;
      height: 2rem;
      position: absolute;
      left: .3rem;
      top: 1.1rem; }
    #my .banner p:nth-of-type(1) a {
      font-size: .5rem;
      color: #fff;
      position: absolute;
      left: 2.8rem;
      top: 1.4rem; }
    #my .banner p:nth-of-type(2) {
      font-size: .35rem;
      color: #fff;
      position: absolute;
      left: 2.8rem;
      top: 2.2rem; }
    #my .banner p:nth-of-type(3) {
      font-size: .35rem;
      color: #fff;
      position: absolute;
      left: 2.8rem;
      top: 3rem;
      border: 1px solid #FD9B92;
      border-radius: 15px;
      background: #FE8980;
      padding: .2rem .6rem; }
  #my .m_top {
    width: 100%;
    height: 1.55rem;
    background: #fff;
    border-bottom: 1px solid #ccc;
    font-size: 0; }
    #my .m_top a {
      width: 33.33%;
      display: inline-block;
      color: #000;
      font-size: .4rem;
      line-height: 1.5rem;
      text-align: center;
      border-right: 1px solid #ccc; }
      #my .m_top a span {
        color: #FF5D4C;
        font-size: .4rem; }
  #my .hornor {
    width: 100%;
    height: 3.5rem;
    background: #fff;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    margin-top: .35rem; }
    #my .hornor p {
      width: 100%;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: .5rem;
      padding-left: .4rem; }
    #my .hornor img {
      margin: 0 .1rem;
      width: 1.5rem;
      height: 1.3rem; }
  #my li {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    padding-left: .4rem;
    background: #fff;
    border-bottom: 1px solid #ccc; }
    #my li a {
      font-size: .5rem;
      color: #000; }
    #my li:after {
      font-family: "iconfont";
      content: "\e78b";
      font-size: 0.4rem;
      color: #9D9D9D;
      padding-left: 6.6rem; }
    #my li:before {
      font-family: "iconfont";
      content: "\e7b2";
      font-size: 0.5rem;
      color: #FF311C;
      padding-right: .6rem; }
  #my ol {
    width: 100%; }
    #my ol li {
      margin-top: .3rem;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc; }
      #my ol li:first-child {
        position: relative; }
        #my ol li:first-child span {
          position: absolute;
          right: .8rem;
          font-size: .4rem;
          color: #FF311C; }
  #my ul {
    margin-top: .3rem; }
</style>
