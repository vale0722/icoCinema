<template>
  <div>
    <div class="modal-box relative bg-white w-screen h-96 text-gray-900 justify-between flex flex-col">
      <label
        for="reserve-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2 z-50"
        >✕</label
      >

      <div class="w-full text-center">
        <p class="font-bold text-xl"> {{ movie.name }} </p>
      </div>
      <div class="flex justify-between gap-6">
        <div class="space-y-4 w-2/3">
          <div>
            <p class="font-medium text-sm text-gray-400"> Reserva</p>
          </div>
          <div>
            <p class="font-medium text-sm text-gray-400"> Valor unitario </p>
            <p> $10.000 </p>
          </div>
        </div>
        <div class="space-y-2 w-full">
          <div>
            <div class="w-full self-center h-full">
              <label class="font-medium text-sm text-gray-400">Funciones</label>
              <select
                class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
              >

                <option selected>Seleccione una opción</option>
                <option>2022-12-12</option>
              </select>
            </div>
          </div>

          <div class="mt-3">
            <label class="font-medium text-sm text-gray-400">Asientos</label>
            <div class="flex items-center self-center">
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
              <span class="text-gray-700 mx-2">2</span>
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between self-center w-full">
        <div class="self-center border-gray-200">
            <div class="flex justify-between gap-3">
              <div>
                <p class="font-bold text-black text-lg"> Total </p>
              </div>
              <p class="font-bold text-black text-lg"> $20.000 </p>
            </div>
        </div>
        <label class="self-center btn bg-red-800 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
          Reservar
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  movie: {},
});
</script>
