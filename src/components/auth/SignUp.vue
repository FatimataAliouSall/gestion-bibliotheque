<!-- src/components/auth/SignUp.vue -->
<template>
  <div class="signup-container">
    <h1>Inscription</h1>
    <form @submit.prevent="handleSignUp">
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">S'inscrire</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');

function handleSignUp() {
  console.log('Nom:', name.value);
  console.log('Email:', email.value);
  console.log('Mot de passe:', password.value);
}
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
}
</style>
