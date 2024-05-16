<template>
    <v-app>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Название сайта</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item @click="goToSettings">
                <v-list-item-title>Настройки</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
      </v-app-bar>
      <sidebar />
      <v-main>
        <v-container>
          Добро пожаловать на главную страницу!
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Sidebar from '~/components/Sidebar.vue'; // Убедитесь, что Sidebar импортирован
  
  export default {
    components: {
      Sidebar
    },
    methods: {
      toggleDrawer() {
        // Логика для переключения бокового меню
      },
      goToSettings() {
        this.$router.push('/cards'); // Метод для перехода на страницу с карточками
      }
    }
  }
  </script>