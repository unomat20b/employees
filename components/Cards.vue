<template>
    <v-container>
      <v-row>
        <!-- Карточка "Пользователь" -->
        <v-col cols="6" sm="10" md="4">
          <v-card outlined>
            <v-card-title style="padding-left: 25px;">
              <v-icon left style="margin-right: 20px;">mdi-account-circle</v-icon> Пользователь
            </v-card-title>
            <v-card-text>
              <v-list style="padding-left: 50px;">
                <v-list-item @click="openDialog('ФИО')">
                  <v-list-item-content>{{ fields['ФИО'] || 'ФИО'}}</v-list-item-content>
                </v-list-item>
                <v-list-item @click="openDialog('Контактные данные')">
                  <v-list-item-content>{{ fields['Контактные данные'] || 'Контактные данные'}}</v-list-item-content>
                </v-list-item>
                <v-list-item @click="openDialog('Личная информация')">
                  <v-list-item-content>{{ fields['Личная информация'] || 'Личная информация'}}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- Карточка "Компания" -->
        <v-col cols="6" sm="10" md="4">
          <v-card outlined>
            <v-card-title style="padding-left: 25px;">
                <v-icon left style="margin-right: 20px;">mdi-domain</v-icon> Компания
            </v-card-title>
            <v-card-text>
                <v-list style="padding-left: 50px;">
                <v-list-item @click="openDialog('Адрес')">
                  <v-list-item-content>{{ fields['Адрес'] || 'Адрес'}}</v-list-item-content>
                </v-list-item>
                <v-list-item @click="openDialog('Филиалы')">
                  <v-list-item-content>{{ fields['Филиалы'] || 'Филиалы'}}</v-list-item-content>
                </v-list-item>
                <v-list-item @click="openDialog('Контактная информация')">
                  <v-list-item-content>{{ fields['Контактная информация'] || 'Контактная информация'}}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <edit-dialog ref="editDialog" @update="handleUpdate"/>
    </v-container>
  </template>
  
  <script>
  import EditDialog from './EditDialog.vue';
  
  export default {
    data() {
      return {
        fields: {
          'ФИО': '',
          'Контактные данные': '',
          'Личная информация': '',
          'Адрес': '',
          'Филиалы': '',
          'Контактная информация': ''
        }
      };
    },
    components: {
      EditDialog
    },
    methods: {
      openDialog(title) {
        this.$refs.editDialog.open(title, this.fields[title]);
      },
      handleUpdate(data) {
        this.fields[data.title] = data.value;
      }
    }
  }
  </script>

<style scoped>
.v-card {
margin-top: 20px;
border-radius: 16px;
}

.v-card-title {
font-weight: bold;
}

.v-list-item-content {
cursor: pointer;
}
</style>