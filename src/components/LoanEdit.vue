<template>
    <div class="mb-4">
      <h3>Modifier le Prêt</h3>
      <form @submit.prevent="submitEditForm">
        <div class="mb-3">
          <input v-model="editedLoan.memberName" type="text" class="form-control" placeholder="Nom du membre" required />
        </div>
  
        <div class="mb-3">
          <input v-model="editedLoan.bookTitle" type="text" class="form-control" placeholder="Titre du livre" required />
        </div>
  
        <div class="mb-3">
          <input v-model="editedLoan.loanDate" type="date" class="form-control" placeholder="Date de prêt" required />
        </div>
  
        <div class="mb-3">
          <input v-model="editedLoan.returnDate" type="date" class="form-control" placeholder="Date de retour" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
        <button @click="cancelEdit" type="button" class="btn btn-secondary">Annuler</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    loan: {
      type: Object,
      required: true,
    }
  });
  
  const emit = defineEmits(['update-loan', 'cancel-edit']);
  
  const editedLoan = ref({ ...props.loan });
  
  watch(() => props.loan, (newLoan) => {
    editedLoan.value = { ...newLoan };
  });
  
  const submitEditForm = () => {
  emit('update-loan', editedLoan.value);
  router.push('/prets'); // Redirige vers la liste des prêts après soumission
};



  
  const cancelEdit = () => {
    emit('cancel-edit');
  };
  </script>
  