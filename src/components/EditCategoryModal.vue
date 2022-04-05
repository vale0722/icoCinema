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
        <form method="#" action="#" class="mt-10">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
            />
          </div>

          <div class="mt-7">
            <input
              type="text"
              placeholder="Descripción"
              class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
            />
          </div>

          <DropZone class="mt-3" />

          <div class="mt-7">
            <button
              class="bg-red-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
            >
              Guardar
            </button>
          </div>
          <div class="modal-action">
            <label
              for="editCategorie-modal"
              class="btn bg-transparent hover:bg-red-800 hover:bg-opacity-10 text-red-900 border-red-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
            >
              Regresar
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import DropZone from "../components/DropZone.vue";
</script>
