<template>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Genre</th>
          <th>Prix</th>
          <th>Année</th>
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
            <button @click="$emit('edit-book', book)" class="btn btn-warning btn-sm">Modifier</button>
            <button @click="$emit('remove-book', book)" class="btn btn-danger btn-sm">Supprimer</button>  
             <button @click="$emit('details-book', book)" class="btn btn-info btn-sm mx-1">Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    books: {
      type: Array,
      required: true,
    },
  });
  </script>
  