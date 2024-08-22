<template>
  <div class="container mt-5">
    <h1 class="text-center border-bottom mb-2">Gestion des livres:</h1>

    <BookAdd class="border-bottom pb-4" @onAdd="addBook" />
    <BookList :books="books" class="mt-4" @onRemove="removeBook" @onEdit="selectBook" />
    <BookEdit v-if="selectedBook" :book="selectedBook" @onUpdate="updateBook" @onCancel="clearSelection"/>


    
  </div>

</template>

<script setup>
import BookList from './BookList.vue';
import BookAdd from './BookAdd.vue';
import BookEdit from './BookEdit.vue';
import { ref } from 'vue';

const books = ref([
  { title: 'Le livre 1', author: 'Auteur 1', genre: 'Fiction', price: 100.00, year: 2020 },
  { title: 'Le livre 2', author: 'Auteur 2', genre: 'Fiction', price: 500.00, year: 1999 },
  { title: 'Le livre 3', author: 'Auteur 3', genre: 'Francais', price: 400.00, year: 2010 },
  { title: 'Le livre 4', author: 'Auteur 4', genre: 'Litterature', price: 9.99, year: 2020 },
]);

const selectedBook = ref(null);

function addBook(book) {
  books.value.push(book);
}

function removeBook(index) {
  books.value.splice(index, 1);
}

function selectBook(index) {
  selectedBook.value = books.value[index];
}

function updateBook(updatedBook) {
  const index = books.value.findIndex(book => book.title === selectedBook.value.title);
  if (index !== -1) {
    books.value[index] = updatedBook;
  }
  clearSelection();
}

function clearSelection() {
  selectedBook.value = null;
}
</script>
