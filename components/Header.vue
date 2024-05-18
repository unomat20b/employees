<template>
  <v-app-bar :elevation="1" app style="top: 0; width: 100%; left: 0px; background-color: #42D392;">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer" style="color: white"></v-app-bar-nav-icon>
    </template>
    
    <v-toolbar-title style="color: white">{{ title }}</v-toolbar-title>

    <template v-if="$vuetify.display.mdAndUp">
      <Header_button_dots_vertical />
    </template>
  </v-app-bar>
</template>

<script setup>
import Header_button_dots_vertical from '~/components/Header_button_dots_vertical.vue'

const props = defineProps({
  toggleDrawer: Function,
  title: String
});
</script>

<style scoped>

</style>