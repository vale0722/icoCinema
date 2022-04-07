<template>
  <div>
    <div class="modal-box relative bg-black w-screen h-96">
      <label
        for="movie-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2 z-50"
        >✕</label
      >
      <iframe
        class="h-full w-full"
        :src="movie.thriller"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  movie: {},
});
</script>
