<template>
  <main class="min-h-screen">
    <div class="indicator w-full h-full">
      <div class="group overflow-hidden relative shadow-lg min-h-screen w-full">
        <label class="absolute z-10 top-0 bottom-0 left-0 right-0">
          <iframe class="w-full h-full hidden md:block" :src="movieActive.thriller + '?controls=0&autoplay=1&mute=1'" />
          <div
            class="absolute bg-opacity-70 bg-black text-white block left-0 right-0 top-0 text-base h-full w-full transition-all"
          >
            <div class="py-4 text-xs px-7 flex align-middle w-full h-full">
              <div class="flex h-full w-full">
                <div class="flex-grow h-full">
                  <div class="align-self-end w-full h-full flex flex-col">
                    <div class="flex flex-col md:flex-row h-full">
                      <div
                        class="flex justify-center align-middle self-center p-10 h-full"
                      >
                        <MovieCard
                          :with-tab="false"
                          :movie="movieActive"
                        ></MovieCard>
                      </div>
                      <div
                        class="space-y-6 h-full flex flex-col justify-center align-middle w-full"
                      >
                        <div class="flex flex-col space-y-2 inner">
                          <label
                            for="movie-modal"
                            class="cursor-pointer relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                            data-unsp-sanitized="clean"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-10 h-10"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div
                              class="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2 w-32"
                            >
                              Ver Trailer
                            </div>
                          </label>
                          <h3
                            class="text-2xl font-bold text-white"
                            data-unsp-sanitized="clean"
                          >
                            {{ movieActive.name }}
                          </h3>
                          <div
                            class="badge badge-error bg-red-700 text-white gap-2"
                          >
                            {{ movieActive.category }}
                          </div>
                        </div>
                        <div class="flex flex-col overview">
                          <div class="flex flex-col"></div>
                          <div class="text-sm text-gray-400">Descripción:</div>
                          <p class="text-xs text-gray-100 mb-6">
                            {{ movieActive.description }}
                          </p>
                        </div>

                        <div class="flex justify-between pr-8 my-10 w-1/2">
                          <div class="flex flex-col">
                            <div class="text-sm font-bold text-white">
                              {{ movieActive.min_age + " Años"}}
                            </div>
                            <div class="text-sm text-gray-400">Edad Minima</div>
                          </div>
                          <div class="flex flex-col">
                            <div class="text-sm font-bold text-white">
                              {{ movieActive.release_date }}
                            </div>
                            <div class="text-sm text-gray-400">
                              Fecha de lanzamiento
                            </div>
                          </div>
                          <div class="flex flex-col">
                            <div class="text-sm font-bold text-white">
                              {{ movieActive.duration }} min
                            </div>
                            <div class="text-sm text-gray-400">Tiempo</div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div class="flex flex-row relative pb-10 space-x-4 z-10">
                        <label
                          for="reserve-modal"
                          class="flex items-center self-center py-2 px-4 rounded-full mx-auto text-white bg-red-700 hover:bg-red-800"
                          data-unsp-sanitized="clean"
                        >
                          <font-awesome-icon icon="clock" />
                          <div class="text-sm text-white ml-2">
                            Reservar ahora
                          </div>
                        </label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
    <input type="checkbox" id="movie-modal" class="modal-toggle" />
    <label
      for="movie-modal"
      class="modal cursor-pointer bg-black bg-opacity-80"
    >
      <MovieModal :movie="movieActive" />
    </label>
    <input type="checkbox" id="reserve-modal" class="modal-toggle" />
    <label
      for="reserve-modal"
      class="modal cursor-pointer bg-black bg-opacity-60"
    >
      <ReserveModal :movie="movieActive" />
    </label>
  </main>
</template>

<script setup>
import { useMoviesStore } from "../stores/movies.js";
import MovieCard from "../components/atoms/MovieCard.vue";
import MovieModal from "../components/atoms/MovieModal.vue";
import ReserveModal from "../components/molecules/ReserveModal.vue";

const { movieActive } = useMoviesStore();
</script>
