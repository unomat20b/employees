<template>
   <v-container>
      <v-data-table 
        :headers="headers" 
        :items="employees" 
        :items-per-page="5"
        class="elevation-1">
      </v-data-table>
  </v-container>
</template>
    

<script>
export default {
  props: {
    headers: Array,
    employees: Array
  },
  mounted() {
    console.log("EmployeeTable mounted");
  }
}
</script>

  
<style scoped>
</style>