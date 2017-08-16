<template lang="html">
  <div class="">
    用户
    <div class="userList">
      <!-- <router-link style="padding-right:15px;"key="index" v-for="item,index in userList" :to="'/user/'+item.tip+'/'+item.id">{{item.userName}}</router-link> -->
      <router-link style="padding-right:15px;"key="index" v-for="item,index in userList"
      :to="{ path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}">{{item.userName}}</router-link>
    </div>
    <div class="user-info" style="font-size:20px;" v-if="userInfo.userName">
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
    <div class="info-list" style="font-size:20px;" v-if="userInfo.userName">
      <!--查询字符串的使用  -->
      <!-- 方式1 -->
      <!-- <router-link exact to="?info=follow">ta的关注</router-link>
      <router-link exact to="?info=share">ta的分享</router-link> -->
      <!-- 方式2  path为''代表当前路径-->
      <router-link exact :to="{ path: '', query: {info: 'follow'} }">ta的关注</router-link>
      <router-link exact :to="{ path: '', query: {info: 'share'} }">ta的分享</router-link>
      <div class="">
        {{$route.query}}
      </div>
    </div>
  </div>
</template>

<script>
  let data= [
    {
      id:'1',
      tip:'vip',
      userName:'lei',
      sex: '男',
      hobby: 'baseball'
    },
    {
      id:'2',
      tip:'vip',
      userName:'joe',
      sex: '男',
      hobby: 'reading'
    },
    {
      id:'3',
      tip:'common',
      userName:'Michael',
      sex: '男',
      hobby: 'basketball'
    }
  ]
export default {
  data() {
    return {
      userList: data,
      userInfo: {}
    }
  },
  watch:{ //监控路由信息对象 路径发生一旦变化就会产生一个新的路由对象
    $route(){
      //路径发生变化 $route会重新赋值 进啊空了这个属性 会执行这个函数 拿到userId
      this.getData();
    }
  },
  created(){
    // 开始复用组件时会调用 一次生命周期函数  复用这个组件 这个函数不是再次调用了，地址一旦发生变化，$route会重新生成一个路由信息对象
     //执行一次 当再次切换组件的时候不会执行 开始拿不到userId 通过监听路由对象变化的方式去得到userId
    this.getData();
  },
  methods:{
    getData(){
      let id=this.$route.params.userId; //$route里面存着当前激活的路由信息对象
      if(id){
        this.userInfo = this.userList.filter((item) =>{
          return item.id == id
        })[0]
      }else {
        this.userInfo = {};
      }
    }
  }
}
</script>

<style lang="css">
</style>
