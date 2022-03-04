<template>
  <Header>
    <RouterView v-slot="{ Component }">
        <component data-aos="fade-right" :is="Component" />
    </RouterView>
  </Header>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<style>
@import "@/assets/styles/base.css";
</style>
