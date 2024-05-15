<template>
    <v-app>
        <v-app-bar app>
            <Header :toggleDrawer="toggleDrawer" />
        </v-app-bar>

        <v-navigation-drawer
        expand-on-hover
        rail
        :class="{ 'drawer-expanded': drawer }"
        >
            <Sidebar :drawer="drawer" />
        </v-navigation-drawer>

        <v-main>
            <v-conteiner fluid>
                <EmployeeTable :headers="headers" :employees="employees" />
            </v-conteiner>
        </v-main>
    </v-app>
</template>
  
<script setup>
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Header from '~/components/Header.vue'
import EmployeeTable from '~/components/EmployeeTable.vue'


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

  


