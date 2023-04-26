<template>
    <div class="login-register" @click="playbgm()">
      <!-- <bgm /> -->
      <div class="tab">
        <span class="tab-item" :class="{ active: activeTab === 'login' }" @click="changeTab('login')"><h2>登录</h2></span>
        <span class="tab-item" :class="{ active: activeTab === 'register' }" @click="changeTab('register')"><h2>注册</h2></span>
      </div>
      <div class="form">
        <div v-show="activeTab === 'login'">
          <!-- 登录表单 -->
          <form @submit.prevent="login">
            <!-- 输入用户名和密码的表单项 -->
            <input type="text" v-model="loginForm.userEmail" placeholder="邮箱" />
            <input type="password" v-model="loginForm.userPassword" placeholder="密码" />
            <!-- 登录按钮 -->
            <button type="submit">登录</button>
          </form>
        </div>
        <div v-show="activeTab === 'register'">
          <!-- 注册表单 -->
          <form @submit.prevent="register">
            <!-- 输入用户名、密码和确认密码的表单项 -->
            <input type="text" v-model="registerForm.userEmail" placeholder="邮箱" />
            <input type="password" v-model="registerForm.userPassword" placeholder="密码" />
            <!-- 注册按钮 -->
            <button type="submit">注册</button>
          </form>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios'
import AddStory from '../pages/addStory.vue'
import bgm from '../components/bgm.vue'

export default {
  name: 'Login',
  data () {
    return {
      activeTab: 'login',
      loginForm: {
        userEmail: '',
        userPassword: ''
      },
      registerForm: {
        userEmail: '',
        userPassword: ''
      }
    }
  },
  components: {
    AddStory,
    bgm
  },
  methods: {
    changeTab (tab) {
      this.activeTab = tab
    },
    login () {
      // 处理登录逻辑
      // 使用 this.loginForm.username 和 this.loginForm.password 获取表单数据
      axios.get('/api/login', {params: this.loginForm,
        withCredentials: true })
        .then(response => {
          console.log(response.data)
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data)
            this.$router.push({ name: 'main' })
          } else {
            alert('登录失败')
          }
        })
    },
    register () {
      // 处理注册逻辑
      // 使用 this.registerForm.username、this.registerForm.password 和 this.registerForm.confirmPassword 获取表单数据
      axios.get('/api/register', {params: this.registerForm,
        withCredentials: true })
        .then(response => {
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data)
            alert('注册成功')
            this.$router.push({ name: 'main' })
          } else {
            alert('注册失败')
          }
        })
    }
  }
}
</script>

<style scoped>
.login-register {
  /* 居中对齐容器 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form {
  /* 表单容器样式 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* 设置表单容器的宽度 */
}

h2 {
  /* 标题样式 */
}

.tab {
   /* 相对form上移5px */
    margin-top: -27px;
}

form {
  /* 表单样式 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  /* 输入框样式 */
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.tab-item {
  /* 定义普通状态下的样式 */
  /* 可以根据需要自行调整 */
}

.tab-item.active {
  /* 定义活动状态下的样式 */
  fontSize: 2rem;
  color: #ffffff;
  /* 可以根据需要自行调整 */
}
</style>
