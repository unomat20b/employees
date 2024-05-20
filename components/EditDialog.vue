<template>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>{{ dialogTitle }}</v-card-title>
        <v-card-text>
          <v-text-field
            label="Введите значение"
            v-model="inputValue"
            outlined
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
          <v-btn color="blue darken-1" text @click="saveChanges">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
  
<script>
export default {
data() {
    return {
    dialog: false,
    dialogTitle: '',
    inputValue: '' 
    };
},
methods: {
    open(title, value = '') {
    this.dialogTitle = title;
    this.inputValue = value; 
    this.dialog = true;
    },
    close() {
    this.dialog = false;
    },
    saveChanges() {
    this.$emit('update', { title: this.dialogTitle, value: this.inputValue });
    this.dialog = false;
    }
}
}
</script>