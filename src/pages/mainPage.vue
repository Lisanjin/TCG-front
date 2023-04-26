<template>
    <div>
      <button @click="logout">Logout</button>
      <!-- <bgm /> -->
      <Story />
    </div>
  </template>

<script>
import Story from '../components/story.vue'
import axios from 'axios'
import bgm from '../components/bgm.vue'


export default {
  components: {
    Story,
    bgm
  },
  methods: {
    logout () {
      axios.post('/api/loginout')
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
