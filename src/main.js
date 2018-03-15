// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import datatables from 'datatables'
import jquery from 'jquery'
import './assets/css/bootstrap.css'
import './assets/css/datatable.css'
import axios from 'axios'
import util from './utils/config'
axios.defaults.withCredentials=true
import './assets/css/Toast.css'
import Toast from './utils/Toast'

Vue.use(Toast);
Vue.prototype.$http = axios


Vue.use(util)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
