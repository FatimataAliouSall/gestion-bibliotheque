import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'


const routes = [
  { path: '/', redirect: '/livres' },
  { path: '/livres', component: BooksView },
  // Ajoutez des routes pour MembersView et LoansView ici
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
