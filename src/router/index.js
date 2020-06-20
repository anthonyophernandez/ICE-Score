import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task/new',
    name: 'CreateTask',
    component: () => import(/* webpackChunkName: 'CreateTask' */ '../views/CreateTask.vue')
  },
  {
    path: '/task/:id/edit',
    name: 'EditTask',
    component: () => import(/* webpackChunkName: 'EditTask' */ '../views/EditTask.vue'),
    beforeEnter: async (to, from, next) => {
      const task = await store.state.tasks.tasks.find(t => t.id === to.params.id)
      if (task !== undefined) {
        next()
      } else {
        next('/')
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
