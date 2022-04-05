<template>
  <div>
    <h1 class="w-full justify-center text-2xl font-bold text-white py-5">
      Próximamente
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-16"
    >
      <MovieCard
        :movie="{
          name: 'Pelicula aleatoria',
          description: 'La mejor pelicula del año',
        }"
      ></MovieCard>
      <MovieCard
        :movie="{
          name: 'Pelicula aleatoria',
          description: 'La mejor pelicula del año',
        }"
      ></MovieCard>
      <MovieCard
        :movie="{
          name: 'Pelicula aleatoria',
          description: 'La mejor pelicula del año',
        }"
      ></MovieCard>
      <MovieCard
        :movie="{
          name: 'Pelicula aleatoria',
          description: 'La mejor pelicula del año',
        }"
      ></MovieCard>
      <MovieCard
        :movie="{
          name: 'Pelicula aleatoria',
          description: 'La mejor pelicula del año',
        }"
      ></MovieCard>
      <MovieCard
        :movie="{
          name: 'Pelicula aleatoria',
          description: 'La mejor pelicula del año',
        }"
      ></MovieCard>
      <MovieCard
        :movie="{
          name: 'Pelicula aleatoria',
          description: 'La mejor pelicula del año',
        }"
      ></MovieCard>
      <MovieCard
        :movie="{
          name: 'Pelicula aleatoria',
          description: 'La mejor pelicula del año',
        }"
      ></MovieCard>
    </div>
  </div>
</template>

<script setup>
import MovieCard from "../../components/atoms/MovieCard.vue";
</script>
