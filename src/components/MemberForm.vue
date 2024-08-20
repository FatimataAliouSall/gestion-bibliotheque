<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <input v-model="member.name" type="text" class="form-control" placeholder="Nom du membre" required />
    </div>
    <div class="mb-3">
      <input v-model="member.email" type="email" class="form-control" placeholder="Email du membre" required />
    </div>
    <div class="mb-3">
      <input v-model="member.phone" type="tel" class="form-control" placeholder="Téléphone du membre" required />
    </div>
    <button type="submit" class="btn btn-primary">{{ isEditing ? 'Modifier Membre' : 'Ajouter Membre' }}</button>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  initialMember: {
    type: Object,
    default: () => ({ name: '', email: '', phone: '' }),
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['submit']);

const member = ref({ ...props.initialMember });

watch(() => props.initialMember, (newMember) => {
  member.value = { ...newMember };
});

const submitForm = () => {
  emit('submit', member.value);
};
</script>
