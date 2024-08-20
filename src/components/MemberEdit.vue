<template>
    <div class="mb-4">
      <h3>Modifier le Membre</h3>
      <form @submit.prevent="submitEditForm">
        <div class="mb-3">
          <input v-model="editedMember.name" type="text" class="form-control" placeholder="Nom du membre" required />
        </div>
  
        <div class="mb-3">
          <input v-model="editedMember.email" type="email" class="form-control" placeholder="Email du membre" required />
        </div>
  
        <div class="mb-3">
          <input v-model="editedMember.phone" type="tel" class="form-control" placeholder="Téléphone du membre" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
        <button @click="cancelEdit" type="button" class="btn btn-secondary">Annuler</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  // Définition des props et émetteurs d'événements
  const props = defineProps({
    member: {
      type: Object,
      required: true,
    }
  });
  
  const emit = defineEmits(['update-member', 'cancel-edit']);
  
  // Copie de l'objet membre pour l'édition
  const editedMember = ref({ ...props.member });
  
  // Met à jour editedMember lorsque les props changent
  watch(() => props.member, (newMember) => {
    editedMember.value = { ...newMember };
  });
  
  // Émet l'événement pour mettre à jour le membre
  const submitEditForm = () => {
    emit('update-member', editedMember.value);
  };
  
  // Annuler l'édition et émettre l'événement d'annulation
  const cancelEdit = () => {
    emit('cancel-edit');
  };
  </script>
  