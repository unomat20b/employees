<template>
    <v-app>
        <v-app-bar>
            <Header :toggleDrawer="toggleDrawer" title="Настройки"></header>
        </v-app-bar>
        
        <v-navigation-drawer
            app
            expand-on-hover
            rail
            :class="{ 'drawer-expanded': drawer }"
        >
            <Sidebar :drawer="drawer" />
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                <Cards />
        </v-main>
    </v-app>
</template>
  
<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import Cards from '../components/Cards.vue';

const drawer = ref(false)

const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<style scoped>
.drawer-expanded {
  width: 256px !important;
  transition: width 0.3s ease;
}
</style>