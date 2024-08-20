<template>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <input v-model="loan.memberName" type="text" class="form-control" placeholder="Nom du membre" required />
      </div>
      <div class="mb-3">
        <input v-model="loan.bookTitle" type="text" class="form-control" placeholder="Titre du livre" required />
      </div>
      <div class="mb-3">
        <input v-model="loan.loanDate" type="date" class="form-control" placeholder="Date de prêt" required />
      </div>
      <div class="mb-3">
        <input v-model="loan.returnDate" type="date" class="form-control" placeholder="Date de retour" required />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Modifier Prêt' : 'Ajouter Prêt' }}</button>
    </form>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    initialLoan: {
      type: Object,
      default: () => ({ memberName: '', bookTitle: '', loanDate: '', returnDate: '' }),
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(['submit']);
  
  const loan = ref({ ...props.initialLoan });
  
  watch(() => props.initialLoan, (newLoan) => {
    loan.value = { ...newLoan };
  });
  
  const submitForm = () => {
  emit('submit', loan.value);
  router.push('/prets'); // Redirige vers la liste des prêts après soumission
};


  </script>
  