<template>
  <Header>
    <RouterView v-slot="{ Component }">
      <component data-aos="fade-right" :is="Component" />
    </RouterView>
  </Header>
  <Footer></Footer>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/atoms/Header.vue";
import Footer from "./components/atoms/Footer.vue";
</script>
<style>
@import "@/assets/styles/base.css";
</style>
