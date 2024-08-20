<template>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID du prêt</th>
          <th>Nom du membre</th>
          <th>Titre du livre</th>
          <th>Date de prêt</th>
          <th>Date de retour</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(loan, index) in loans" :key="index">
          <td>{{ loan.id }}</td>
          <td>{{ loan.memberName }}</td>
          <td>{{ loan.bookTitle }}</td>
          <td>{{ loan.loanDate }}</td>
          <td>{{ loan.returnDate }}</td>
          <td>
            <router-link :to="{ name: 'LoanEdit', params: { id: loan.id } }" class="btn btn-warning btn-sm">Modifier</router-link>
            <button @click="$emit('remove-loan', loan)" class="btn btn-danger btn-sm">Supprimer</button>
            <router-link :to="{ name: 'LoanDetails', params: { id: loan.id } }" class="btn btn-info btn-sm mx-1">Détails</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    loans: {
      type: Array,
      required: true,
    },
  });
  </script>
  