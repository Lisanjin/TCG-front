<template>
  <div class="childComponent">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'childComponent',
  data () {
    return {
      msg: 'this is a child component'
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
