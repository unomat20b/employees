<template>
    <v-app>
        
        <Header :title="title" />

        <Sidebar />

        <v-main 
        
          style="min-height: 300px; 
          background-color: #DDDCDC;">
            <EmployeeTable :headers="headers" :employees="employees" />
        </v-main>
    </v-app>
</template>
  
<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import EmployeeTable from '../components/EmployeeTable.vue'
import { headers, employees as initialEmplayees } from '../data/emploeesData.js'

const title = 'Сотрудники';
const employees = ref(initialEmplayees)
</script>

<style scoped>
.main-shrink{
  transition: margin-left 0.3s ease;
}
.drawer-expanded {
  width: 256px !important;
  transition: width 0.3s ease;
}</style>




