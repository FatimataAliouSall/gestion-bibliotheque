<template>
    <div v-if="book">
      <div class="modal" tabindex="-1" style="display: block;" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modification du livre</h5>
              <button type="button" class="close" @click="cancel" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="title">Titre</label>
                  <input type="text" id="title" class="form-control" v-model="formData.title" required>
                </div>
                <div class="form-group">
                  <label for="author">Auteur</label>
                  <input type="text" id="author" class="form-control" v-model="formData.author" required>
                </div>
                <div class="form-group">
                  <label for="genre">Genre</label>
                  <input type="text" id="genre" class="form-control" v-model="formData.genre" required>
                </div>
                <div class="form-group">
                  <label for="price">Prix</label>
                  <input type="number" id="price" class="form-control" v-model="formData.price" required>
                </div>
                <div class="form-group">
                  <label for="year">Année de publication</label>
                  <input type="date" id="year" class="form-control" v-model="formData.year" required>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Enregistrer</button>
                  <button type="button" class="btn btn-secondary" @click="cancel">Annuler</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, watch, defineEmits, defineProps } from 'vue';
  
  const emit = defineEmits(['onUpdate', 'onCancel']);
  const props = defineProps({
    book: {
      type: Object,
      default: () => ({})
    }
  });
  
  const formData = reactive({
    title: '',
    author: '',
    genre: '',
    price: 0,
    year: ''
  });
  
  watch(() => props.book, (newBook) => {
    if (newBook) {
      formData.title = newBook.title;
      formData.author = newBook.author;
      formData.genre = newBook.genre;
      formData.price = newBook.price;
      formData.year = newBook.year;
    }
  }, { immediate: true });
  
  function onSubmit() {
    emit('onUpdate', { ...formData });
    clearForm();
  }
  
  function cancel() {
    clearForm();
    emit('onCancel');
  }
  
  function clearForm() {
    formData.title = '';
    formData.author = '';
    formData.genre = '';
    formData.price = 0;
    formData.year = '';
  }
  </script>
  
  <style scoped>
  .modal {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  
  .modal-content {
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.3rem;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
  }
  
  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }
  
  .close {
    padding: 0;
    background: none;
    border: 0;
  }
  
  .modal-body {
    padding: 1rem;  
}
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #dee2e6;
  }
  
</style>
  