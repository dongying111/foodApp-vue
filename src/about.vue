<template>
  <div id="about">
   <div class="wrap">
  <header class="header2">
    <a href=""></a>
    <p><span></span><input type="text" placeholder="榨汁机"></p>
    <a href=""></a>
    <a href=""></a>
  </header>
<div class="main">
  <section id="mall">
    <div class="scroller">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide"><img src="image/21.jpg" alt=""></li>
          <li class="swiper-slide"><img src="image/21.jpg" alt=""></li>
          <li class="swiper-slide"><img src="image/21.jpg" alt=""></li>
        </ul>
      </div>
      <div class="m_list">
        <a href="cake.html"><small></small><br/>烘焙</a><a href="cai.html"><small></small><br/>食材</a><a href="tool.html"><small></small><br/>厨具</a><a href="oil.html"><small></small><br/>粮油</a><a href="chudian.html"><small></small><br/>厨电</a><a href="all.html"><small></small><br/>全部</a>
      </div>
      <div class="good">
        <p>
          为您优选好物
          <a href="good.html">更多</a>
        </p>
        <dl>
          <dt><img src="image/28.jpg" alt=""></dt>
          <dd>
            <h3>宋桂芳干豆角100g</h3>
            <h4>¥9.9 <span>剩余30件</span></h4>
          </dd>
        </dl>
        <dl>
          <dt><img src="image/29.jpg" alt=""></dt>
          <dd>
            <h3>宋桂芳干豆角100g</h3>
            <h4>¥9.9 <span>剩余30件</span></h4>
          </dd>
        </dl>
        <dl>
          <dt><img src="image/30.jpg" alt=""></dt>
          <dd>
            <h3>宋桂芳干豆角100g</h3>
            <h4>¥9.9 <span>剩余30件</span></h4>
          </dd>
        </dl>
        <dl>
          <dt><img src="image/28.jpg" alt=""></dt>
          <dd>
            <h3>宋桂芳干豆角100g</h3>
            <h4>¥9.9 <span>剩余30件</span></h4>
          </dd>
        </dl>
        <dl>
          <dt><img src="image/29.jpg" alt=""></dt>
          <dd>
            <h3>宋桂芳干豆角100g</h3>
            <h4>¥9.9 <span>剩余30件</span></h4>
          </dd>
        </dl>
        <dl>
          <dt><img src="image/30.jpg" alt=""></dt>
          <dd>
            <h3>宋桂芳干豆角100g</h3>
            <h4>¥9.9 <span>剩余30件</span></h4>
          </dd>
        </dl>

      </div>
    </div>
  </section>
</div>
  </div>
</template>

<script>
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
.header2 {
  width: 100%;
  height: 2rem;
  background: #fff;
  position: relative;
  z-index: 9999; }
  .header2 a:nth-of-type(1) {
    position: absolute;
    width: .73rem;
    height: .51rem;
    background: url(image/18.jpg) no-repeat;
    background-size: contain;
    left: .3rem;
    top: 50%;
    margin-top: -.25rem; }
  .header2 p {
    width: 6.28rem;
    height: .88rem;
    margin-top: .6rem;
    margin-left: 1.32rem;
    background: #F5F5F5;
    border-radius: 10px;
    overflow: hidden;
    position: relative; }
    .header2 p input[type="text"] {
      border: none;
      width: 100%;
      height: 100%;
      background: #F5F5F5;
      padding-left: 1rem;
      font-size: .4rem; }
    .header2 p span {
      position: absolute;
      left: .33rem;
      top: .15rem;
      font-size: 0; }
    .header2 p span:before {
      font-family: "iconfont";
      content: "\e797";
      font-size: 0.5rem;
      color: #999999; }
  .header2 a:nth-of-type(2) {
    position: absolute;
    width: .74rem;
    height: .60rem;
    background: url(image/19.jpg) no-repeat;
    background-size: contain;
    left: 8.18rem;
    top: 50%;
    margin-top: -.3rem; }
  .header2 a:nth-of-type(3) {
    position: absolute;
    width: .71rem;
    height: .51rem;
    background: url(image/20.jpg) no-repeat;
    background-size: contain;
    left: 9.65rem;
    top: 50%;
    margin-top: -.25rem; }

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

/*------------------------mall---------------------------------*/
#mall {
  background: #F8F8F8; }
  #mall .swiper-container {
    width: 100%;
    height: 3.74rem; }
    #mall .swiper-container ul {
      width: 300%;
      height: 3.74rem;
      font-size: 0;
      display: -webkit-box; }
      #mall .swiper-container ul li {
        width: 100%;
        height: 100%; }
        #mall .swiper-container ul li img {
          width: 10.8rem;
          height: 3.74rem;
          float: left; }
  #mall .m_list {
    width: 100%;
    background: #fff;
    height: 1.98rem;
    margin-top: .72rem;
    border-bottom: 1px solid #ccc;
    font-size: 0;
    padding-top: .1rem; }
    #mall .m_list a {
      display: inline-block;
      text-align: center;
      font-size: .41rem;
      width: 16.6%;
      height: 100%;
      color: #333333; }
      #mall .m_list a small {
        width: .61rem;
        height: .57rem;
        background: url(image/22.jpg) no-repeat;
        background-size: contain;
        display: inline-block;
        margin-bottom: .28rem; }
    #mall .m_list a:nth-of-type(2) small {
      width: .61rem;
      height: .67rem;
      background: url(image/23.jpg) no-repeat;
      background-size: contain;
      display: inline-block; }
    #mall .m_list a:nth-of-type(3) small {
      width: .75rem;
      height: .57rem;
      background: url(image/24.jpg) no-repeat;
      background-size: contain;
      display: inline-block; }
    #mall .m_list a:nth-of-type(4) small {
      width: .42rem;
      height: .62rem;
      background: url(image/25.jpg) no-repeat;
      background-size: contain;
      display: inline-block; }
    #mall .m_list a:nth-of-type(5) small {
      width: .64rem;
      height: .53rem;
      background: url(image/26.jpg) no-repeat;
      background-size: contain;
      display: inline-block; }
    #mall .m_list a:nth-of-type(6) small {
      width: .64rem;
      height: .53rem;
      background: url(image/27.jpg) no-repeat;
      background-size: contain;
      display: inline-block; }
  #mall .good {
    width: 100%;
    padding: 0.6rem .3rem; }
    #mall .good p {
      width: 100%;
      height: .54rem;
      border-left: 6px solid #FF4C38;
      font-size: .5rem;
      padding-left: .32rem; }
      #mall .good p a {
        padding-left: 5.27rem;
        color: #FF4C38;
        background: url(image/31.jpg) no-repeat right center;
        background-size: contain;
        padding-right: .37rem;
        font-size: .4rem; }
    #mall .good dl {
      width: 3.25rem;
      margin-top: .58rem;
      display: inline-block;
      height: 5.35rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-right: .1rem; }
      #mall .good dl dt {
        width: 3.22rem;
        height: 3.22rem; }
        #mall .good dl dt img {
          width: 3.22rem;
          height: 3.22rem; }
      #mall .good dl:nth-of-type(3) {
        margin-right: 0; }
      #mall .good dl:nth-of-type(6) {
        margin-right: 0; }
      #mall .good dl dd {
        padding-left: .19rem;
        padding-top: .29rem; }
        #mall .good dl dd h3 {
          font-size: .33rem; }
        #mall .good dl dd h4 {
          font-size: .3rem;
          color: #FF4C38;
          padding-top: .28rem; }
          #mall .good dl dd h4 span {
            padding-left: .42rem;
            font-size: .25rem; }
</style>
