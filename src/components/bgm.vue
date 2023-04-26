<template>
    <div>
      <h2 onclick="play()">bgm</h2>
      <!-- <audio :src='"../assets/bgm/lightborn.mp3"' id="audio" autoplay=""></audio> -->
    </div>
  </template>

<script>
import sound from '../assets/bgm/lightborn.mp3'
var audio = new Audio(sound)
audio.play()


export default {
  props: {
    bgmsrc: {
      type: String,
      default: '../assets/bgm/lightborn.mp3'
    }},
  mounted () {
    audio.src = console.log(this.bgmsrc)
    audio.play()
  },
  methods: {
    play () {
      audio.play()
    },
    pause () {
      audio.pause()
    }
  }
}

</script>

