import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movieActive: null,
  }),
  actions: {
    setMovieActive(movie) {
      this.movieActive = movie;
    },
  },
});
