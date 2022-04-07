<template>
  <Header class="flex flex-col min-h-screen">
    <RouterView v-slot="{ Component }">
      <component data-aos="fade-right" :is="Component" />
    </RouterView>
  </Header>
  <Footer v-if="!user.isAdmin"></Footer>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/atoms/Header.vue";
import Footer from "./components/atoms/FooterC.vue";
import { useUserStore } from "./stores/user.js";
import { useCategoriesStore } from "./stores/categories";
const { refreshCategories } = useCategoriesStore();

let user = useUserStore();
user.setIsCustomer();

refreshCategories();
</script>
<style>
@import "@/assets/styles/base.css";
</style>
