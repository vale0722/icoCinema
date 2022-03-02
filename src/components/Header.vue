<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle">
    <div class="drawer-content !z-auto">
      <div class="fixed inset-x-0 top-0 z-50">
        <div class="navbar text-white font-bold h-24 bg-opacity-30">
          <div class="navbar-start">
            <div class="dropdown">
              <label for="my-drawer" class="drawer-button btn btn-ghost lg:hidden">
                  <font-awesome-icon icon="bars"/>
              </label>
            </div>
            <a class="btn btn-ghost normal-case text-xl">
              <img alt="IcoCinema" class="object-contail h-full w-full" src="@/assets/logo.svg" />
            </a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li><a>Item 1</a></li>
              <li class="dropdown dropdown-hover">
                <label tabindex="0" class="m-1">Hover</label>
                <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-pop-100 rounded-box w-52 text-gray-900 bg-opacity-60">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div class="navbar-end">
          </div>
        </div>
      </div>
      <div class="relative z-40">
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-black  text-base-content fixed inset-x-0 top-0 h-full shadow-xl">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
<style>
.drawer-toggle~.drawer-content, .drawer-toggle~.drawer-side {
  max-height: 100% !important;
}
</style>