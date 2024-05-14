<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    :mini-variant="mini"
    permanent
    mini-variant-width="48"
    @mouseenter="expand"
    @mouseleave="collapse"
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

const drawer = ref(props.drawer)
const mini = ref(true)
const expanded = ref(false)

watch(() => props.drawer, (val) => {
  drawer.value = val
})

const expand = () => {
  mini.value = false
}

const collapse = () => {
  mini.value = true
}

const toggleExpanded = () => {
  expanded.value = !expanded.value
}
</script>