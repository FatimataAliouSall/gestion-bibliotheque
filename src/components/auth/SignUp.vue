<template>
    <div class="container mt-5">
      <h2>Inscription</h2>
      <form @submit.prevent="handleSignUp">
        <div class="mb-3">
          <label for="name" class="form-label">Nom</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name" v-model="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" class="form-control" id="password" placeholder="Enter your password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
//   import { useAuth } from './';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
//   const { signUp } = useAuth();
  
  const handleSignUp = async () => {
    try {
      await signUp(name.value, email.value, password.value);
      router.push('/');
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      
    }
  };
  </script>
  