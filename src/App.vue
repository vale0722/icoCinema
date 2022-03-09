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
import Footer from "./components/atoms/Footer.vue";
import { useUserStore } from "./stores/user.js";

let user = useUserStore();
user.setIsCustomer();
</script>
<style>
@import "@/assets/styles/base.css";
</style>
