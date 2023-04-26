<template>
    <div class="mainStoryCard">
      <h2>{{ storyTitle }}</h2>
      <p>{{ abbreviatedStory }}</p>
      <p>{{ fullStory }}</p>
      <br>
      <br>
      <button v-if="showNextButton" @click="nextStory()" class="nextButton">继续</button>

      <div v-for="(select,index) in selectIdList.split(';')" :key="index">
        <Select :selectId = select />
      </div>
    </div>
  </template>

<style scoped>
.mainStoryCard {
  position: relative;
  background-color: #bdb29e;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow:
    0 0 0 2px #807c75,
    0 0 0 4px #bdb29e;
}
.nextButton{
  display: inline-block;
  text-align: center;
  padding: 8px 16px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  box-shadow: 0 3px 2px 0 rgba(0,0,0,.5);
}
</style>

<script>
import axios from 'axios'
import Select from '@/components/select.vue'

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
  components: {
    Select
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
          if (this.selectIdList !== '') {
            console.log(this.selectIdList.split(';'))
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    nextStory () {
      axios.post('/api/moveStory').then(response => {
        if (response.data.code === 200) {
          this.$router.replace({
            path: '/loading', // 空白页的路由地址
            name: 'Loading'
          })
        }
      }
      )
      // this.getStroy()
    }
  },
  mounted () {
    this.getStroy()
  }
}
</script>
