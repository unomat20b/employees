<template>
    <v-container>
      <v-data-table :headers="headers" :items="employees" class="elevation-1"></v-data-table>
    </v-container>
  </template>
  
  <script setup>
  const props = defineProps({
    headers: Array,
    employees: Array
  });
  </script>
  
  <style scoped>
  </style>