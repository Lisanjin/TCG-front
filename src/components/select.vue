<template>
    <div class="select">
      <h4>{{ storyTitle }}</h4>
      <p>{{ abbreviatedStory }}</p>
      <button v-if="showNextButton" @click="nextStory()" class="nextButton">继续</button>
    </div>
  </template>

<script>
import axios from 'axios'

export default {
  props: {
    selectId: {
      type: String
    }},
  data () {
    return {
      showNextButton: false,
      storyId: null,
      storyType: null,
      storyTitle: null,
      abbreviatedStory: null,
      fullStory: null,
      selectIdList: null,
      toDo: null,
      nextStoryId: null
    }
  },
  methods: {
    eventDo (todoList) {
      let todoListArray = todoList.split(';')
      for (let i = 0; i < todoListArray.length; i++) {
        console.log(todoListArray[i])
        if (todoListArray[i].includes('move')) {
          const regex = /\((\d+)\)/
          this.nextStoryId = regex.exec(todoListArray[i])[1]
          console.log(this.nextStoryId)
          this.showNextButton = true
        }
      }
    },
    getStroy () {
      axios
        .get('/api/getSelect?selectId=' + this.selectId)
        .then(response => {
          const story = response.data.data
          console.log(story)
          this.storyId = story.storyId
          this.storyType = story.storyType
          this.storyTitle = story.storyTitle
          this.abbreviatedStory = story.abbreviatedStory
          this.fullStory = story.fullStory
          this.selectIdList = story.selectIdList
          this.toDo = story.toDo
          if (this.toDo !== '') {
            this.eventDo(this.toDo)
          } else {
            this.showNextButton = false
          }
          if (this.selectIdList !== '') {
            console.log(this.selectIdList.split(';'))
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    nextStory () {
      axios.post('/api/moveSelect?selectId=' + this.selectId).then(response => {
        if (response.data.code === 200) {
          this.$router.replace({
            path: '/loading', // 空白页的路由地址
            name: 'Loading'
          })
        }
      }
      )
    }
  },
  mounted () {
    this.getStroy()
  }
}
</script>

<style scoped>
.select {
  display: flex; /* 设置为弹性容器 */
  flex-direction: column; /* 将子元素排列为一列 */
  justify-content: space-between; /* 将内容左对齐和右对齐之间添加空间 */
  height: 100%; /* 设置高度以将容器扩展到整个父元素 */
}
.nextButton{
  display: inline-block;
  text-align: center;
  padding: 8px 16px;
  box-shadow: 0 3px 2px 0 rgba(0,0,0,.5);
  margin-left: auto;
}
</style>
