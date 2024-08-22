<template>
  <div class="container mt-4">
    <h1 class="text-center border-bottom mb-2">Gestion des prêts:</h1>
    <AjouterPret class="border-bottom pb-4" @add-pret="add" />
    <ListePret :prets="prets" class="mt-4" @on-remove="remove" @on-edit="edit" />
    <ModifierPret :pret="selectedPret" @update-pret="update" @cancelEdit="cancel" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AjouterPret from './AjouterPret.vue';
import ListePret from './ListePret.vue';
import ModifierPret from './ModifierPret.vue';

const prets = ref([
  { id_pret: 1, date_pret: '2024-08-01', date_retour: '2024-09-01', livre_id: 1, membre_id: 1 },
  { id_pret: 2, date_pret: '2024-08-05', date_retour: '2024-09-05', livre_id: 2, membre_id: 2 }
]);

const selectedPret = ref(null);

const add = (nouveauPret) => {
  prets.value.push(nouveauPret);
};

const remove = (index) => {
  prets.value.splice(index, 1);
};

const edit = (index) => {
  selectedPret.value = { ...prets.value[index] };
};

const update = (updatedPret) => {
  const index = prets.value.findIndex(p => p.id_pret === updatedPret.id_pret);
  if (index !== -1) {
    prets.value[index] = updatedPret;
  }
  selectedPret.value = null;
};

const cancel = () => {
  selectedPret.value = null;
};
</script>
