<template>
    <div class="container mt-5">
      <h1 class="mb-4">Gestion des Prêts</h1>
  
      <!-- Bouton pour afficher le formulaire -->
      <button @click="toggleForm" v-if="!showForm && !isEditing" class="btn btn-primary mb-3">Ajouter Prêt</button>
  
      <!-- Formulaire d'ajout/modification de prêt -->
      <loan-form
        v-if="showForm || isEditing"
        :initialLoan="selectedLoan"
        :isEditing="isEditing"
        @submit="handleFormSubmit"
      />
  
      <!-- Liste des prêts -->
      <loan-list
        :loans="loans"
        @edit-loan="editLoan"
        @remove-loan="removeLoan"
        @details-loan="viewLoanDetails"
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
    const index = loans.value.findIndex(l => l.id === selectedLoan.value.id);
    if (index !== -1) {
      loans.value[index] = loan;
    }
    isEditing.value = false;
    selectedLoan.value = null;
  };
  
  const removeLoan = (loan) => {
    loans.value = loans.value.filter(l => l !== loan);
  };
  
  const viewLoanDetails = (loan) => {
    alert(`Détails du prêt : \n\nNom du membre : ${loan.memberName}\nTitre du livre : ${loan.bookTitle}\nDate de prêt : ${loan.loanDate}\nDate de retour : ${loan.returnDate}`);
  };
  </script>
  