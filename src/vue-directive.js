import Vue from 'vue'
import $ from 'jquery'
Vue.directive('demo',{
	bind:function(){
		//console.log($)是jquery的对象
		console.log('this is bind')
		//console.log(this.vm.msg)
		//console.log(this.el)//检测绑定此指令的是什么元素
		$(this.el).find("li").on("click",function(){
			console.log($(this).html()+newVal)
		})

	},
	update:function(newVal,oldVal){
		console.log(newVal)
		console.log(oldVal)
		
	},
	umbind:function(){

	}
})
//还可以继续往下写多个指令
// Vue.directive('demo2',{
// 	bind:function(){
// 		//console.log($)是jquery的对象
// 		console.log('this is bind')
// 		//console.log(this.vm.msg)
// 		//console.log(this.el)//检测绑定此指令的是什么元素
// 		$(this.el).find("li").on("click",function(){
// 			console.log($(this).html()+newVal)
// 		})

// 	},
// 	update:function(newVal,oldVal){
// 		console.log(newVal)
// 		console.log(oldVal)
		
// 	},
// 	umbind:function(){

// 	}
// })