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
          Ingrese los datos de la funcion
        </label>
        <div class="mt-10">
          <div class="mt-3">
            <label class="text-sm text-gray-600">Fecha de lanzamiento</label>
            <input
                type="date"
                placeholder="Fecha"
                v-model="show_day"
                class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
            />
          </div>
          <div class="mt-3">
              <textarea
                  type="text"
                  cols="2"
                  placeholder="Hora"
                  v-model="show_hour"
                  class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
              />
          </div>
          <div class="mt-3">
            <label class="text-sm text-gray-600">Movie</label>
            <select
                class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
                v-model="movie_id"
            >
              <template v-for="movie in movies" :key="movie.id">
                <option :value="movie.id">{{ movie.name }}</option>
              </template>
            </select>
          </div>


          <div class="mt-7">
            <label
                for="addShow-modal"
                @click="create"
                class="btn bg-red-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
            >
              Crear
            </label>
          </div>
          <div class="modal-action">
            <label
                for="addShow-modal"
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
import { useShowsStore} from "../stores/shows";
import { ref } from "vue";
import {useMoviesStore} from "../stores/movies";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  setup(props, computed) {
    const { storeShow } = useShowsStore();
    const { movieStore } = useMoviesStore();
    const { movies } = storeToRefs( movieStore);

    let show_day = ref("");
    let show_hour = ref("");
    let movie_id = ref("");
    let room_id = ref("");

    const create = async () => {
      const form = new FormData();
      form.append("show_day", show_day.value);
      form.append("show_hour", show_hour.value);
      form.append("movie_id", movie_id.value);
      form.append("room_id", room_id.value);
      await storeShow(form);
      computed.emit('created')
    };

    return {
      show_day,
      show_hour,
      movie_id,
      room_id,
      movies,
      create };
  },
}
</script>