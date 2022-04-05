<template>
  <div class="bg-white flex flex-col flex-grow">
    <header class="bg-black shadow text-white">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold capitalize">{{ title }}</h1>
      </div>
    </header>
    <main>
      <div class="w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <slot></slot>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
});
</script>
