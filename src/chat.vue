<template>
  <div id="game">
    <header class="header3">
    <a href=""></a>
    <h1>食话</h1>
    <a href="">搜索</a>
/   </header>
<scroller lock-x :scrollbar-y="true">

<div class="main">
  <section id="chat">
    <div class="scroller">
      <img src="image/32.jpg" alt="" class="pic32">

      <div class="c_list">
        <li><a href="in.html"><small></small><br/>最IN活动</a></li><li><a href="time.html"><small></small><br/>餐桌时光</a></li><li><a href="cake2.html"><small></small><br/>玩转烘焙</a></li><li><a href="ke.html"><small></small><br/>美食课堂</a></li>
      </div>
      <ol id="c_ols">
        <li class="active">最新</li>
        <li>最热</li>
      </ol>
      <ul class="person">
        <li><span><img src="image/36.jpg" alt=""></span>一弯酒窝（来自腾讯）</li>
        <li>放假在家，任意折腾，海鲜意面第三次，答应女儿的一定要做到，培根芦笋卷，焗土豆泥</li>
        <li>
          <img src="image/33.jpg" alt="">
          <img src="image/34.jpg" alt="">
          <img src="image/35.jpg" alt="">
        </li>
      </ul>
      <ul class="person">
        <li><span><img src="image/36.jpg" alt=""></span>一弯酒窝（来自腾讯）</li>
        <li>放假在家，任意折腾，海鲜意面第三次，答应女儿的一定要做到，培根芦笋卷，焗土豆泥</li>
        <li>
          <img src="image/33.jpg" alt="">
          <img src="image/34.jpg" alt="">
          <img src="image/35.jpg" alt="">
        </li>
      </ul>
      <ul class="person">
        <li><span><img src="image/36.jpg" alt=""></span>一弯酒窝（来自腾讯）</li>
        <li>放假在家，任意折腾，海鲜意面第三次，答应女儿的一定要做到，培根芦笋卷，焗土豆泥</li>
        <li>
          <img src="image/33.jpg" alt="">
          <img src="image/34.jpg" alt="">
          <img src="image/35.jpg" alt="">
        </li>
      </ul>
    </div>
  </section>
</div>
</scroller>
  </div>
</template>

<script>
export default {
   
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*scoped是html5新增的属性，表明style里的样式只在此页面里有用！*/
.header3 {
  width: 100%;
  height: 1.5rem;
  background: #fff;
  position: relative;
  z-index: 9999; }
  .header3 h1 {
    font-size: .46rem;
    text-align: center;
    line-height: 1.5rem;
    color: #878787; }
  .header3 a:nth-of-type(1) {
    position: absolute;
    left: .3rem;
    line-height: 1.5rem;
    font-size: 0; }
    .header3 a:nth-of-type(1):before {
      font-family: "iconfont";
      content: "\e775";
      font-size: 0.72rem;
      color: #878787; }
  .header3 a:nth-of-type(2) {
    position: absolute;
    right: 1.28rem;
    top: .55rem;
    font-size: 0; }
    .header3 a:nth-of-type(2):before {
      font-family: "iconfont";
      content: "\e797";
      font-size: 0.72rem;
      color: #878787; }
  .header3 a:nth-of-type(3) {
    position: absolute;
    right: .3rem;
    top: .5rem;
    font-size: 0; }
    .header3 a:nth-of-type(3):before {
      font-family: "iconfont";
      content: "\e792";
      font-size: 0.72rem;
      color: #878787; }

/*------------------------main---------------------------------*/
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

/*------------------------chat---------------------------------*/
#chat .pic32 {
  width: 100%;
  height: 5.4rem; }
#chat .c_list {
  width: 100%;
  height: 4.27rem;
  font-size: 0; }
  #chat .c_list li {
    width: 25%;
    height: 100%;
    text-align: center;
    display: inline-block;
    padding-top: .9rem; }
    #chat .c_list li a {
      color: #000;
      font-size: .43rem; }
    #chat .c_list li small {
      font-size: .42rem;
      width: 1.66rem;
      height: 1.66rem;
      border-radius: 50%;
      background: #AC82C4;
      display: inline-block;
      text-align: center;
      line-height: 1.66rem;
      margin-bottom: .3rem; }
      #chat .c_list li small:before {
        font-family: "iconfont";
        content: "\e832";
        font-size: 0.8rem;
        color: #fff; }
  #chat .c_list li:nth-of-type(2) small {
    background: #FFCA10; }
  #chat .c_list li:nth-of-type(2) small:before {
    font-family: "iconfont";
    content: "\e815";
    font-size: 0.8rem;
    color: #fff; }
  #chat .c_list li:nth-of-type(3) small {
    background: #FF969A; }
  #chat .c_list li:nth-of-type(3) small:before {
    font-family: "iconfont";
    content: "\e801";
    font-size: 0.8rem;
    color: #fff; }
  #chat .c_list li:nth-of-type(4) small {
    background: #3ECE9D; }
  #chat .c_list li:nth-of-type(4) small:before {
    font-family: "iconfont";
    content: "\e7fc";
    font-size: 0.8rem;
    color: #fff; }
#chat ol {
  width: 5.68rem;
  height: .9rem;
  border: 1px solid #FF4C38;
  border-radius: 5px;
  margin: 0 auto;
  overflow: hidden; }
  #chat ol li {
    width: 50%;
    float: left;
    text-align: Center;
    line-height: .9rem;
    color: #FF4C38;
    font-size: .4rem; }
  #chat ol .active {
    background: #FF4C38;
    color: #fff; }
#chat .person {
  width: 100%;
  padding-left: .3rem;
  padding-top: .76rem; }
  #chat .person li:nth-of-type(1) {
    width: 100%;
    height: .81rem;
    line-height: .81rem;
    font-size: .43rem;
    color: #FF5251;
    position: relative;
    padding-left: 1.12rem; }
    #chat .person li:nth-of-type(1) span {
      width: .81rem;
      height: .81rem;
      position: absolute;
      left: 0; }
      #chat .person li:nth-of-type(1) span img {
        width: .81rem;
        height: .81rem; }
  #chat .person li:nth-of-type(2) {
    padding-top: .37rem;
    width: 100%;
    line-height: .78rem;
    font-size: .43rem; }
  #chat .person li:nth-of-type(3) img {
    width: 2.16rem;
    height: 1.19rem;
    margin-right: .17rem; }
</style>
