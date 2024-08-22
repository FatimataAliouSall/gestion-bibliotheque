<template>
  <div class="container mt-4">
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th>ID Prêt</th>
          <th>Date du prêt</th>
          <th>Date de retour</th>
          <th>ID Livre</th>
          <th>ID Membre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pret, index) in prets" :key="pret.id_pret">
          <td>{{ index + 1 }}</td>
          <td>{{ pret.date_pret }}</td>
          <td>{{ pret.date_retour }}</td>
          <td>{{ pret.livre_id }}</td>
          <td>{{ pret.membre_id }}</td>
          <td>
            <button class="btn btn-xs btn-danger" @click="destroy(index)">
              <ion-icon name="trash"></ion-icon>
            </button>
            <button class="btn btn-xs btn-primary" @click="edit(index)">
              <ion-icon name="eyedrop"></ion-icon>
            </button>
            <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="view(pret)">
              <ion-icon name="eye"></ion-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-black" id="exampleModalLabel">Informations du prêt</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Date du prêt : {{ pretShow?.date_pret }}</p>
            <p>Date du retour : {{ pretShow?.date_retour }}</p>
            <p>ID Livre : {{ pretShow?.livre_id }}</p>
            <p>ID Membre : {{ pretShow?.membre_id }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from "vue";

const emit = defineEmits(["onRemove", "onEdit"]);

const props = defineProps({
  prets: {
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

const pretShow = ref(null);

function view(pret) {
  pretShow.value = pret;
}
</script>
