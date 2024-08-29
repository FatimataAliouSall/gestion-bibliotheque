<template>
  <div class="container mt-5">
    <h2>Connexion</h2>
    <form @submit.prevent="handleSignIn">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();

const handleSignIn = async () => {
  try {
    await authStore.signIn(email.value, password.value);
  } catch (error) {
    console.error('Erreur de connexion:', error);
  }
};
</script>
