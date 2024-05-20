<template>
    <v-app>
        <v-app-bar>
            <Header title="Настройки"></header>
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

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

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