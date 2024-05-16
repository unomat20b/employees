<template>
    <v-app>
      <Sidebar />
      <Cards />
    </v-app>
  </template>
  
  <script>
  import Sidebar from '~/components/Sidebar.vue'
  import Cards from '~/components/Cards.vue'
  
  export default {
    components: {
      Sidebar,
      Cards
    }
  }
  </script>