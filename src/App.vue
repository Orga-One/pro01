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
          <router-link :to="{path:'/document#abc'}" active-class="activeClass">document</router-link>
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
    <transition  name="right">
        <router-view  class="center" style="width:100%;height:100%;"></router-view>
    </transition>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'app',
  // created(){
  //   axios({
  //     method:'get',
  //     url:''
  //   })
  // },
  data(){
    return {
      index: '/home'
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
  top: 318px;
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
