<template>
  <div class="navbar bg-red-900 text-white">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-gray-900 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li tabindex="0">
            <a class="justify-between">
              Parent
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 bg-white text-gray-900 shadow-xl">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <RouterLink to="/" class="btn btn-ghost normal-case text-xl">
        <img
          alt="IcoCinema"
          class="object-contail h-full w-full"
          src="@/assets/logo.svg"
        />
      </RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <div class="menu menu-horizontal p-0">
        <li><RouterLink to="/admin">Admin</RouterLink></li>
        <li><RouterLink to="/admin/categories">Categorias</RouterLink></li>
        <li><RouterLink to="/admin/movies">Peliculas</RouterLink></li>
      </div>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white bg-gray-900 rounded-box shadow-xl w-52"
        >
          <li>
            <a class="justify-between">
              Perfil
              <span class="badge">Nuevo</span>
            </a>
          </li>
          <li><a>Cerrar Sesión</a></li>
        </ul>
      </div>
    </div>
  </div>
  <slot />
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style>
.drawer-toggle ~ .drawer-content,
.drawer-toggle ~ .drawer-side {
  max-height: 100% !important;
}
.menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active),
.menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul):active) {
  background-color: #2a2e37 !important;
}
</style>
