<template>
    <div class="container mt-5">
      <h1 class="mb-4">Gestion des Livres</h1>
      
      <!-- Bouton pour afficher le formulaire -->
      <button @click="toggleForm" v-if="!showForm && !isEditing" class="btn btn-primary mb-3">Ajouter Livre</button>
      
      <!-- Formulaire d'ajout/modification de livre -->
      <book-form
        v-if="showForm || isEditing"
        :initialBook="selectedBook"
        :isEditing="isEditing"
        @submit="handleFormSubmit"
      />
  
      <!-- Liste des livres -->
      <book-list
        :books="books"
        @edit-book="editBook"
        @remove-book="removeBook"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import BookForm from '../components/BookForm.vue';
  import BookList from '../components/BookList.vue';
  
  const books = ref([]);
  const isEditing = ref(false);
  const showForm = ref(false); // Variable pour contrôler l'affichage du formulaire
  const selectedBook = ref(null);
  
  const toggleForm = () => {
    showForm.value = !showForm.value; // Bascule l'affichage du formulaire
  };
  
  const handleFormSubmit = (book) => {
    if (isEditing.value) {
      updateBook(book);
    } else {
      addBook(book);
    }
    showForm.value = false; // Cache le formulaire après la soumission
  };
  
  const addBook = (book) => {
    books.value.push(book);
  };
  
  const editBook = (book) => {
    selectedBook.value = { ...book };
    isEditing.value = true;
    showForm.value = true; // Affiche le formulaire en mode édition
  };
  
  const updateBook = (book) => {
    const index = books.value.findIndex(b => b.title === selectedBook.value.title);
    if (index !== -1) {
      books.value[index] = book;
    }
    isEditing.value = false;
    selectedBook.value = null;
  };
  
  const removeBook = (book) => {
    books.value = books.value.filter(b => b !== book);
  };
  </script>
  