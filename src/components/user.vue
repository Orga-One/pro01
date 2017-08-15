<template lang="html">
  <div class="">
    用户
    <div class="userList">
      <router-link style="padding-right:15px;"key="index" v-for="item,index in userList" :to="'/user/'+item.tip+'/'+item.id">{{item.userName}}</router-link>
    </div>
    <div class="user-info" style="font-size:20px;" v-if="userInfo.userName">
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
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
  created(){ //执行一次
    let id=this.$route.params.userId; //$route里面存着当前激活的路由信息对象
    if(id){
      this.userInfo = this.userList.filter((item) =>{
        return item.id == id
      })[0]
    }
  }
}
</script>

<style lang="css">
</style>
