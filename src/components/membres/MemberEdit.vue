<!-- src/components/MemberEdit.vue -->
<template>
  <div v-if="member">
    <div class="modal" tabindex="-1" style="display: block;" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier les données du membre</h5>
            <button type="button" class="close" @click="cancel" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" class="form-control" v-model="prenom" required />
              </div>
              <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" id="nom" class="form-control" v-model="nom" required />
              </div>
              <div class="form-group">
                <label for="date">Date d'inscription</label>
                <input type="date" id="date" class="form-control" v-model="dateInscription" required />
              </div>
              <div class="form-group">
                <label for="tel">Téléphone</label>
                <input type="tel" id="tel" class="form-control" v-model="telephone" required />
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
                <button type="button" class="btn btn-secondary" @click="cancel">Annuler</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['onUpdate', 'onCancel']);
const props = defineProps({
  membre: {
    type: Object,
    required: false,
    default: () => ({})
  }
});

const member = ref(false);
const prenom = ref('');
const nom = ref('');
const dateInscription = ref('');
const telephone = ref('');

watch(() => props.membre, (newMembre) => {
  if (newMembre) {
    prenom.value = newMembre.prenom;
    nom.value = newMembre.nom;
    dateInscription.value = newMembre.dateInscription;
    telephone.value = newMembre.telephone;
    member.value = true;
  }
}, { immediate: true });

function onSubmit() {
  emit('onUpdate', {
    prenom: prenom.value,
    nom: nom.value,
    dateInscription: dateInscription.value,
    telephone: telephone.value
  });
  clearForm();
}

function cancel() {
  clearForm();
  emit('onCancel');
}

function clearForm() {
  prenom.value = '';
  nom.value = '';
  dateInscription.value = '';
  telephone.value = '';
  member.value = false;
}
</script>

<style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}

.modal-content {
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.3rem;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.close {
  padding: 0;
  background: none;
  border: 0;
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
}
</style>
