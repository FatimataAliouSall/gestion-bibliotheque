<!-- src/views/BooksView.vue -->
<template>
    <div class="container mt-5">
      <h1 class="mb-4">Gestion des Livres</h1>
  
      <book-form
        v-if="isEditing"
        :initialBook="selectedBook"
        :isEditing="true"
        @submit="updateBook"
      />
      <book-form v-else @submit="addBook" />
  
      <book-list
        :books="books"
        @edit-book="editBook"
        @remove-book="removeBook"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import BookForm from '../components/BookForm.vue'
  import BookList from '../components/BookList.vue'
  
  const books = ref([])
  const isEditing = ref(false)
  const selectedBook = ref(null)
  
  const addBook = (book) => {
    books.value.push(book)
  }
  
  const editBook = (book) => {
    selectedBook.value = { ...book }
    isEditing.value = true
  }
  
  const updateBook = (book) => {
    const index = books.value.findIndex(b => b.title === selectedBook.value.title)
    if (index !== -1) {
      books.value[index] = book
    }
    isEditing.value = false
    selectedBook.value = null
  }
  
  const removeBook = (book) => {
    books.value = books.value.filter(b => b !== book)
  }
  </script>
  