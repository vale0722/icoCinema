<template>
  <div>
    <div class="modal-box relative bg-gray-300 w-screen h-96 text-gray-900">
      <label
        for="reserve-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2 z-50"
        >✕</label
      >
      <h1 class="text-xl font-bold">Horarios disponibles</h1>
      <span class="text-sm text-gray-900">Escoge el horario que desees</span>
      <div class="grid grid-cols-4 gap-1 my-4 self-center">
        <div class="badge badge-error bg-red-700 text-white gap-2">
          Abril 11, 12:30
        </div>
        <div class="badge badge-error bg-red-700 text-white gap-2">
          Abril 12, 12:30
        </div>
        <div class="badge badge-error bg-red-700 text-white gap-2">
          Abril 13, 12:30
        </div>
        <div class="badge badge-error bg-red-700 text-white gap-2">
          Abril 14, 12:30
        </div>
        <div class="badge badge-error bg-red-700 text-white gap-2">
          Abril 11, 12:30
        </div>
        <div class="badge badge-error bg-red-700 text-white gap-2">
          Abril 12, 12:30
        </div>
        <div class="badge badge-error bg-red-700 text-white gap-2">
          Abril 13, 12:30
        </div>
        <div class="badge badge-error bg-red-700 text-white gap-2">
          Abril 14, 12:30
        </div>
      </div>
      <div class="flex justify-center text-center gap-10 self-center">
        <h1 class="text-xl font-bold w-full">Cinema Iconianos</h1>
        |
        <h1 class="w-full text-xl font-bold">Sala 5</h1>
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
