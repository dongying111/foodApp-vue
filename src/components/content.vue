<template>
  <div class="content">
    <router-view></router-view>
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
    quit:function(){
      this.$router.go('../login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content{
  width:100%;
  height:100%;
}
#btn{
  margin-top: 40px;
}
</style>
