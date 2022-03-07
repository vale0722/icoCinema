<template>
  <div class="flex flex-col">
    <div class="my-2 overflow-x-auto lg:mx-2 min-h-screen max-w-screen">
      <div class="py-2 align-middle inline-block w-full lg:px-2">
        <div class="border-b border-gray-200 sm:rounded-lg mt-32">
          <ul class="flex flex-row m-5 lg:text-2xl justify-between">
            <li>
              <h1>Administración de categorías</h1>
            </li>
            <li>
              <label for="addCategorie-modal" class="btn modal-button"
                >Añadir categoría</label
              >
            </li>
          </ul>
          <div class="overflow-auto">
            <table class="w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Categoría
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Fecha creación
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Fecha de actualización
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="categorie in categories" :key="categorie.name">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="categorie.image"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ categorie.name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ categorie.createdAt }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ categorie.updatedAt }}
                    </div>
                  </td>
                  <td
                    class="
                      flex
                      gap-4
                      justify-end
                      px-6
                      py-4
                      whitespace-nowrap
                      text-right text-sm
                      font-medium
                    "
                  >
                    <!-- To-do Add view details -->
                    <label for="" class="text-indigo-600 hover:text-indigo-900">
                      <font-awesome-icon icon="eye" />
                    </label>
                    <label
                      for="editCategorie-modal"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      <font-awesome-icon icon="pen" />
                    </label>
                    <label
                      for="confirmDelete-modal"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      <font-awesome-icon icon="trash" />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <input type="checkbox" id="addCategorie-modal" class="modal-toggle" />
  <div class="modal">
    <AddCategorieModal />
  </div>

  <input type="checkbox" id="editCategorie-modal" class="modal-toggle" />
  <div class="modal">
    <EditCategorieModal />
  </div>

  <input type="checkbox" id="confirmDelete-modal" class="modal-toggle" />
  <div class="modal">
    <ConfirmDeleteModal />
  </div>
</template>

<script setup>
import AddCategorieModal from "../components/AddCategorieModal.vue";
import EditCategorieModal from "../components/EditCategorieModal.vue";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal.vue";
const categories = [
  {
    name: "Drama",
    description: "Peliculas para llorar",
    createdAt: "04-03-2022",
    updatedAt: "04-03-2022",
    image: "https://api.lorem.space/image/movie?w=256&h=400&hash=8B7BCDC2",
  },
  {
    name: "Terror",
    description: "Peliculas que te pondrán los pelos de punta",
    createdAt: "04-03-2022",
    updatedAt: "04-03-2022",
    image: "https://api.lorem.space/image/movie?w=256&h=400&hash=8B7BCDC2",
  },
];
</script>