import Dialog from 'vux/dist/components/dialog'
//console.log(Dialog)检测是否引入成功，为一个对象
import Alert from 'vux/dist/components/alert'
import Pull from 'vux/dist/components/scroller'

const Ui = {
	
	install(Vue){
		Vue.component('dialog',Dialog)
		Vue.component('alert',Alert)
		Vue.component('scroller',Pull)
	}
}
module.exports=Ui