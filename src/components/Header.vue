<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content !z-auto">
      <div class="fixed inset-x-0 top-0 z-50">
        <div :class="'navbar text-' + headerStore.color + ' font-bold h-24 bg-opacity-30'">
          <div class="navbar-start">
            <div class="dropdown">
              <label
                for="my-drawer"
                class="drawer-button btn btn-ghost lg:hidden"
              >
                <font-awesome-icon icon="bars" />
              </label>
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
            <ul class="menu menu-horizontal p-0">
              <li><RouterLink to="/">Tarifas</RouterLink></li>
              <li class="dropdown dropdown-hover">
                <label tabindex="0" class="m-1">Películas</label>
                <ul
                  tabindex="0"
                  class="p-2 shadow menu dropdown-content bg-pop-100 rounded-box w-52 text-gray-900 bg-opacity-60"
                >
                  <li><RouterLink to="/">Item 1</RouterLink></li>
                  <li><RouterLink to="/">Item 2</RouterLink></li>
                </ul>
              </li>
              <li><RouterLink to="/">Administrador</RouterLink></li>
            </ul>
          </div>
          <div class="navbar-end">
            <ul class="menu menu-horizontal p-0">
              <li><RouterLink to="/login">Iniciar Sesión</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative z-40">
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul
        class="menu p-4 overflow-y-auto w-80 bg-black text-base-content fixed inset-x-0 top-0 h-full shadow-xl"
      >
        <!-- Sidebar content here -->
        <li><a>Peliculas</a></li>
        <li><a>Tarifas</a></li>
        <li><a>Contáctenos</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useHeaderStore } from "../stores/header";

let headerStore = useHeaderStore();
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
