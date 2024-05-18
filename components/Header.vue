<template>
  <v-app-bar :elevation="2" app style="top: 0; width: 100%;">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </template>
    
    <!-- Используем заголовок из props -->
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <template v-if="$vuetify.display.mdAndUp">
      <Header_button_dots_vertical />
      <v-btn icon="mdi-filter" variant="text"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import Header_button_dots_vertical from '~/components/Header_button_dots_vertical.vue'

// Определяем props
const props = defineProps({
toggleDrawer: Function,
title: String  // Добавляем prop для заголовка
});
</script>

<style scoped>
</style>