<template>
    <div class="text-center">
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
            Dropdown
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item 
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
            link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        items: [
          { title: 'Зубенко М. П.' },
          { title: 'Настройки', to: '/Settings' },
          { title: 'Тема' },
          { title: 'Выход' },
        ],
      }),
    }
  </script>