<template>
  <div class="flex flex-col">
    <ul class="flex flex-row m-5 lg:text-2xl justify-end">
      <label for="addShow-modal" class="btn modal-button"
      >Añadir funcion</label
      >
    </ul>
    <div class="my-2 overflow-x-auto lg:mx-2 max-w-screen">
      <div class="overflow-x-auto w-full text-gray-900">
        <table class="table w-full">
          <thead>
          <tr>
            <th class="bg-gray-200">Dia del show</th>
            <th class="bg-gray-200">Hora del show</th>
            <th class="bg-gray-200">Pelicula</th>
            <th class="bg-gray-200">Sala</th>
            <th class="bg-gray-200 text-center">Fecha de Creación</th>
            <th class="bg-gray-200 text-center">Fecha de Actualización</th>
            <th class="bg-gray-200"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="show in showsRef" :key="show.id">
            <td>
              <div class="font-bold">{{ show.show_day }}</div>
            </td>
            <td>
              <div class="font-bold">Soy la hora</div>
            </td>
            <td>
              <div class="font-bold">Soy la pelicula</div>
            </td>
            <td>
              <div class="font-bold">Soy la sala</div>
            </td>
            <td class="text-center">
              {{ show.createdAt }}
            </td>
            <td class="text-center">{{ show.updatedAt }}</td>
            <td>
              <div class="flex gap-3">
                <label
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <font-awesome-icon icon="eye" />
                </label>
                <label
                    for="editCategory-modal"
                    @click="setShow(show)"
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <font-awesome-icon icon="pen" />
                </label>
                <label
                    for="confirmDelete-modal"
                    @click="setShow(show)"
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <font-awesome-icon icon="trash" />
                </label>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="addShow-modal" class="modal-toggle" />
  <label class="modal">
    <AddShowModal @created="refresh(true)" />
  </label>

  <input type="checkbox" id="editCategory-modal" class="modal-toggle" />
  <label for="editCategory-modal" class="modal cursor-pointer">
    <EditCategoryModal @updated="refresh(true)" />
  </label>

  <input type="checkbox" id="confirmDelete-modal" class="modal-toggle" />
  <label for="confirmDelete-modal" class="modal cursor-pointer">
    <ConfirmDeleteModal @deleted="refresh(true)" />
  </label>
</template>

<script setup>
import EditCategoryModal from "../../components/EditCategoryModal.vue";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal.vue";
import { onMounted, ref } from "vue";
import AddShowModal from "../../components/AddShowModal.vue";
import {useShowsStore} from "../../stores/shows";

const { shows, refreshSows, setShowActive } = useShowsStore()
let showsRef = ref(shows);

const refresh = async (force) => {
  showsRef.value = await refreshSows(force);
};

const setShow = async (show) => await setShowActive(show);

onMounted(async () => {
  await refresh();
});
</script>