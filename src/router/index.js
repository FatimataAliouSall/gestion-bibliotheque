import { createRouter, createWebHistory } from 'vue-router';
import Pret from '../components/prets/Pret.vue';
import BookView from '../components/livres/BookView.vue';
import MemberView from '../components/membres/MemberView.vue';
import SignIn from '../components/auth/SignIn.vue';
import SignUp from '../components/auth/SignUp.vue';



const routes = [
  { path: '/', component: MemberView },
  { path: '/prets', component: Pret },
  { path: '/livre', component: BookView},
  { path: '/membres', component: MemberView },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
