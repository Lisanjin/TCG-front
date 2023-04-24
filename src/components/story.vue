<template>
    <div class="mainStoryCard">
      <p>{{ storyId }}</p>
      <h2>{{ storyTitle }}</h2>
      <p>{{ abbreviatedStory }}</p>
      <p>{{ fullStory }}</p>
      <p>{{ toDo }}</p>
      <button v-if="showNextButton" @click="nextStory()">继续</button>
    </div>
  </template>

<style scoped>
.mainStoryCard {
  background-color: #ffffff;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}
</style>

<script>
import axios from 'axios'

export default {
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
        .get('/api/getStory')
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
        })
        .catch(error => {
          console.log(error)
        })
    },
    nextStory () {
      axios.post('/api/moveStory')
      this.getStroy()
    }
  },
  mounted () {
    this.getStroy()
  }
}
</script>
