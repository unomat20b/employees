<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    :mini-variant="mini"
    permanent
    @mouseenter="expand"
    @mouseleave="collapse"
    mini-variant-width="80"  <!-- ширина мини-версии -->
    width="256"
  >
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-book</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-if="!mini">Журнал</v-list-item-title>
      </v-list-item>
      <v-list-group
        v-model="expanded"
        prepend-icon="mdi-account-group"
        append-icon="mdi-chevron-down"
      >
        <template v-slot:activator>
          <v-list-item link @click="toggleExpanded">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="!mini">Сотрудники</v-list-item-title>
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
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-shield-account</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-if="!mini">Админ</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  drawer: Boolean
})
</script>

<style scoped>
.v-navigation-drawer--mini-variant {
  width: 80px !important;
}
</style>