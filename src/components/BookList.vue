<template>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Identifiant</th>
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
          <td>{{ index + 1 }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.genre }}</td>
          <td>{{ book.prix }}</td>
          <td>{{ book.annee_pub }}</td>
          <td>
            <button @click="$emit('edit-book', book)" class="btn btn-warning btn-sm"><ion-icon
              name="eyedrop"></ion-icon></button>
            <button @click="$emit('remove-book', book)" class="btn btn-danger btn-sm"><ion-icon
              name="trash"></ion-icon></button>  
             <button @click="$emit('detail-book', book)" class="btn btn-info btn-sm mx-1"><ion-icon name="eye"></ion-icon></button>
          </td>
        </tr>
      </tbody>
    </table>
  
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger" id="exampleModalLabel">Informations du livre</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" v-for="(book, index) in books" :key="index">
                        <p>{{ index + 1 }}</p>
                        <p>{{ book.title }}</p>
                        <p>{{ book.author }}</p>
                        <p>{{ book.genre }}</p>
                        <p>{{ book.prix}}</p>
                        <p>{{ book.annee_pub }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>      
    </div>

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
  