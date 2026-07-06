<script setup>
import { onMounted } from 'vue'
import { useEmployeeStore } from '../stores/employee.js'

const employeeStore = useEmployeeStore()

onMounted(() => {
  employeeStore.fetchEmployees()
})
</script>

<template>
  <div class="list">
    <h1>This is the list page by Employee</h1>
    <ul>
      <li v-for="employee in employeeStore.employees" :key="employee.id">
        {{ employee.firstName }} {{ employee.lastName }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
