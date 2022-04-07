<template>
  <RouterView name="admin" v-slot="{ Component }">
    <AdminTemplate :title="$route.name" v-if="$route.name !== 'admin'">
      <component data-aos="fade-right" :is="Component" />
    </AdminTemplate>
    <template v-else>
      <component data-aos="fade-right" :is="Component" />
    </template>
  </RouterView>
</template>

<script setup>
import { useUserStore } from "../stores/user.js";
import { RouterView } from "vue-router";
import AdminTemplate from "../components/templates/AdminTemplate.vue";

const user = useUserStore();
user.setIsAdmin();
</script>
