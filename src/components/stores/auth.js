import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const user = ref(null);

  const signUp = (name, email, password) => {
    // Simuler l'inscription et sauvegarder l'utilisateur
    const newUser = { name, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    user.value = newUser;
    router.push('/');
  };

  const signIn = (email, password) => {
    // Vérifier si l'utilisateur existe dans le localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      user.value = storedUser;
      router.push('/');
    } else {
      throw new Error('Email ou mot de passe incorrect');
    }
  };

  const signOut = () => {
    user.value = null;
    localStorage.removeItem('user');
    router.push('/signin');
  };

  // Récupérer l'utilisateur au démarrage si présent dans localStorage
  if (localStorage.getItem('user')) {
    user.value = JSON.parse(localStorage.getItem('user'));
  }

  return { user, signUp, signIn, signOut };
});
