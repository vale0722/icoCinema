import { defineStore } from "pinia";
import { moviesService } from "../services/movieService";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movieActive: {},
    movies: {},
    storeErrors: [],
  }),
  actions: {
    setMovieActive(movie) {
      this.movieActive = movie;
    },
    async refreshMovies(force) {
      if (!this.movies.length || force) {
        this.movies = await moviesService.all();
      }

      return this.movies;
    },
    async refreshGuestMovies(force) {
      if (!this.movies.length || force) {
        this.movies = await moviesService.guest();
      }

      return this.movies;
    },
    async storeMovie(attributes) {
      try {
        await moviesService.create(attributes);
        this.storeErrors = [];
      } catch (error) {
        error.response.data.errors.errors.forEach((data) => {
          this.storeErrors[data.param] = "El valor ingresado es invalido";
        });
      }
    },
    async updateMovie(movie, attributes) {
      try {
        await moviesService.update(movie.id, attributes);
        this.storeErrors = [];
      } catch (error) {
        error.response.data.errors.errors.forEach((data) => {
          this.storeErrors[data.param] = "El valor ingresado es invalido";
        });
      }
    },
    async deleteMovie(movie) {
      try {
        await moviesService.delete(movie.id);
        this.storeErrors = [];
      } catch (error) {
        this.storeErrors = ["Ha ocurrido un error al eliminar la pelicula"];
      }
    },
  },
});
