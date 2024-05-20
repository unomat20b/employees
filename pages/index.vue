<template>
    <v-app>
        <v-app-bar>
            <Header title="Сотрудники"></header>
        </v-app-bar>

        <v-navigation-drawer
            app
            expand-on-hover
            rail
            :class="{ 'drawer-expanded': drawer }"
            style="background-color: #C7C7C7;"
        >
            <Sidebar :drawer="drawer" />
        </v-navigation-drawer>

        <v-main 
          class="d-flex align-center justify-center" 
          style="min-height: 300px; 
          background-color: #DDDCDC;">
            <EmployeeTable :headers="headers" :employees="employees" />
        </v-main>
    </v-app>
</template>
  
<script setup>
import { nextTick } from 'vue'
import { ref, onMounted} from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import EmployeeTable from '../components/EmployeeTable.vue'
import { headers, employees as initialEmplayees } from '../data/emploeesData.js'

const drawer = ref(false)

const toggleDrawer = () => {
  drawer.value = !drawer.value
  nextTick(() => {
    
  })
}

const employees = ref(initialEmplayees)

onMounted(() => {
  console.log("Headers:", headers);
  console.log("Employees:", employees.value);
});

</script>

<style scoped>
.drawer-expanded {
  width: 256px !important;
  transition: width 0.3s ease;
}</style>

//