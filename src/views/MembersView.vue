<template>
    <div class="container mt-5">
      <h1 class="mb-4">Gestion des Membres</h1>
      
      <button @click="toggleForm" v-if="!showForm && !isEditing" class="btn btn-primary mb-3">Ajouter Membre</button>
      
      <member-form
        v-if="showForm || isEditing"
        :initialMember="selectedMember"
        :isEditing="isEditing"
        @submit="handleFormSubmit"
      />
      
      <member-list
        :members="members"
        @edit-member="editMember"
        @remove-member="removeMember"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import MemberForm from '../components/MemberForm.vue';
  import MemberList from '../components/MemberList.vue';
  
  const members = ref([]);
  const isEditing = ref(false);
  const showForm = ref(false);
  const selectedMember = ref(null);
  
  const toggleForm = () => {
    showForm.value = !showForm.value;
  };
  
  const handleFormSubmit = (member) => {
    if (isEditing.value) {
      updateMember(member);
    } else {
      addMember(member);
    }
    showForm.value = false;
  };
  
  const addMember = (member) => {
    members.value.push(member);
  };
  
  const editMember = (member) => {
    selectedMember.value = { ...member };
    isEditing.value = true;
    showForm.value = true;
  };
  
  const updateMember = (member) => {
    const index = members.value.findIndex(m => m.email === selectedMember.value.email);
    if (index !== -1) {
      members.value[index] = member;
    }
    isEditing.value = false;
    selectedMember.value = null;
  };
  
  const removeMember = (member) => {
    members.value = members.value.filter(m => m !== member);
  };
  </script>
  