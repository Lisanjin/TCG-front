// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'


/* eslint-disable */ 

Vue.config.productionTip = false

new Vue({
  el: '#App',
  router,
  components: { App},
  template: '<App/>'
})

