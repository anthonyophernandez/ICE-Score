import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: 'EditTask' */ '../views/EditTask.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
