import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import VueDateFns from 'vue-date-fns'

Vue.config.productionTip = false
Vue.use(VueDateFns)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
