<template>
    <v-navigation-drawer v-model="drawer" app>
        <!-- Ваше меню здесь -->
        <v-list>
        <v-list-item @click="handleMenuClick">Пункт меню</v-list-item>
        <!-- Другие пункты меню -->
        </v-list>
    </v-navigation-drawer>
</template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    drawer: Boolean,
  })
  
  const emit = defineEmits(['toggleDrawer'])
  
  const handleMenuClick = () => {
    emit('toggleDrawer')
  }
  </script>