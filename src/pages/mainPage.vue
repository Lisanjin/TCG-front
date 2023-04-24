<template>
    <div>
      <button @click="logout">Logout</button>
      <Story />
    </div>
  </template>

<script>
import Story from '../components/story.vue'
import axios from 'axios'


export default {
  data () {
    return {
      uid: 123
    }
  },
  components: {
    Story
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
