<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <ul class="flex flex-row m-5 lg:text-2xl justify-end">
        <label for="addMovie-modal" class="btn modal-button">Añadir pelicula</label>

    </ul>
    <div class="my-2 overflow-x-auto lg:mx-2 max-w-screen">
      <div class="overflow-x-auto w-full text-gray-900">
        <table class="table w-full">
          <thead>
          <tr>
            <th class="bg-gray-200"></th>
            <th class="bg-gray-200">Nombre</th>
            <th class="bg-gray-200 text-center">Fecha de Creación</th>
            <th class="bg-gray-200 text-center">Fecha de Actualización</th>
            <th class="bg-gray-200"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="movie in billboard" :key="movie.id">
            <th class="bg-white h-full w-12">
              <label class="text-lg">
                {{ movie.id }}
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="movie.image" :alt="movie.name">
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ movie.name }}</div>
                  <div class="text-sm opacity-50">{{ movie.description }}</div>
                </div>
              </div>
            </td>
            <td class="text-center">
              {{ movie.createdAt }}
            </td>
            <td class="text-center">{{ movie.updatedAt }}</td>
            <td>
               <div class="flex gap-3">
                 <label class="text-gray-600 hover:text-gray-900 cursor-pointer">
                   <font-awesome-icon icon="eye" />
                 </label>
                 <label
                   for="editMovie-modal"
                   class="text-gray-600 hover:text-gray-900 cursor-pointer"
                 >
                   <font-awesome-icon icon="pen" />
                 </label>
                 <label
                   for="confirmDelete-modal"
                   class="text-gray-600 hover:text-gray-900 cursor-pointer"
                 >
                   <font-awesome-icon icon="trash" />
                 </label>
               </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="w-full flex justify-center py-4">
          <div class="btn-group">
            <button class="btn btn-sm">1</button>
            <button class="btn btn-sm btn-active">2</button>
            <button class="btn btn-sm">3</button>
            <button class="btn btn-sm">4</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <input type="checkbox" id="addMovie-modal" class="modal-toggle">
  <label for="addMovie-modal" class="modal cursor-pointer">
    <AddMovieModal />
  </label>

  <input type="checkbox" id="editMovie-modal" class="modal-toggle">
  <label for="editMovie-modal" class="modal cursor-pointer">
    <EditMovieModal />
  </label>

  <input type="checkbox" id="confirmDelete-modal" class="modal-toggle" />
  <label for="confirmDelete-modal" class="modal cursor-pointer">
    <ConfirmDeleteModal />
  </label>
</template>

<script setup>
import AddMovieModal from "../../components/AddMovieModal.vue";
import EditMovieModal from "../../components/EditMovieModal.vue";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal.vue";

const billboard = [
  {
    id: 1,
    name: "Batman - El caballero de la noche",
    description: "De huerfano de la noche al heroe de la noche",
    createdAt: "04-03-2022",
    updatedAt: "04-03-2022",
    edadMinima: "+14",
    duracion: "120",
    image: "src/assets/images/batman.png",
  },
  {
    id: 2,
    name: "Free Guy",
    description: "Revolucionando la vida de un banquero",
    createdAt: "04-03-2022",
    updatedAt: "04-03-2022",
    edadMinima: "+16",
    duracion: "110",
    image: "https://api.lorem.space/image/movie?w=256&h=400&hash=8B7BCDC2",
  },
];
</script>
