import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 作为插件导进来

//定义一个容器

let store = new Vuex.Store({ // store方法中进行状态及状态变化时写的方法的管理
	state: { // 不能直接操作改变state  响应式的 （状态改变 页面变化）
		count: 100
	},
	mutations: { // 状态改变事件触发的回调函数
		// addIncrement(state,n) { // 用来改变状态的 
		// 	// 传参时 传单个参数 可以直接传，多个参数时，以对象的 形式传参
		// 	state.count +=n;
		// },

		//对应Increment.vue中第二种提交mutation的方法如下
		addIncrement(state,payload){
			state.count+=payload.add;
		},
		delIncrement(state,payload){
			state.count-=payload.m;
		}


		//  进一步  设置延迟
		// delIncrement(state,payload){  // mutation 必须是同步的 异步的 页面变化 但state不变
		// 	setTimeout(() => { //设置延迟 （异步）有异步操作放到Actions中
		// 		state.count-=payload.m;
		// 	},1000)
		// }
	},
	actions: {
		addAction(context){ // context是一个对象 里面包含着和store实例一样的方法
			
			setTimeout(() => {
				// 改变状态 提交mutations
				context.commit('delIncrement', {m:3})
				context.dispatch("textAction", {test: '测试'})
			},1000)
		},
		textAction(context,obj){
			console.log("我被触发了")
			console.log(obj)
		}
	}
})

export default store  //把实例导入出去