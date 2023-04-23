<template>
    <div>
      <button @click="logout">Logout</button>
      <Story storyId="1"/>
    </div>
  </template>

<script>
import Story from '../components/story.vue'

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
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
