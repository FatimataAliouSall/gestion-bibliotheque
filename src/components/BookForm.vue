<template>
  <div class="mb-4">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <input v-model="book.title" type="text" class="form-control" placeholder="Titre du book" required />
      </div>

      <div class="mb-3">
        <input v-model="book.author" type="text" class="form-control" placeholder="Auteur du book" required />
      </div>

      <div class="mb-3">
        <input v-model="book.genre" type="text" class="form-control" placeholder="Genre du book" required />
      </div>
      
      <div class="mb-3">
        <input v-model="book.prix" type="number" class="form-control" placeholder="Prix du book" required />
      </div>

      <div class="mb-3">
        <input v-model="book.annee_pub" type="date" class="form-control" placeholder="Année de publication du book" required />
      </div>

      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Modifier book' : 'Ajouter book' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineExpose } from 'vue'

// Définir les props
const props = defineProps({
  initialBook: {
    type: Object,
    default: () => ({
      title: '',
      author: '',
      genre: '',
      prix: '',
      annee_pub: '',
    }),
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['submit'])

const book = ref({ ...props.initialBook })

function edit(book) {
  book.value.title = book.title
  book.value.author = book.author
  book.value.genre = book.genre
  book.value.prix = book.prix
  book.value.annee_pub = book.annee_pub
}

defineExpose({
  edit,
})

const submitForm = () => {
  emits('submit', book.value)
}
</script>
