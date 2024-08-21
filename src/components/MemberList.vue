<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Email</th>
        <th>Téléphone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(member, index) in members" :key="index">
        <td>{{ member.name }}</td>
        <td>{{ member.email }}</td>
        <td>{{ member.phone }}</td>
        <td>
          <button @click="$emit('edit-member', member)" class="btn btn-warning btn-sm"><ion-icon
            name="eyedrop"></ion-icon></button>
          <button @click="$emit('remove-member', member)" class="btn btn-danger btn-sm"><ion-icon
            name="trash"></ion-icon></button>
          <button @click="$emit('details-member', book)" class="btn btn-info btn-sm mx-1"><ion-icon name="eye"></ion-icon></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  members: {
    type: Array,
    required: true,
  },
});
</script>
