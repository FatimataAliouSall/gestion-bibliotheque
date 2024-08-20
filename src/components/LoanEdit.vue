<template>
  <div class="d-flex justify-content-center">
    <div class="mb-4 w-50">
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
  </div>
</template>

<script setup>
// Définir les props
const props = defineProps({
  loan: {
    type: Object,
    required: true,
  },
});

// Définir les événements
const emit = defineEmits(['update-loan', 'cancel-edit']);

// Cloner les données reçues pour édition
const editedLoan = ref({ ...props.loan });

// Mise à jour du formulaire lorsque les données du prêt changent
watch(() => props.loan, (newLoan) => {
  editedLoan.value = { ...newLoan };
});

// Soumettre le formulaire
const submitEditForm = () => {
  emit('update-loan', editedLoan.value);
  router.push('/prets'); // Rediriger vers la liste des prêts après l'enregistrement
};

// Annuler l'édition
const cancelEdit = () => {
  emit('cancel-edit');
};

// Importer `useRouter`
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
