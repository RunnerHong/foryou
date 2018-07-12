import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHello from '@/components/AppHello'
import AppWorld from '@/components/AppWorld'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'AppHorld',
      component: AppHello
    },
    {
      path: '/world',
      name: 'AppWorld',
      component: AppWorld
    }
  ]
})
