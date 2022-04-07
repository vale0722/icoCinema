<template>
  <div class="font-sans">
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
        <div
          class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md"
        >
          <h2
            for="confirmDelete-modal"
            class="block mt-3 text-lg text-gray-700 text-center font-semibold"
          >
            Está seguro que desea borrar?
          </h2>
          <div class="mt-7">
            <label
              for="confirmDelete-modal"
              @click="destroy"
              class="btn bg-red-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
            >
              Sí, Borrar
            </label>
          </div>
          <div class="modal-action">
            <label
              for="confirmDelete-modal"
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

export default {
  setup(props, computed) {
    const categoryStore = useCategoriesStore();
    const { category } = storeToRefs(categoryStore);
    const { deleteCategory } = categoryStore;

    const destroy = async () => {
      await deleteCategory(category.value);
      computed.emit("deleted");
    };

    return { category, destroy };
  },
};
</script>