import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
