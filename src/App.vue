<script>
/* eslint-disable */ 
import Menu from './components/menu.vue'
import axios from 'axios'

axios.get('/api/getPackage', { withCredentials: true })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    // 处理错误
  });

export default {
  name: 'app',
  components: {
    Menu
  }
  
}
</script>
<style>
      body {
        /* 设置背景图片，居中显示，不重复，固定位置 */
        background: url('./assets/backgroud.png') no-repeat center center fixed; 
        background-size: 100% 100%;
      }
</style>

<template>
  <div>
    <h1>123</h1>
    <Menu />
  </div>
    
</template>