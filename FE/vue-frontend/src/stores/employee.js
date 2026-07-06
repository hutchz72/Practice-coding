import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref([])
  const totalEmployees = computed(() => employees.value.length)
  const baseUrl = import.meta.env.VITE_LOCAL_API_URL

  const fetchEmployees = async () => {
    try {
      const response = await fetch(`${baseUrl}/employees`)
      if (!response.ok) {
        throw new Error('Failed to fetch employees')
      }
      const data = await response.json()
      employees.value = data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    employees,
    totalEmployees,
    fetchEmployees
  }
})
