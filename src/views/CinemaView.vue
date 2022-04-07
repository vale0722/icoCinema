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
    <div class="flex justify-center">
      <RouterView name="movies" v-slot="{ Component }">
        <component data-aos="fade-right" :is="Component" />
      </RouterView>
    </div>
  </main>
</template>

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
