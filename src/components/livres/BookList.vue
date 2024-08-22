<template>
    <div class="container">
        <table class="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>Identifiant</th>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Genre</th>
                    <th>Prix</th>
                    <th>Annee publication</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, index) in books" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.author}}</td>
                    <td>{{ book.genre }}</td>
                    <td>{{ book.price }}</td>
                    <td>{{ book.year }}</td>

                    <td class="col-md-2">
                        <button class="btn btn-xs btn-danger" @click="destroyBook(index)"><ion-icon name="trash"></ion-icon></button>
                        <button class="btn btn-xs btn-primary" @click="editBook(index)"><ion-icon
                            name="eyedrop"></ion-icon></button>
                        <button class="btn btn-xs btn-success" data-bs-toggle="modal"
                         data-bs-target="#exampleModal" @click="viewBook(book)"><ion-icon name="eye"></ion-icon></button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-black" id="exampleModalLabel">Informations du details livre</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Titre : {{ bookShow?.title}}</p>
                        <p>Auteur : {{ bookShow?.author}}</p>
                        <p>Genre : {{ bookShow?.genre}}</p>
                        <p>Prix : {{ bookShow?.price}}</p>
                        <p>Annee : {{ bookShow?.year}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['onRemove', 'onEdit']);

const props = defineProps({
  books: {
    type: Array,
    required: true,
  }
});

function destroyBook(index) {
  emit('onRemove', index);
}

function editBook(index) {
  emit('onEdit', index);
}

const bookShow = ref(null);
function viewBook(book) {
  bookShow.value = book;
}
</script>

<style scoped>
</style>
