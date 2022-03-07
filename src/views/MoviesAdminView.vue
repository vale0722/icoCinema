<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="my-2 overflow-x-auto lg:mx-2 min-h-screen max-w-screen">
      <div class="py-2 align-middle inline-block w-full lg:px-2">
        <div class="border-b border-gray-200 sm:rounded-lg mt-32">
          <ul class="flex flex-row m-5 lg:text-2xl justify-between">
            <li>
              <h1>Administración de peliculas</h1>
            </li>
            <li>
              <label for="addMovie-modal" class="btn modal-button"
                >Añadir pelicula</label
              >
            </li>
          </ul>
          <div class="overflow-auto">
            <table class="w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Pelicula
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Fecha creación
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Fecha de actualización
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="movie in billboard" :key="movie.name">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="movie.image"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ movie.name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ movie.createdAt }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ movie.updatedAt }}
                    </div>
                  </td>
                  <td
                    class="
                      flex
                      gap-4
                      justify-end
                      px-6
                      py-4
                      whitespace-nowrap
                      text-right text-sm
                      font-medium
                    "
                  >
                    <!-- To-do Add view details -->
                    <label for="" class="text-indigo-600 hover:text-indigo-900">
                      <font-awesome-icon icon="eye" />
                    </label>
                    <label
                      for="editMovie-modal"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      <font-awesome-icon icon="pen" />
                    </label>
                    <label
                      for="confirmDelete-modal"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      <font-awesome-icon icon="trash" />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <input type="checkbox" id="addMovie-modal" class="modal-toggle" />
  <div class="modal">
    <AddMovieModal />
  </div>

  <input type="checkbox" id="editMovie-modal" class="modal-toggle" />
  <div class="modal">
    <EditMovieModal />
  </div>

  <input type="checkbox" id="confirmDelete-modal" class="modal-toggle" />
  <div class="modal">
    <ConfirmDeleteModal/>
  </div>
</template>

<script setup>
import AddMovieModal from "../components/AddMovieModal.vue";
import EditMovieModal from "../components/EditMovieModal.vue";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal.vue";
const billboard = [
  {
    name: "Batman - El caballero de la noche",
    sinopsis: "De huerfano de la noche al heroe de la noche",
    createdAt: "04-03-2022",
    updatedAt: "04-03-2022",
    edadMinima: "+14",
    duracion: "120",
    image: "src/assets/images/batman.png",
  },
  {
    name: "Free Guy",
    sinopsis: "Revolucionando la vida de un banquero",
    createdAt: "04-03-2022",
    updatedAt: "04-03-2022",
    edadMinima: "+16",
    duracion: "110",
    image: "https://api.lorem.space/image/movie?w=256&h=400&hash=8B7BCDC2",
  },
];
</script>
