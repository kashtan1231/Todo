import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Todo from '../views/Todo.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/',
    name: 'Todo',
    component: Todo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
