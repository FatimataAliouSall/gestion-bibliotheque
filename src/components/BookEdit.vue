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
      <button type="submit" class="btn btn-sm mt-4 btn-primary">Enregistrer les modifications</button>
      <button @click="cancelEdit" type="button" class="btn btn-secondary">Annuler</button>
    </form>
  </div>
</template>

<script>
const defaultBook = { title: '', author: '', genre: '', prix: '', annee_pub: '' };

export default {
  props: {
    initialBook: {
      type: Object,
      default: () => defaultBook,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

// Utilisation des props définies dans le script normal
const props = defineProps();
const emits = defineEmits(['submit', 'cancel-edit']);

// Copie de l'objet livre pour l'édition
const editedBook = ref({ ...props.initialBook });

// Met à jour editedBook lorsque les props changent
watch(() => props.initialBook, (newBook) => {
  editedBook.value = { ...newBook };
});

// Émet l'événement pour mettre à jour le livre
const submitEditForm = () => {
  emits('submit', editedBook.value);
};

// Annuler l'édition et émettre l'événement d'annulation
const cancelEdit = () => {
  emits('cancel-edit');
};
</script>
