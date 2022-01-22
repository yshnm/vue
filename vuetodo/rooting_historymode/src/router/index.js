import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from '../components/PageOne.vue'
import PageTwo from '../components/PageTwo.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: PageOne
    },
    {
      path: '/pagetwo',
      component: PageTwo
    }
  ]
})