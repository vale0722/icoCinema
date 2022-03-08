<template>
  <main class="min-h-screen">
    <div
      class="header-black flex flex-col md:flex-row justify-center aling-center gap-5 text-gray-900 min-h-48 p-4 pt-32"
    >
      <RouterLink class="btn btn-error" to="/movies">Estrenos</RouterLink>
      <RouterLink class="btn btn-error" to="/movies/billboard"
        >Cartelera</RouterLink
      >
      <RouterLink class="btn btn-error" to="/movies/coming-soon"
        >Próximamente</RouterLink
      >
      <RouterLink class="btn btn-error" to="/movies/all">Ver todas</RouterLink>
    </div>

    <div class="flex justify-center aling-center gap-5 text-gray-900 p-6">
      <div class="flex items-center max-w-md mx-auto bg-white rounded-full">
        <div class="w-full">
          <input
            type="search"
            class="w-full px-4 py-1 text-gray-900 rounded-full focus:outline-none"
            placeholder="Buscar"
            v-model="search"
          />
        </div>
        <div>
          <button
            type="submit"
            class="flex items-center justify-center w-12 h-12 text-gray-100 rounded-full"
            :class="
              search.length > 0
                ? 'bg-gray-900'
                : 'bg-gray-500 cursor-not-allowed'
            "
            :disabled="0 === search.length"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <RouterView name="movies" v-slot="{ Component }">
        <component data-aos="fade-right" :is="Component" />
      </RouterView>
    </div>
    <div class="w-full flex justify-center py-4">
      <div class="btn-group">
        <button class="btn btn-sm">1</button>
        <button class="btn btn-sm btn-active">2</button>
        <button class="btn btn-sm">3</button>
        <button class="btn btn-sm">4</button>
      </div>
    </div>
  </main>
</template>

<script setup>
let search = "";
</script>

<style type="text/scss">
.header-black {
  background: linear-gradient(
    180deg,
    rgba(111, 10, 10, 1) 29%,
    rgba(0, 0, 0, 1) 100%
  );
}

.btn-error {
  border-color: #6d0a0a;
  background-color: #6e0a0a;
  color: white;
}

.btn-error:hover {
  border-color: black;
  background-color: black;
}
</style>
