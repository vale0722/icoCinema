<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <ul class="flex flex-row m-5 lg:text-2xl justify-end">
      <label for="addMovie-modal" class="btn modal-button"
        >Añadir pelicula</label
      >
    </ul>
    <div class="my-2 overflow-x-auto lg:mx-2 max-w-screen">
      <div class="overflow-x-auto w-full text-gray-900">
        <table class="table w-full">
          <thead>
            <tr>
              <th class="bg-gray-200">Nombre</th>
              <th class="bg-gray-200 text-center">Categoria</th>
              <th class="bg-gray-200 text-center">Fecha de Creación</th>
              <th class="bg-gray-200 text-center">Fecha de Actualización</th>
              <th class="bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="movie in movies" :key="movie.id">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="getImage(movie.image)" :alt="movie.name" />
                    </div>
                  </div>
                  <div class="w-56">
                    <div class="font-bold">{{ movie.name }}</div>
                    <div class="text-sm opacity-50 truncate">
                      {{ movie.description }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div
                  class="badge badge-error bg-red-700 text-white gap-2"
                >
                  {{ movie.category }}
                </div>
              </td>
              <td class="text-center">
                {{ movie.createdAt }}
              </td>
              <td class="text-center">{{ movie.updatedAt }}</td>
              <td>
                <div class="flex gap-3">
                  <label
                    class="text-gray-600 hover:text-gray-900 cursor-pointer"
                    @click="setMovie(movie)"
                  >
                    <font-awesome-icon icon="eye" />
                  </label>
                  <label
                    for="confirmDelete-modal"
                    @click="setMovie(movie)"
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

  <input type="checkbox" id="addMovie-modal" class="modal-toggle" />
  <label class="modal cursor-pointer">
    <AddMovieModal @created="refresh(true)" />
  </label>

  <input type="checkbox" id="editMovie-modal" class="modal-toggle" />
  <label class="modal cursor-pointer">
    <EditMovieModal @updated="refresh(true)" />
  </label>

  <input type="checkbox" id="confirmDelete-modal" class="modal-toggle" />
  <label class="modal cursor-pointer">
    <ConfirmDeleteModal @deleted="refresh(true)" />
  </label>
</template>

<script setup>
import AddMovieModal from "../../components/AddMovieModal.vue";
import EditMovieModal from "../../components/EditMovieModal.vue";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal.vue";
import { onMounted } from "vue";
import { useMoviesStore } from "../../stores/movies";
import { storeToRefs } from "pinia/dist/pinia";
const moviesStore = useMoviesStore();
const { movies } = storeToRefs(moviesStore);
const { refreshMovies, setMovieActive } = moviesStore;

const refresh = async (force) => {
  movies.value = await refreshMovies(force);
};

const setMovie = async (movie) => await setMovieActive(movie);
const getImage = (name) => import.meta.env.VITE_APP_URL_AWS_STATICS + '/' + name;

onMounted(async () => {
  await refresh();
});
</script>