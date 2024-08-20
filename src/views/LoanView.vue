<template>
  <div class="container mt-5">
    <h1 class="mb-4">Gestion des Prêts</h1>
    
    <button @click="toggleForm" v-if="!showForm && !isEditing" class="btn btn-primary mb-3">Ajouter Prêt</button>
    
    <loan-form
      v-if="showForm || isEditing"
      :initialLoan="selectedLoan"
      :isEditing="isEditing"
      @submit="handleFormSubmit"
    />

    <loan-list
      :loans="loans"
      @edit-loan="editLoan"
      @remove-loan="removeLoan"
      @details-loan="detailsLoan"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoanForm from '../components/LoanForm.vue';
import LoanList from '../components/LoanList.vue';

const loans = ref([]);
const isEditing = ref(false);
const showForm = ref(false);
const selectedLoan = ref(null);

const toggleForm = () => {
  showForm.value = !showForm.value;
};

const handleFormSubmit = (loan) => {
  if (isEditing.value) {
    updateLoan(loan);
  } else {
    addLoan(loan);
  }
  showForm.value = false;
};

const addLoan = (loan) => {
  loans.value.push(loan);
};

const editLoan = (loan) => {
  selectedLoan.value = { ...loan };
  isEditing.value = true;
  showForm.value = true;
};

const updateLoan = (loan) => {
  const index = loans.value.findIndex(l => l.item === selectedLoan.value.item);
  if (index !== -1) {
    loans.value[index] = loan;
  }
  isEditing.value = false;
  selectedLoan.value = null;
};

const removeLoan = (loan) => {
  loans.value = loans.value.filter(l => l !== loan);
};

const detailsLoan = (loan) => {
  alert(`Détails du prêt:\nEmprunteur: ${loan.borrower}\nArticle: ${loan.item}\nDate du Prêt: ${loan.loanDate}\nDate de Retour: ${loan.returnDate}`);
};
</script>
