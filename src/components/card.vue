<template>
  <div class="card">
    <img :src="imageUrl" alt="Card Image" class="card-image">
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 10px;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}
</style>
