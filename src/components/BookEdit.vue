<template>
    <div class="mb-4">
      <h3>Modifier le Livre</h3>
      <form @submit.prevent="submitEditForm">
        <div class="mb-3">
              <input v-model="editedBook.title" type="text" class="form-control" placeholder="Titre du livre" required />
        </div>
  
        <div class="mb-3">
              <input v-model="editedBook.author" type="text" class="form-control" placeholder="Auteur du livre" required />
        </div>
  
        <div class="mb-3">
              <input v-model="editedBook.genre" type="text" class="form-control" placeholder="Genre du livre" required />
        </div>
  
        <div class="mb-3">
            <input v-model="editedBook.prix" type="text" class="form-control" placeholder="Prix du livre" required />
        </div>
  
        <div class="mb-3">
            <input v-model="editedBook.annee_pub" type="text" class="form-control" placeholder="Année de publication du livre" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
        <button @click="cancelEdit" type="button" class="btn btn-secondary">Annuler</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  // Définition des props et émetteurs d'événements
  const props = defineProps({
    book: {
      type: Object,
      required: true,
    }
  })
  
  const emits = defineEmits(['update-book', 'cancel-edit'])
  
  // Copie de l'objet livre pour l'édition
  const editedBook = ref({ ...props.book })
  
  // Met à jour editedBook lorsque les props changent
  watch(() => props.book, (newBook) => {
    editedBook.value = { ...newBook }
  })
  
  // Émet l'événement pour mettre à jour le livre
  const submitEditForm = () => {
    emits('update-book', editedBook.value)
  }
  
  // Annuler l'édition et émettre l'événement d'annulation
  const cancelEdit = () => {
    emits('cancel-edit')
  }
  
  </script>
  