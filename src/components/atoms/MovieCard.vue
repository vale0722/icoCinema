<template>
  <button @click="activeMovie(movie)" class="indicator self-center">
    <span
      class="indicator-item indicator-start badge bg-red-600 !z-40"
      v-if="withTab"
      >Cartelera</span
    >
    <div
      :class="
        'group overflow-hidden relative shadow-lg max-w-xs' +
        (!withTab
          ? ' h-96 '
          : ' h-72 group-hover:opacity-40 transition-opacity duration-700 ') +
        'w-56'
      "
    >
      <a href="#" class="absolute z-10 top-0 bottom-0 left-0 right-0">
        <img
          :class="
            'block' +
            (!withTab
              ? ' h-96 '
              : ' h-72 group-hover:opacity-40 transition-opacity duration-700 ') +
            'w-56'
          "
          src="https://api.lorem.space/image/movie?w=260&h=400"
        />
        <div
          v-if="withTab"
          class="absolute bg-black flex items-center group-hover:-top-0 group-hover:opacity-100 duration-700 top-full right-0 w-full opacity-0 h-1/2 transition-all"
        >
          <div
            style="
              background-image: url('https://api.lorem.space/image/movie?w=260&h=400');
            "
          >
            <video class="w-full" autoplay loop="" preload="none" muted="muted">
              <source
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/256860783/microtrailer.webm?t=1637095595?v=3"
                type="video/webm"
              />
            </video>
          </div>
        </div>
        <div
          v-if="withTab"
          class="absolute bg-gradient-to-br duration-700 from-red-800 to-black-800 text-white block left-0 right-0 top-full text-base h-1/2 w-full opacity-50 transition-all group-hover:top-1/2 group-hover:opacity-100"
        >
          <div class="py-4 text-xs px-7">
            <div class="text-xl font-bold">{{ movie.name }}</div>
            <div class="overflow-hidden overflow-ellipsis relative z-20">
              {{ movie.description }}
            </div>
          </div>
        </div>
      </a>
    </div>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import { useMoviesStore } from "../../stores/movies.js";
import router from "../../router";

const moviesStore = useMoviesStore();
defineProps({
  movie: {},
  withTab: {
    type: Boolean,
    default: true,
  },
});

const activeMovie = async (movie) => {
  await moviesStore.setMovieActive(movie);
  await router.push({ name: "movies.show" });
};
</script>
