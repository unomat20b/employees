<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title>Сотрудники</v-toolbar-title>
    </v-app-bar>
    <Sidebar :drawer="drawer" />
    <v-main>
      <v-container>
        <v-data-table :headers="headers" :items="employees" class="elevation-1">
        </v-data-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'

const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const headers = [
  { text: 'Имя', align: 'start', value: 'name' },
  { text: 'id', value: 'id' },
  { text: 'email', value: 'email' },
  { text: 'телефон', value: 'phone' },
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