// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
// Importez les autres vues comme MembersView et LoansView si nécessaires

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
