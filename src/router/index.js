import Vue from  'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '@/components/Home'
import about from '@/components/about'
import document from '@/components/document'
import noFound from '@/components/404'
import user from '@/components/user'

import work from '@/views/work'
import study from '@/views/study'
import hobby from '@/views/hobby'

import slider from '@/views/slider'
let router = new VueRouter({
  mode:'history', //默认是哈希模式（会带一个#）,可以设置成history模式
  linkActiveClass:'is-active',
  scrollBehavior(to, from, savePosition){ // 点击浏览器的前进后退或切换导航时触发 记录滚动行为
    // to 进入的目标路由
    // from 来自的目标路由
    // savePosition 记录滚动条的坐标 记录前进后退的时候那个页面滚动的坐标
    // if(savePosition) {
    //   return savePosition;
    // }else {
    //   return {x:0,y:0}
    // }
    if(to.hash){
      return {
        selector:to.hash
      }
    }
  },
  routes: [
    {
      path:'/',
      component: home
    },
    {
      path:'/home',
      name:'home',
      component: home,
      alias:'/index'
    },
    {
      path:'/about',
      component: about,
      children: [
        {
          path: '/', //默认的子路由  父路由不用起名字 子路由标明即可
          name:'about',
          component: study
        },
        {
          path: '/work', // 字符串的形式就是想当于 /about/work 如果相对于根路径就加上/
          name: 'work',
          component: work
        },
        {
          path: '/hobby',
          name: 'hobby',
          component: hobby
        }
      ]
    },
    {
      path:'/document',
      name:'document',
      // component: document
      //一个路由对应多个组件
      components: {
        default: document,//默认的渲染到没有起名字（没有name）的router-view中
        slider:slider
      }
    },
    {
      path:'*',
      // component: noFound
      // 重定向到存在的路由上去
      // redirect:'/home' //方式1
      // redirect: {path: '/home'} //方式2
      // redirect: {name: 'about'} //方式3
      redirect: (to) => { //方式4 动态设置重定向目标
        if(to.path =='/123') {
          return '/home'
        }else if (to.path =='/456') {
          return {path: '/document'}
        }else{
          return {name :'about'}
        }
        // return '/home' // to 是目标路由对象 访问的路径的路由信息
      }
    },
    {
      path: '/user/:tip?/:userId?', // /use/vip/1 /user/2 /user/vip ?表示可以匹配0次或多次
      component: user
    }
  ]
})

export default router;
