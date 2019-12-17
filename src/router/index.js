import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import Category from '@/views/CategoryNews'
import PieceOfNews from '@/views/PieceOfNews'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/example',
    name: 'pieceOfNews',
    component: PieceOfNews
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
