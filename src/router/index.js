import { createRouter, createWebHistory } from 'vue-router';
import BooksView from '../views/BooksView.vue';
import MembersView from '../views/MembersView.vue';
import LoanView from '@/views/LoanView.vue';
import LoanForm from '@/components/LoanForm.vue'; 
import LoanEdit from '../components/LoanEdit.vue';

const routes = [
  { path: '/', redirect: '/livres' },
  { path: '/livres', component: BooksView },
  { path: '/membres', component: MembersView },
  {
    path: '/prets',
    name: 'Prets',
    component: LoanView
  },
  {
    path: '/prets/ajout',
    name: 'AddLoan',
    component: LoanForm,
  },
  {
    path: '/prets/modifier',
    name: 'LoanEdit',
    component: LoanEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
