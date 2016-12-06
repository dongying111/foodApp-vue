<template>
  <div id="list">
      <div class="main">
  <section id="find">
    <div class="scroller">
      <div class="f_top">
        <h2>北京市</h2>
        <h1>发现最热门</h1>
        <div class="a">
          <a href="cai.html"><small></small><br/>食材</a><a href=""><small></small><br/>菜单</a><a href=""><small></small><br/>专题</a><a href=""><small></small><br/>文章</a>
        </div>
      </div>
      <div class="video">
        <h2><span>2016-05-13更新</span>微在涨姿势</h2>
        <img src="image/16.jpg" alt="">
      </div>
      <div class="video">
        <h2><span>2016-05-13更新</span>微在涨姿势</h2>
        <img src="image/16.jpg" alt="">
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
  },
  methods:{
    update:function(){
      this.msg='111111'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*scoped是html5新增的属性，表明style里的样式只在nav页面里有用！*/
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

/*------------------------find---------------------------------*/
#find .f_top {
  width: 100%;
  height: 5.08rem;
  background: url(image/17.jpg) no-repeat;
  background-size: cover;
  position: relative; }
  #find .f_top h2 {
    position: absolute;
    left: .54rem;
    top: .37rem;
    color: #fff;
    font-size: .46rem; }
    #find .f_top h2:after {
      content: "";
      border: .2rem solid transparent;
      border-top-color: #fff;
      position: absolute;
      top: .22rem; }
  #find .f_top h1 {
    width: 100%;
    font-size: .68rem;
    padding-top: 1.19rem;
    text-align: center;
    color: #fff; }
  #find .f_top .a {
    margin-top: 1.1rem;
    width: 100%;
    height: 2.1rem;
    font-size: 0; }
    #find .f_top .a a {
      width: 25%;
      display: inline-block;
      text-align: center;
      color: #fff; }
      #find .f_top .a a small {
        width: 1rem;
        height: 1.02rem;
        display: inline-block;
        background: url(image/11.jpg) no-repeat;
        background-size: contain; }
    #find .f_top .a a:nth-of-type(2) small {
      background: url(image/12.jpg) no-repeat;
      background-size: contain; }
    #find .f_top .a a:nth-of-type(3) small {
      background: url(image/13.jpg) no-repeat;
      background-size: contain; }
    #find .f_top .a a:nth-of-type(4) small {
      background: url(image/14.jpg) no-repeat;
      background-size: contain; }
#find .video {
  width: 100%;
  height: 7.39rem;
  background: #fff;
  padding-left: .3rem;
  padding-top: .45rem;
  padding-right: .27rem; }
  #find .video h2 {
    width: 100%;
    height: 1.08rem;
    background: url(image/15.jpg) no-repeat left center;
    background-size: contain;
    line-height: 1.08rem;
    padding-left: 1.36rem;
    font-size: .4rem; }
    #find .video h2 span {
      float: right;
      color: #9D9D9D;
      font-size: .26rem; }
  #find .video img {
    margin-top: .32rem;
    width: 10.22rem;
    height: 5.67rem; }
</style>
