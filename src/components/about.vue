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
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css>
</style>
