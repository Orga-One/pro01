// import Vue from 'vue'
// import VueRouter from 'vue-router'
//
// // 作为Vue的插件
// Vue.use(VueRouter)
//
// import App from './App' // 引入模板
// import home from '@/components/Home'
// // 配置路由
// var router = new VueRouter ({ // 得到一个路由实例
//               routes: [
//                 {
//                   path:'/',
//                   component:home
//
//                 }
//               ]
//             })
// //启动应用
// new Vue({
//   el: "#app",
//   router, // 注入路由实例
//   template: '<App />',
//   components: {
//     App
//   }
// })

import Vue from 'vue'
import App from './App'

import router from  '@/router'

//启动应用
new Vue({
  el:'#app',
  router:router,
  template:'<App />',
  components:{
    App
  }

})
