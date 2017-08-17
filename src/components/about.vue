<template lang="html">
  <div >
      关于我
      <hr>
      <ul class="nav">
        <router-link :to="{name:'about'}" tag="li" exact><a>study</a></router-link>
        <router-link :to="{name: 'work'}" tag="li"><a>work</a></router-link>
        <router-link :to="{name: 'hobby'}" tag="li"><a>hobby</a></router-link>
      </ul>
      <router-view></router-view>
      <p>测试当前test的值 :{{test}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      test:'改变前'
    }
  },
  beforeCreate(){ //执行组件时第一个钩子函数
    console.log('beforeCreate')
  },
  beforeRouteEnter(to,from,next){ //在组件中写路由钩子函数   它的执行先于beforeCreate 执行的时候组件实例还没创建 因此this为undefined 此时通过在next中写一个回调 通过vm参数得到当前实例 进而去改变test的值
    console.log('beforeRouteEnter')
    console.log(this,'this')
    next((vm) =>{
      vm.test='改变了'
    })
  },
  beforeRouteUpdate(to,from,next){ //切换二级导航的时候触发
    next();
    console.log("beforeRouteUpdate");
  },
  beforeRouteLeave(to,from,next){ //当导航里的操作执行完毕要离开导航的时候执行的操作
    next();
  }
}
</script>

<style lang="css>
</style>
