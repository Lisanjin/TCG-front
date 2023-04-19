<template>
    <div>
      <form @submit.prevent="submitForm" class="form-container">
        <label for="storyType">故事类型：</label>
        <select id="storyType" v-model="storyType" required>
          <option value="1">主要</option>
          <option value="2">选择</option>
          <option value="3">类型3</option>
          <option value="4">类型4</option>
        </select>
        <br>
        <label for="storyTitle">故事标题：</label>
        <input type="text" id="storyTitle" v-model="storyTitle" required>
        <br>
        <label for="abbreviatedStory">缩略故事：</label>
        <textarea id="abbreviatedStory" v-model="abbreviatedStory" required></textarea>
        <br>
        <label for="fullStory">完整故事：</label>
        <textarea id="fullStory" v-model="fullStory" required></textarea>
        <br>
        <label for="selectIdList">选择ID列表：</label>
        <input type="text" id="selectIdList" v-model="selectIdList" required>
        <br>
        <label for="toDo">待办事项：</label>
        <input type="text" id="toDo" v-model="toDo" required>
        <br>
        <label for="Spare1">备用字段1：</label>
        <input type="text" id="Spare1" v-model="spare1">
        <br>
        <label for="Spare2">备用字段2：</label>
        <input type="text" id="Spare2" v-model="spare2">
        <br>
        <button type="submit">提交</button>
      </form>
    </div>
  </template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      storyType: null,
      storyTitle: '',
      abbreviatedStory: '',
      fullStory: '',
      selectIdList: '',
      toDo: '',
      spare1: '0',
      spare2: '0'
    }
  },
  methods: {
    submitForm () {
      // 构造表单数据
      const formData = new FormData()
      formData.append('storyType', this.storyType)
      formData.append('storyTitle', this.storyTitle)
      formData.append('abbreviatedStory', this.abbreviatedStory)
      formData.append('fullStory', this.fullStory)
      formData.append('selectIdList', this.selectIdList)
      formData.append('toDo', this.toDo)
      formData.append('spare1', this.spare1)
      formData.append('spare2', this.spare2)

      // 使用axios发送POST请求提交表单数据
      axios.post('api/addStory', formData)
        .then(response => {
          // 处理成功响应
          console.log(response.data)
          this.resetForm()
        })
        .catch(error => {
          // 处理错误响应
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.form-container {
  background-color: #ffffff;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

textarea#abbreviatedStory,
textarea#fullStory {
  width: 100%;
  height: 200px;
  resize: vertical;
}

select,
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

/* 可根据需求自行调整样式 */
</style>
