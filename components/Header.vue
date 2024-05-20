<template>
  <v-app-bar :elevation="1" app style="top: 0; width: 100%; left: 0px; background-color: #42D392;">

    <v-app-bar-nav-icon @click="toggleDrawer" style="color: white"></v-app-bar-nav-icon>
    <v-toolbar-title style="color: white">{{ title }}</v-toolbar-title>

    <Header_button_avatar />

  </v-app-bar>
</template>

<script setup>
import { defineProps } from 'vue'
import Header_button_avatar from '../components/Header_button_avatar.vue'

const emits = defineEmits(['toggle-hover']);

const props = defineProps({
  toggleDrawer: Function,
  drawer: Boolean,
  title: String
});
</script>

