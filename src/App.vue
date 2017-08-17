<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
      <ul class="firstGrade">
        <li>
          <!-- 该标签会生成a标签 并且阻止了默认跳转的行为 ,而且为哈希模式时会自动加上# 在实际的项目中多用history模式-->
          <!--router-link配置选项 to tag -->
            <!-- <router-link :to="index" event="mouseover" exact>Home</router-link> -->
            <router-link to="/" event="mouseover" exact>Home</router-link>
        </li>
        <li>
          <router-link :to="{path:'/document'}" active-class="activeClass">document</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li>
          <router-link to="/user">user</router-link>
        </li>
      </ul>
    <!-- <router-view name="slider" style="width:100px;height:200px;float:left;border:1px solid green;margin-top:50px"></router-view> -->
    <!--动画的使用  -->
    <!-- mode:in-out out-in 过渡模式 -->
    <transition  :name="names">
        <router-view  class="center" style="width:100%;height:100%;"></router-view>
    </transition>
    <p>当前导航下标{{$route.meta.index}}</p>
    <input type="button" name="" value="退后" @click="backHandel">
    <input type="button" name="" value="前进" @click="forwardHandel">
    <input type="button" name="" value="控制前进/后退步数" @click="goHandel">
    <input type="button" name="" value="往历史记录栈中添加一条" @click="pushHandel">
    <input type="button" name="" value="替换历史记录栈中当前一条" @click="replaceHandel">
  </div>
</template>

<script>
export default {
  name: 'app',
  watch:{
    $route(to ,from){
      console.log(to.meta.index) //目标导航的下标
      console.log(from.meta.index)  // 离开导航下标
      if(to.meta.index<from.meta.index){
        this.names="right";
      }else{
        this.names="left";
      }
    }
  },
  data(){
    return {
      index: '/home',
      names: 'left'
    }
  },
  methods:{
    backHandel(){
      this.$router.back()
    },
    forwardHandel(){
      this.$router.forward()
    },
    goHandel(){
      this.$router.go(-3)// 数字为0时 刷新页面
    },
    pushHandel(){
      // this.$router.push('/document') //写目标链接
      this.$router.push({path:'/document'})
    },
    replaceHandel(){
      this.$router.replace('/about')
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.activeClass{
  background: green;
}
.is-active{
  background: yellow;
}
.center{
  text-align: center;
  position:absolute;
  left: 0;
  top: 400px;
  font-size:18px;
  font-weight:bold;
}
.firstGrade {
  font-size:16px;
  font-weight: bold;
  overflow: hidden;
  margin:0 auto;
  text-align: center;
}
.firstGrade li {
  list-style-type:none;
  float:left;
  margin-right:15px;
  width:300px;
}
.v-enter{
  opacity:0;
}
.v-enter-to{
  opacity:1;
}
.v-enter-active{
  transition: 1s;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 1s;
}
.left-enter{
  transform: translateX(100%);
}
.left-enter-active,.left-leave-active{
  transition:1s;
}
.left-leave-to{
  transform: translateX(-100%);
}
.right-enter{
  transform: translateX(-100%);
}
.right-enter-active,.right-leave-active{
  transition:1s;
}
.right-leave-to{
  transform: translateX(100%);
}
</style>
