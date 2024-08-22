<template>
  <div class="container mt-5">
    <h5>Ajouter un membre : </h5>
    <form class="row gx-3 gy-2 align-items-center mt-3" @submit.prevent="onSubmit">
      <div class="col-sm-3">
        <label for="prenom">Prénom</label>
        <input type="text" class="form-control" id="prenom" v-model="prenom" required />
      </div>
      <div class="col-sm-3">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" v-model="nom" required />
      </div>
      <div class="col-sm-2">
        <label for="date">Date d'inscription</label>
        <input type="date" class="form-control" id="date" v-model="dateInscription" required />
      </div>

      <div class="col-sm-2">
        <label for="tel">Téléphone</label>
        <input type="tel" class="form-control" id="tel" v-model="telephone" required />
      </div>

      <div class="col-auto">
        <button type="submit" class="btn mt-4 btn-info">
          Ajouter
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["onAdd"]);

const prenom = ref("");
const nom = ref("");
const dateInscription = ref("");
const telephone = ref("");

const onSubmit = () => {
  emit("onAdd", prenom.value, nom.value, dateInscription.value, telephone.value);

  prenom.value = "";
  nom.value = "";
  dateInscription.value = "";
  telephone.value = "";
};

</script>

<style scoped>


</style>