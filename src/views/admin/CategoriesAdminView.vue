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
              <th class="bg-gray-200">Categoría</th>
              <th class="bg-gray-200 text-center">Fecha de Creación</th>
              <th class="bg-gray-200 text-center">Fecha de Actualización</th>
              <th class="bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categoriesRef" :key="category.id">
              <td>
                <div class="font-bold">{{ category.name }}</div>
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
                    @click="setCategory(category)"
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <font-awesome-icon icon="pen" />
                  </label>
                  <label
                    for="confirmDelete-modal"
                    @click="setCategory(category)"
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
  <input type="checkbox" id="addCategory-modal" class="modal-toggle" />
  <label class="modal">
    <AddCategoryModal @created="refresh(true)" />
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
import AddCategoryModal from "../../components/AddCategoryModal.vue";
import EditCategoryModal from "../../components/EditCategoryModal.vue";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal.vue";
import { onMounted, ref } from "vue";
import { useCategoriesStore } from "../../stores/categories";
const { categories, refreshCategories, setCategoryActive } = useCategoriesStore();
let categoriesRef = ref(categories);

const refresh = async (force) => {
  categoriesRef.value = await refreshCategories(force);
};

const setCategory = async (category) => await setCategoryActive(category);

onMounted(async () => {
   await refresh();
});
</script>
