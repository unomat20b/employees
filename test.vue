<template>
    <v-app>
      <v-app-bar app>
        <Header @toggle-drawer="toggleDrawer" />
      </v-app-bar>
  
      <v-navigation-drawer
        app
        expand-on-hover
        rail
        :class="{ 'drawer-expanded': isExpanded }"
      >
        <Sidebar />
      </v-navigation-drawer>
  
      <v-main>
        <v-container fluid>
          <EmployeeTable :headers="headers" :employees="employees" />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Sidebar from '~/components/Sidebar.vue'
  import Header from '~/components/Header.vue'
  import EmployeeTable from '~/components/EmployeeTable.vue'
  
  const isExpanded = ref(false)
  
  const toggleDrawer = () => {
    isExpanded.value = !isExpanded.value
  }
  
  const headers = [
    { text: 'Имя', align: 'start', value: 'name' },
    { text: 'ID', value: 'id' },
    { text: 'Email', value: 'email' },
    { text: 'Телефон', value: 'phone' },
  ]
  
  const employees = ref([
    { name: 'Роман', id: '12344556', email: 'soap@mail.ru', phone: '8-800-555-3535' },
    { name: 'Олег', id: '21734586', email: 'some-mail@gmail.ru', phone: '8-800-555-3535' },
    { name: 'Константин', id: '77987985', email: 'love@mail.ru', phone: '8-800-555-3535' },
    { name: 'Евгений', id: '65229491', email: 'one@yandex.ru', phone: '8-800-555-3535' },
  ])
  </script>
  
  <style scoped>
  .drawer-expanded {
    width: 256px !important;
    transition: width 0.3s ease;
  }
  </style>