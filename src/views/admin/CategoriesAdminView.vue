<template>
  <div class="flex flex-col">
    <ul class="flex flex-row m-5 lg:text-2xl justify-end">
      <label for="addCategory-modal" class="btn modal-button"
        >Añadir categoría</label
      >
    </ul>
    <div class="my-2 overflow-x-auto lg:mx-2 max-w-screen">
      <div class="overflow-x-auto w-full text-gray-900">
        <table class="table w-full">
          <thead>
            <tr>
              <th class="bg-gray-200"></th>
              <th class="bg-gray-200">Categoría</th>
              <th class="bg-gray-200 text-center">Fecha de Creación</th>
              <th class="bg-gray-200 text-center">Fecha de Actualización</th>
              <th class="bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <th class="bg-white h-full w-12">
                <label class="text-lg">
                  {{ category.id }}
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="category.image" :alt="category.name" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ category.name }}</div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                {{ category.createdAt }}
              </td>
              <td class="text-center">{{ category.updatedAt }}</td>
              <td>
                <div class="flex gap-3">
                  <label
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <font-awesome-icon icon="eye" />
                  </label>
                  <label
                    for="editCategory-modal"
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <font-awesome-icon icon="pen" />
                  </label>
                  <label
                    for="confirmDelete-modal"
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <font-awesome-icon icon="trash" />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="w-full flex justify-center py-4">
          <div class="btn-group">
            <button class="btn btn-sm">1</button>
            <button class="btn btn-sm btn-active">2</button>
            <button class="btn btn-sm">3</button>
            <button class="btn btn-sm">4</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="addCategory-modal" class="modal-toggle" />
  <label for="addCategory-modal" class="modal cursor-pointer">
    <AddCategoryModal />
  </label>

  <input type="checkbox" id="editCategory-modal" class="modal-toggle" />
  <label for="editCategory-modal" class="modal cursor-pointer">
    <EditCategoryModal />
  </label>

  <input type="checkbox" id="confirmDelete-modal" class="modal-toggle" />
  <label for="confirmDelete-modal" class="modal cursor-pointer">
    <ConfirmDeleteModal />
  </label>
</template>

<script setup>
import AddCategoryModal from "../../components/AddCategoryModal.vue";
import EditCategoryModal from "../../components/EditCategoryModal.vue";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal.vue";
const categories = [
  {
    id: 1,
    name: "Drama",
    description: "Peliculas para llorar",
    createdAt: "04-03-2022",
    updatedAt: "04-03-2022",
    image: "https://api.lorem.space/image/movie?w=256&h=400&hash=8B7BCDC2",
  },
  {
    id: 2,
    name: "Terror",
    description: "Peliculas que te pondrán los pelos de punta",
    createdAt: "04-03-2022",
    updatedAt: "04-03-2022",
    image: "https://api.lorem.space/image/movie?w=256&h=400&hash=8B7BCDC2",
  },
];
</script>
