<template>
    <div class="container mt-2">
        <h5>Ajoutez un livre : </h5>
        <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
            <div class="col-md-2">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control form-control-sm" name="title" id="title" v-model="title" required>
            </div>
            <div class="col-md-2">
                <label for="author" class="form-label">Auteur</label>
                <input type="text" class="form-control form-control-sm" name="author" id="author" v-model="author" required>
            </div>
            <div class="col-md-3">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control form-control-sm" name="genre" id="genre" v-model="genre" required>
            </div>
            <div class="col-md-3">
                <label for="price" class="form-label">Prix</label>
                <input type="number" class="form-control form-control-sm" name="price" id="price" v-model="price" required>
            </div>
            <div class="col-md-2">
                <label for="year" class="form-label">Annee publication</label>
                <input type="date" class="form-control form-control-sm" name="year" id="year" v-model="year" required>
            </div>
            <div class="col-md-3">
                <button type="submit" class="btn btn-sm btn-info">Ajouter Livre</button>
            </div>
            
        </form>
    </div>

</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['onAdd']);

const title = ref("");
const author = ref("");
const genre = ref("");
const price = ref(0);
const year = ref("");

function onSubmit() {
  const newBook = {
    title: title.value,
    author: author.value,
    genre: genre.value,
    price: parseFloat(price.value), 
    year: new Date(year.value).getFullYear()
  };
  emit('onAdd', newBook);
  clearForm();
}

function clearForm() {
  title.value = "";
  author.value = "";
  genre.value = "";
  price.value = 0;
  year.value = "";
}

</script>


<style scoped> 
 
</style>
