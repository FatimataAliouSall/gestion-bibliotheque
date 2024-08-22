<template>
  <div class="container mt-4">
    <h4>Ajoutez un prêt :</h4>
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-md-2">
        <label for="id_pret" class="form-label">ID Prêt</label>
        <input type="number" class="form-control" id="id_pret" v-model.number="idPret" required />
      </div>
      <div class="col-md-2">
        <label for="date_pret" class="form-label">Date du prêt</label>
        <input type="date" class="form-control" id="date_pret" v-model="datePret" required />
      </div>
      <div class="col-md-3">
        <label for="date_retour" class="form-label">Date de retour</label>
        <input type="date" class="form-control" id="date_retour" v-model="dateRetour" required />
      </div>
      <div class="col-md-2">
        <label for="livre_id" class="form-label">ID Livre</label>
        <input type="number" class="form-control" id="livre_id" v-model.number="livreId" required />
      </div>
      <div class="col-md-2">
        <label for="membre_id" class="form-label">ID Membre</label>
        <input type="number" class="form-control" id="membre_id" v-model.number="membreId" required />
      </div>
      <div class="col-md-3">
        <button type="submit" class="btn btn-primary col-md-4">
          Ajouter
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["addPret"]);

const idPret = ref("");
const datePret = ref("");
const dateRetour = ref("");
const livreId = ref("");
const membreId = ref("");

const onSubmit = () => {
  emit("addPret", {
    id_pret: idPret.value,
    date_pret: datePret.value,
    date_retour: dateRetour.value,
    livre_id: livreId.value,
    membre_id: membreId.value
  });

  // Réinitialiser les champs du formulaire après la soumission
  idPret.value = "";
  datePret.value = "";
  dateRetour.value = "";
  livreId.value = "";
  membreId.value = "";
};
</script>
