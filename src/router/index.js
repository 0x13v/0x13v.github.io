import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../components/Listview.vue'
import BlogView from '../components/BlogView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: ListView
  },
  
  {
    path: '/blog/:url/:title',
    name: 'blog-view',
    component: BlogView,
    props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
