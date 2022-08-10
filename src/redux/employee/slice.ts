import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as employeeActions from './actions'
import { ApiEmployeeData, State } from './types'

const initialState: State = {
  isLoading: false,
  employeeData: [],
  error: false,
}

const slice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(employeeActions.getEmployeeData.pending, (state) => {
        state.isLoading = true
        state.error = false
      })
      .addCase(
        employeeActions.getEmployeeData.fulfilled,
        (state, { payload }: PayloadAction<ApiEmployeeData[]>) => {
          state.isLoading = false
          const employeeData = payload.map((item: ApiEmployeeData) => ({
            name: item.name,
            jobTitle: item.job_titles,
            department: item.department,
            annualSalary: item.employee_annual_salary,
          }))

          state.employeeData = employeeData
        },
      )
      .addCase(employeeActions.getEmployeeData.rejected, (state) => {
        state.isLoading = false
        state.error = true
      })
  },
})

export const { reducer, actions } = slice

export default slice
