<template>
    <div>
      <h1>Main Page</h1>
      <p>Welcome!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
