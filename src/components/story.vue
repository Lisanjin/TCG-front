<template>
    <div class="mainStoryCard">
      <h2>{{ storyTitle }}</h2>
      <p>{{ abbreviatedStory }}</p>
      <p>{{ fullStory }}</p>
      <p>{{ toDo }}</p>
      <button>继续</button>
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
  props: {
    storyId: {
      type: String
    }
  },
  data () {
    return {
      beginStoryId: null,
      endStoryId: null,
      storyType: null,
      storyTitle: null,
      abbreviatedStory: null,
      fullStory: null,
      selectIdList: null,
      toDo: null
    }
  },
  mounted () {
    axios
      .get('/api/getStory?storyId=' + this.storyId)
      .then(response => {
        const story = response.data.data
        this.storyId = story.storyId
        this.beginStoryId = story.beginStoryId
        this.endStoryId = story.endStoryId
        this.storyType = story.storyType
        this.storyTitle = story.storyTitle
        this.abbreviatedStory = story.abbreviatedStory
        this.fullStory = story.fullStory
        this.selectIdList = story.selectIdList
        this.toDo = story.toDo
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
