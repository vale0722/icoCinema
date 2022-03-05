<template>
  <main class="min-h-screen">
    <div class="bg-white flex flex-col md:flex-row justify-center aling-center gap-5 text-gray-900 min-h-48 p-4 pt-32">
      <RouterLink class="btn btn-outline btn-error" to="/">Estrenos</RouterLink>
      <RouterLink class="btn btn-outline btn-error" to="/">Cartelera</RouterLink>
      <RouterLink class="btn btn-outline btn-error" to="/">Próximamente</RouterLink>
      <RouterLink class="btn btn-error" to="/">Ver todas</RouterLink>
    </div>
    <div class="flex justify-center aling-center gap-5 text-gray-900 p-6">
    <div class="flex items-center max-w-md mx-auto bg-white rounded-full">
      <div class="w-full">
        <input type="search" class="w-full px-4 py-1 text-gray-900 rounded-full focus:outline-none"
               placeholder="Buscar" v-model="search">
      </div>
      <div>
        <button type="submit" class="flex items-center justify-center w-12 h-12 text-gray-100 rounded-full"
                :class="(search.length > 0) ? 'bg-gray-900' : 'bg-gray-500 cursor-not-allowed'"
                :disabled="0 === search.length">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </div>
    </div>
    <div class="flex justify-center">
      <div class="h-full grid grid-cols-4	p-4 gap-16">
        <MovieCard name="Pelicula aleatoria" description="La mejor pelicula del año"></MovieCard>
        <MovieCard name="Pelicula aleatoria" description="La mejor pelicula del año"></MovieCard>
        <MovieCard name="Pelicula aleatoria" description="La mejor pelicula del año"></MovieCard>
        <MovieCard name="Pelicula aleatoria" description="La mejor pelicula del año"></MovieCard>
        <MovieCard name="Pelicula aleatoria" description="La mejor pelicula del año"></MovieCard>
        <MovieCard name="Pelicula aleatoria" description="La mejor pelicula del año"></MovieCard>
        <MovieCard name="Pelicula aleatoria" description="La mejor pelicula del año"></MovieCard>
        <MovieCard name="Pelicula aleatoria" description="La mejor pelicula del año"></MovieCard>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useHeaderStore } from "@/stores/header";
import MovieCard from "../components/atoms/MovieCard.vue";
const headerStore = useHeaderStore();
headerStore.setDark();

let search = '';
</script>