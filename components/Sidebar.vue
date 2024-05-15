<template>
  <v-card>
    <v-layout>
      
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-book" title="Журнал" value="myfiles"></v-list-item>

          <v-list-group v-model="expanded">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                link
                prepend-icon="mdi-account-group" 
                title="Сотрудники" 
                value="myfiles">
              </v-list-item>
            </template>
            <v-list-item link>
              <v-list-item-title>Управление</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Должности</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Расписание</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item prepend-icon="mdi-shield-account" title="Админ" value="starred"></v-list-item>
        </v-list>
      <v-main></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  drawer: Boolean
})
</script>

<style scoped>
.drawer-expanded {
  width: 256px !important;
  transition: width 0.3s ease;
}
</style>

