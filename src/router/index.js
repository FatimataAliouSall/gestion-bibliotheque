import { createRouter, createWebHistory } from 'vue-router';
import Pret from '../components/prets/Pret.vue';
import BookView from '../components/livres/BookView.vue';
import MemberView from '../components/membres/MemberView.vue';

const routes = [
  { path: '/', component: MemberView },
  { path: '/prets', component: Pret },
  { path: '/livre', component: BookView},
  { path: '/membres', component: MemberView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
