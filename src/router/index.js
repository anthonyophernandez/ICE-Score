import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateTask from '../views/CreateTask.vue'
import EditTask from '../views/EditTask.vue'

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
    component: CreateTask
  },
  {
    path: '/task/:id/edit',
    name: 'EditTask',
    component: EditTask
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
