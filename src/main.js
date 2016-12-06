import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
//console.log(vueRouter)
/* eslint-disable no-new */
import ConfigRoute from './config-router'
import ConfigUi from './config-ui'
import vueDirective from './vue-directive'
import vueSource from 'vue-resource'
import './assets/reset.css'//引入全局的css
console.log(vueSource)

//console.log(ConfigUi)//经观察发现我们得到的是一个组件，所以得先注册才能使用

Vue.use(VueRouter)
Vue.use(ConfigUi)
Vue.use(vueSource)


let router=new VueRouter()

ConfigRoute(router)

router.start(App,"#apps")
// new Vue({
// 	el:'body',
// 	components:{App}
// })
