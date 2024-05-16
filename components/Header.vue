<template>
    <v-app-bar :elevation="2"
            app 
            style=" 
            top: 0; 
            width: 100%;">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      </template>
      <v-toolbar-title>Сотрудники</v-toolbar-title>
    </v-app-bar>
</template>
    
  <script setup>
  const props = defineProps({
    toggleDrawer: Function
  });
  </script>
  
  <style scoped>
  </style>