<template>
  <div>
    <h1 class="w-full justify-center text-2xl font-bold text-white py-5">
      {{ $route.name }}
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-16"
    >
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="getMovie(movie)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useMoviesStore } from "../../stores/movies";
import { storeToRefs } from "pinia/dist/pinia";
import MovieCard from "../../components/atoms/MovieCard.vue";
const moviesStore = useMoviesStore();
const { movies } = storeToRefs(moviesStore);
const { refreshMovies } = moviesStore;

const refresh = async (force) => {
  movies.value = await refreshMovies(force);
};

const getMovie = (movie) => {
  movie.formatImage = import.meta.env.VITE_APP_URL_AWS_STATICS + '/' + movie.image;
  return movie;
};

onMounted(async () => {
  await refresh();
});
</script>
