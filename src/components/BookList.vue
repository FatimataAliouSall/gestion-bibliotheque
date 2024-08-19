<!-- src/components/BookList.vue -->
<template>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Genre</th>
            <th>Prix</th>
            <th>Année publication</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.genre }}</td>
            <td>{{ book.prix }}</td>
            <td>{{ book.annee_pub }}</td>
            <td>
              <button @click="$emit('edit-book', book)" class="btn btn-warning btn-sm mx-1">Modifier</button>
              <button @click="$emit('remove-book', book)" class="btn btn-danger btn-sm mx-1">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    books: Array,
  })
  
  const emits = defineEmits(['edit-book', 'remove-book'])
  </script>
  