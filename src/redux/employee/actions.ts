import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiBaseUrl = 'https://dt-interviews.appspot.com/'

export const getEmployeeData = createAsyncThunk(
  'app/getEmployeeList',
  async () => {
    try {
      const { data } = await axios.get(apiBaseUrl)

      return data
    } catch (err) {
      // TODO: handling error notification
      console.log(err)

      return []
    }
  },
)

export const addNewEmployee = createAsyncThunk(
  'app/addNewEmployee',
  async ({
    name,
    department,
    salary,
    jobTitle,
  }: {
    name: string
    department: string
    salary: number
    jobTitle: string
  }) => {
    try {
      const { data } = await axios.post(apiBaseUrl, {
        name,
        department,
        employee_annual_salary: salary,
        job_titles: jobTitle,
      })

      toast(`New Employee #${data.id} added successfully`)
    } catch (err) {
      throw new Error('Something went wrong while adding a new employee.')
    }
  },
)
