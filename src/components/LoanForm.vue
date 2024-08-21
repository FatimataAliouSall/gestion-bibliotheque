<template>
  <div class="mb-4">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <input v-model="loan.borrower" type="text" class="form-control" placeholder="Emprunteur" required />
      </div>
      <div class="mb-3">
        <input v-model="loan.item" type="text" class="form-control" placeholder="Article prêté" required />
      </div>
      <div class="mb-3">
        <input v-model="loan.loanDate" type="date" class="form-control" placeholder="Date du prêt" required />
      </div>
      <div class="mb-3">
        <input v-model="loan.returnDate" type="date" class="form-control" placeholder="Date de retour prévue" required />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Modifier Prêt' : 'Ajouter Prêt' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  initialLoan: {
    type: Object,
    default: () => ({ borrower: '', item: '', loanDate: '', returnDate: '' }),
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['submit']);

const loan = ref({ ...props.initialLoan });

watch(() => props.initialLoan, (newLoan) => {
  loan.value = { ...newLoan };
});

const submitForm = () => {
  emits('submit', loan.value);
};
</script>


<style scoped>
.form-group {
  margin-top: 20px;
}

.btn {

  margin-top: 20px;
}

</style>