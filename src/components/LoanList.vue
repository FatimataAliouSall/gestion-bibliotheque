<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Emprunteur</th>
        <th>Article</th>
        <th>Date du Prêt</th>
        <th>Date de Retour</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(loan, index) in loans" :key="index">
        <td>{{ loan.borrower }}</td>
        <td>{{ loan.item }}</td>
        <td>{{ loan.loanDate }}</td>
        <td>{{ loan.returnDate }}</td>
        <td>
          <button @click="$emit('edit-loan', loan)" class="btn btn-warning btn-sm"><ion-icon
            name="eyedrop"></ion-icon></button>
          <button @click="$emit('remove-loan', loan)" class="btn btn-danger btn-sm"><ion-icon
            name="trash"></ion-icon></button>
          <button @click="$emit('details-loan', loan)" class="btn btn-info btn-sm mx-1"><ion-icon name="eye"></ion-icon></button>
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
