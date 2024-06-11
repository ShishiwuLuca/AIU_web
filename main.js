import App from './App'
// #ifndef VUE3
import Vue from 'vue'

//
import './uni.promisify.adaptor'
import animated from 'animate.css';
Vue.use(animated);
// 滚动动画 wow.js
import {
	WOW
} from 'wowjs'
Vue.prototype.$wow = new WOW({
	boxClass: 'wow', // default
	animateClass: 'animated', // default
	offset: 50, // default
	mobile: true, // default
	live: false,
})

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif