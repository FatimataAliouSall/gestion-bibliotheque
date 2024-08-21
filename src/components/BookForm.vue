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

// Définir les propriétés (props) qui seront reçues par le composant
const props = defineProps({
  // Prop initialBook, un objet représentant un livre avec ses détails
  initialBook: {
    type: Object, // Le type de la prop est un objet
    default: () => ({
      title: '',     // Titre du livre
      author: '',    // Auteur du livre
      genre: '',     // Genre du livre
      prix: '',      // Prix du livre
      annee_pub: '', // Année de publication du livre
    }),
  },
  // Prop isEditing, un booléen indiquant si on est en mode édition ou non
  isEditing: {
    type: Boolean, // Le type de la prop est un booléen
    default: false, // Valeur par défaut est false (pas en mode édition)
  },
})

// Définir les événements (emits) que le composant peut émettre
const emits = defineEmits(['submit']) // Le composant peut émettre un événement 'submit'

// Créer une référence réactive pour le livre, initialisée avec les données de initialBook
const book = ref({ ...props.initialBook })

// Fonction pour éditer un livre
function edit(book) {
  // Mise à jour des propriétés du livre réactif avec les valeurs du livre passé en argument
  book.value.title = book.title
  book.value.author = book.author
  book.value.genre = book.genre
  book.value.prix = book.prix
  book.value.annee_pub = book.annee_pub
}

// Expose la fonction 'edit' pour qu'elle soit accessible depuis l'extérieur du composant
defineExpose({
  edit,
})

// Fonction pour soumettre le formulaire
const submitForm = () => {
  // Émettre l'événement 'submit' avec les données du livre en tant que paramètre
  emits('submit', book.value)
}

</script>
