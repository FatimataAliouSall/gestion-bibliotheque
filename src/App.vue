<template>
  <div class="container-fluid p-0">
    <Navbar />
    <router-view />
  </div>
</template>
<script setup>
import Membre from './components/membres/MemberView.vue'
import Pret from './components/prets/Pret.vue'
import BookView from './components/livres/BookView.vue'
import Navbar from './components/Navbar.vue';
</script>

<style scoped>

</style>


