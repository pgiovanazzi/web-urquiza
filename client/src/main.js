import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  if (value) {
    moment.locale('es')
    return moment(value).startOf('day').fromNow()
  }
})


Vue.filter('formatDate2', function (value) {
  if (value) {
    moment.locale('es')
    return moment(value).format('L')
  }
})
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')