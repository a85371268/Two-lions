// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import store from './store'
import 'mint-ui/lib/style.css'
import './sass/reset.scss'
Vue.config.productionTip = false
Vue.use(MintUi)
// Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
