import { createRouter, createWebHistory } from 'vue-router';
import BooksView from '../views/BooksView.vue';
import MembersView from '../views/MembersView.vue';

import LoanList from '../components/LoanList.vue';
import LoanForm from '../components/LoanForm.vue';
import LoanEdit from '../components/LoanEdit.vue';

const routes = [
  { path: '/', redirect: '/livres' },
  { path: '/livres', component: BooksView },
  { path: '/membres', component: MembersView },

  {
    path: '/prets',
    name: 'LoanList',
    component: LoanList,
  },
  {
    path: '/prets/ajout',
    name: 'LoanAdd',
    component: LoanForm,
  },
  {
    path: '/prets/modifier/:id',
    name: 'LoanEdit',
    component: LoanEdit,
    props: true,
  },
  {
    path: '/prets/details/:id',
    name: 'LoanDetails',
    component: LoanEdit,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
