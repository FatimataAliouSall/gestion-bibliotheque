<template>

  <div class="container">
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th>Indefiant</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Date d'inscription</th>
          <th>Téléphone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(membre, index) in membres" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ membre.prenom }}</td>
          <td>{{ membre.nom }}</td>
          <td>{{ membre.dateInscription }}</td>
          <td>{{ membre.telephone }}</td>
          <td>
            <button class="btn btn-xs btn-danger" @click="destroy(index)"><ion-icon name="trash"></ion-icon></button>
            <button class="btn btn-xs btn-primary" @click="edit(index)"><ion-icon name="eyedrop"></ion-icon></button>
            <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="view(membre)"><ion-icon
                name="eye"></ion-icon></button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-black" id="exampleModalLabel">Informations du membre</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Prénom : {{ membreShow?.prenom }}</p>
            <p>Nom : {{ membreShow?.nom }}</p>
            <p>Date d'inscription : {{ membreShow?.dateInscription }}</p>
            <p>N° téléphone : {{ membreShow?.telephone }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const emit = defineEmits(["onRemove", "onEdit"]);

const props = defineProps({
  membres: {
    type: Array,
    required: true,
    default: [],
  },
});

const destroy = (index) => {
  emit("onRemove", index);
};
const edit = (index) => {
  emit("onEdit", index);
};

const membreShow = ref(null)

function view(membre) {
  membreShow.value = membre
}
</script>
