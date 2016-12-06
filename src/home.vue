<template>
  <div id="home">
   <header class="header1">
      <span></span>
      <h1>北京市海淀区唐家岭路57号</h1>
      <span></span>
   </header>
   <main class="main" id="main">
      <section id="fav">
        <div class="scroller">
          <div class="banner">
            <img src="image/1.png" alt="">
            <form action="">
              <input type="text" placeholder="寻找你喜欢的美食">
              <span>搜索</span>
            </form>
          </div>
          <p class="hot">热门推荐</p>
          <div class="dls">
            <dl>
              <dt><img src="image/3.jpg" alt=""></dt>
              <dd>披萨快餐</dd>
            </dl><dl>
              <dt><img src="image/4.jpg" alt=""></dt>
              <dd>小吃零食</dd>
            </dl><dl>
              <dt><img src="image/5.jpg" alt=""></dt>
              <dd>蛋糕面包</dd>
            </dl><dl>
              <dt><img src="image/6.jpg" alt=""></dt>
              <dd>甜点饮品</dd>
            </dl>

          </div>
          <img src="image/7.jpg" alt="" class="pic7">
          <div class="local">
            <p>本地必去餐厅</p>
            <p>生活在这些城市，你去过这些餐厅吗？</p>
            <div>
              <img src="image/8.jpg" alt="">
              <img src="image/9.jpg" alt="">
              <img src="image/10.jpg" alt="">
              <img src="image/8.jpg" alt="">
              <img src="image/9.jpg" alt="">
              <img src="image/10.jpg" alt="">
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'welcome'
    }
  },
  methods:{
    addproduct(){
      alert(this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*scoped是html5新增的属性，表明style里的样式只在nav页面里有用！*/
.header1 {
  width: 100%;
  height: 1.28rem;
  background: #fff;
  position: relative;
  z-index: 9999; }
  .header1 h1 {
    font-size: .46rem;
    text-align: center;
    line-height: 1.28rem; }
  .header1 span:nth-of-type(1) {
    background: url(image/1.jpg) no-repeat;
    background-size: contain;
    width: .25rem;
    height: .35rem;
    position: absolute;
    left: 2.2rem;
    top: 50%;
    margin-top: -.17rem; }
  .header1 span:nth-of-type(2) {
    background: url(image/2.jpg) no-repeat;
    background-size: contain;
    width: .17rem;
    height: .12rem;
    position: absolute;
    right: 2.2rem;
    top: 50%;
    margin-top: -.006rem; }

/*------------------------main---------------------------------*/
.main {
  width: 100%;
  -webkit-box-flex: 1;
  position: relative;
  /*------------------------fav---------------------------------*/ }
  .main section {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 100%;
    background: #fff; }
  .main #fav {
    left: 0; }
    .main #fav .banner {
      width: 100%;
      height: 4.33rem;
      position: relative; }
      .main #fav .banner img {
        width: 100%;
        height: 4.33rem; }
      .main #fav .banner form {
        width: 80%;
        height: 0.87rem;
        position: absolute;
        left: 10%;
        bottom: .24rem;
        border-radius: .2rem;
        background-color: rgba(255, 255, 255, 0.6);
        padding-left: .38rem; }
        .main #fav .banner form input[type="text"] {
          width: 100%;
          height: 100%;
          border: none;
          font-size: .4rem;
          border-radius: .2rem;
          background-color: rgba(255, 255, 255, 0); }
          .main #fav .banner form input[type="text"]:focus {
            outline: none; }
        .main #fav .banner form span {
          position: absolute;
          right: 1rem;
          top: .15rem;
          font-size: 0; }
        .main #fav .banner form span:before {
          font-family: "iconfont";
          content: "\e797";
          font-size: 0.5rem;
          color: #fff; }
    .main #fav .hot {
      width: 100%;
      height: 1.4rem;
      font-size: .38rem;
      text-align: center;
      line-height: 1.4rem; }
    .main #fav .dls {
      width: 100%;
      height: 2.1rem;
      font-size: 0; }
      .main #fav .dls dl {
        display: inline-block;
        width: 25%;
        height: 100%;
        text-align: center; }
        .main #fav .dls dl dt {
          width: 100%;
          height: 1.2rem;
          margin-bottom: .2rem; }
          .main #fav .dls dl dt img {
            width: 1.17rem;
            height: 1.2rem; }
        .main #fav .dls dl dd {
          font-size: .36rem; }
        .main #fav .dls dl:nth-of-type(2) dt img {
          width: .62rem;
          height: 1.05rem; }
        .main #fav .dls dl:nth-of-type(3) dt img {
          width: .79rem;
          height: 1.13rem; }
        .main #fav .dls dl:nth-of-type(4) dt img {
          width: .55rem;
          height: 1.1rem; }
    .main #fav .pic7 {
      width: 100%;
      height: 2.94rem;
      margin-top: .52rem; }
    .main #fav .local {
      width: 100% t;
      height: auto;
      padding: .38rem .9rem;
      font-size: 0; }
      .main #fav .local P:nth-of-type(1) {
        font-size: .4rem; }
      .main #fav .local P:nth-of-type(2) {
        font-size: .3rem;
        color: #999999;
        line-height: .72rem; }
      .main #fav .local img {
        width: 2.69rem;
        height: 2.31rem;
        margin-right: .36rem;
        margin-top: .1rem; }
      .main #fav .local img:nth-of-type(3), .main #fav .local img:nth-of-type(6) {
        margin-right: 0; }
</style>
