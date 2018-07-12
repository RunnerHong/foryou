// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

store.commit('increment')
console.log(store.state.count)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
  // render: h => h(App)
})
