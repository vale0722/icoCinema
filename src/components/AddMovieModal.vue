<template>
  <div
    class="relative min-h-screen flex flex-col sm:justify-center items-center"
  >
    <div class="relative w-full">
      <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
        <label
          class="block mt-3 text-lg text-gray-700 text-center font-semibold"
        >
          Ingrese los datos de la pelicula
        </label>
        <div class="flex justify-between gap-5">
          <div>
            <div>
              <input
                type="text"
                placeholder="Nombre"
                v-model="name"
                class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
              />
            </div>
            <div class="mt-3">
              <input
                type="text"
                placeholder="Link del thriller"
                v-model="thriller"
                class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
              />
            </div>
            <div class="mt-3">
              <textarea
                type="text"
                cols="2"
                placeholder="Sinopsis"
                v-model="description"
                class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
              />
            </div>
            <div class="flex gap-4">
              <div class="mt-3">
                <input
                  type="number"
                  placeholder="Duración"
                  v-model="duration"
                  class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
                />
              </div>
              <div class="mt-3">
                <input
                  type="number"
                  placeholder="Edad Minima"
                  v-model="min_age"
                  class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
                />
              </div>
            </div>
            <div class="mt-3">
              <label class="text-sm text-gray-600">Fecha de lanzamiento</label>
              <input
                type="date"
                placeholder="Fecha de lanzamiento"
                v-model="release_date"
                class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
              />
            </div>
            <div class="mt-3">
              <label class="text-sm text-gray-600">Categoria</label>
              <select
                class="mt-1 block w-full border-none bg-gray-100 text-gray-800 h-11 rounded-xl shadow-lg focus:ring-0 px-2"
                v-model="gener_id"
              >
                <template v-for="category in categories" :key="category.id">
                  <option :value="category.id">{{ category.name }}</option>
                </template>
              </select>
            </div>
          </div>

          <DropZone @input="setFile" class="mt-3" />
        </div>

        <div class="mt-7">
          <label
            for="addMovie-modal"
            @click="create"
            class="btn bg-red-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          >
            Crear
          </label>
        </div>
        <div class="modal-action">
          <label
            for="addMovie-modal"
            class="btn bg-transparent hover:bg-red-800 hover:bg-opacity-10 text-red-900 border-red-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          >
            Regresar
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropZone from "../components/DropZone.vue";
import { useMoviesStore } from "../stores/movies";
import { ref } from "vue";
import { useCategoriesStore } from "../stores/categories";
import { storeToRefs } from "pinia/dist/pinia";

export default {
  components: { DropZone },
  setup(props, computed) {
    const { storeMovie } = useMoviesStore();
    const categoryStore = useCategoriesStore();
    const { categories } = storeToRefs(categoryStore);
    const { refreshCategories } = categoryStore;

    refreshCategories();

    let name = ref("");
    let description = ref("");
    let duration = ref("");
    let min_age = ref("");
    let release_date = ref("");
    let gener_id = ref("");
    let thriller = ref("");
    let file = ref(null);

    const setFile = (value) => {
      file.value = value.value;
    };

    const create = async () => {
      const form = new FormData();
      form.append("name", name.value);
      form.append("description", description.value);
      form.append("thriller", thriller.value);
      form.append("duration", duration.value);
      form.append("min_age", min_age.value);
      form.append("release_date", release_date.value);
      form.append("genre_id", gener_id.value);
      form.append("image", file.value);

      await storeMovie(form);
      computed.emit("created");
    };

    return {
      categories,
      name,
      description,
      duration,
      min_age,
      release_date,
      gener_id,
      thriller,
      create,
      file,
      setFile
    };
  },
};
</script>
