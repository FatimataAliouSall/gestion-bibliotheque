<!-- src/components/BookForm.vue -->
<template>
    <div class="mb-4">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
           <input v-model="book.title" type="text" class="form-control" placeholder="Titre du livre" required />
        </div>
  
        <div class="mb-3">
           <input v-model="book.author" type="text" class="form-control" placeholder="Auteur du livre" required />
        </div>
  
        <div class="mb-3">
           <input v-model="book.genre" type="text" class="form-control" placeholder="Genre du livre" required />
        </div>
        <div class="mb-3">
           <input v-model="book.prix" type="number" class="form-control" placeholder="Prix du livre" required />
        </div>
  
        <div class="mb-3">
          <input v-model="book.annee_pub" type="date" class="form-control" placeholder="Année de publication du livre" required />
        </div>
  
        <button type="submit" class="btn btn-primary">{{ isEditing ? 'Modifier Livre' : 'Ajouter Livre' }}</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, watch } from 'vue'
  
  const props = defineProps({
    initialBook: {
      type: Object,
      default: () => ({ title: '', author: '', genre: '', prix: '', annee_pub: '' }),
    },
    
    isEditing: {
      type: Boolean,
      default: false,
    },
  })
  
  const emits = defineEmits(['submit'])
  
  const book = ref({ ...props.initialBook })
  
  watch(() => props.initialBook, (newBook) => {
    book.value = { ...newBook }
  })
  
  const submitForm = () => {
    emits('submit', book.value)
  }
  </script>
  