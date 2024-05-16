<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item link v-for="item in menuItems" :key="item.text" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    menuItems: [
      { icon: 'mdi-home', text: 'Главная' },
      { icon: 'mdi-account', text: 'Профиль' },
      // Добавьте другие пункты меню
    ],
  }),
};
</script>