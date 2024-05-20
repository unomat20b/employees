<template>
    <v-app>
    
        <Header :title="title" />
        
        <Sidebar />

        <v-main 
        class="content-area"
        :style="{ marginLeft: contentMargin }"
        style="background-color: #DDDCDC;">
            <Cards />
        </v-main>
    </v-app>
</template>
  
<script setup>
import { computed, ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import Cards from '../components/Cards.vue';

const drawer = ref(false)
const title = 'Настройки';

const contentMargin = computed(() => drawer.value ? '256px' : '56px');
</script>

<style scoped>
.content-area {
    min-height: 300px;
    margin-left: var(--sidebar-width, 57px);
    transition: margin-left 0.3s;
}
.drawer-expanded {
  width: 256px !important;
  transition: width 0.2s ease;
}
</style>