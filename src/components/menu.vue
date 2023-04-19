<template>
  <div>
    <div @click="showIcons">
      <img class="menu_icon" src="../assets/home.png">
    </div>
    <div v-if="isShowingIcons" class="icon-container">
      <img class="menu_icon" v-for="(icon, index) in menu_icon_list" :key="index" :src="getIconUrl(icon)"
        @click="doMenu(icon)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      isShowingIcons: false, // 控制新 icon 是否显示的状态
      menu_icon_list: ['home', 'gacha', 'setting', 'account', 'other']
    }
  },
  methods: {
    showIcons () {
      this.isShowingIcons = !this.isShowingIcons // 切换新 icon 的显示状态
    },
    getIconUrl (icon) {
      // 在这里根据图标名称返回对应的图片 URL
      // 例如，假设图标图片在 assets 目录下，并且文件名为图标名称 + ".png"
      return require(`@/assets/${icon}.png`)
    },
    doMenu (icon) {
      if (icon === 'gacha') {
        this.$router.push('/')
      } else {
        alert(icon)
      }
    }
  }
}
</script>

<style>
.menu_icon {
  width: 60px;
  height: 60px;
  margin: 10px;
}

.icon-container {
  display: flex;
  /* 使用 flex 布局 */
  flex-wrap: wrap;
  /* 当图标数量超过一行时自动换行 */
  flex-direction: column;
  /* 垂直方向 */
}</style>


