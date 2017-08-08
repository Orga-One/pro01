import Vue from 'vue'
import Router from 'vue-router'


import Select from '@/components/select'
import Increment from '@/components/Increment'
import pComponent from '@/components/pComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
       path:'/Increment',
       name:'Increment',
       component:Increment
    },
    {
       path:'/',
       name:'pComponent',
       component:pComponent
    }
  ]
})
