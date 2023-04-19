<template>
  <div class="parent-div">
  <div class="grid-container">
    <!-- 生成 20 个子元素，每个子元素包含一个图片 -->
    <!-- 注意：此处图片路径需根据实际情况进行修改 -->
    <div class="child-div" v-for="index in 20" :key="index">
      <img src="../assets/cards/1.png" alt="Image ${index}">
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.parent-div {
  width: 1300px;
  height: 720px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 列，每列占据 1fr 的宽度 */
  grid-template-rows: repeat(4, 1fr); /* 4 行，每行占据 1fr 的高度 */
  gap: 0; /* 无间隔 */
  width: 100%;
  height: 100%;
}

.child-div {
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.child-div img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 使用 object-fit: cover 属性，保持图片比例并填满子元素 */
}

/* img {
  width: 30%;
  height: auto;
} */
</style>
