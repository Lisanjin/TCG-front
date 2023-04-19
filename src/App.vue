<script>
/* eslint-disable */ 
export default {
  name: 'app',
  data () {
    return {
      data: 123
    }
  }
}
</script>
<style>
      body {
        /* 设置背景图片，居中显示，不重复，固定位置 */
        background: url('./assets/bg1.png') no-repeat center center fixed; 
        background-size: 100% 100%;
      }
</style>

<template>
  <div>
    <!-- <img src="http://112.124.6.202:8080/cards/100103.png" /> -->
    <!-- <h1>{{ data }}</h1> -->
    <!-- <Menu /> -->
    <router-view></router-view>
    <!-- <AddStory /> -->
  </div>
</template>