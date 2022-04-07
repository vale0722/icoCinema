<template>
  <div
    class="relative min-h-screen flex flex-col sm:justify-center items-center"
  >
    <div class="relative sm:max-w-sm w-full">
      <div
        class="card bg-black shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
      ></div>
      <div
        class="card bg-red-800 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
      ></div>
      <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
        <label
          class="block mt-3 text-lg text-gray-700 text-center font-semibold"
        >
          Edite los datos de la categoría
        </label>
        <div class="mt-10">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              v-model="name"
              class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
            />
          </div>

          <div class="mt-7">
            <label
              for="editCategory-modal"
              @click="update"
              class="btn bg-red-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
            >
              Editar
            </label>
          </div>
          <div class="modal-action">
            <label
              for="editCategory-modal"
              class="btn bg-transparent hover:bg-red-800 hover:bg-opacity-10 text-red-900 border-red-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
            >
              Regresar
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCategoriesStore } from "../stores/categories";
import { storeToRefs } from "pinia/dist/pinia";
import { ref, watch } from "vue";

export default {
  setup(props, computed) {
    const categoryStore = useCategoriesStore();
    const { category } = storeToRefs(categoryStore);
    const { updateCategory } = categoryStore;
    let name = ref("");

    watch(category, () => {
      name.value = category.value.name;
    });

    const update = async () => {
      await updateCategory(category.value, {
        name: name.value,
      });
      computed.emit("updated");
    };

    return { category, update, name };
  },
};
</script>
