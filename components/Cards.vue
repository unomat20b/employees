<template>
    <v-app>
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="item in items" :key="item.id">
              <v-card>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>{{ item.description }}</v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="showDialog(item)">Подробнее</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
              <v-card-title>{{ selectedItem.title }}</v-card-title>
              <v-card-text>{{ selectedItem.details }}</v-card-text>
              <v-card-actions>
                <v-btn color="green" text @click="dialog = false">Закрыть</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data: () => ({
      dialog: false,
      selectedItem: {},
      items: [
        { id: 1, title: 'Карточка 1', description: 'Описание карточки 1', details: 'Детали карточки 1' },
        // Добавьте другие карточки
      ],
    }),
    methods: {
      showDialog(item) {
        this.selectedItem = item;
        this.dialog = true;
      },
    },
  };
  </script>