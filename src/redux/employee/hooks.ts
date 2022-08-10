import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, RootState } from 'redux/store'

import * as employeeActions from './actions'

export const useEmployee = () => {
  const dispatch = useAppDispatch()

  const employeeState = useSelector((state: RootState) => state.employee)

  const getEmployeeData = useCallback(() => {
    dispatch(employeeActions.getEmployeeData())
  }, [dispatch])

  const addEmployee = useCallback(
    ({
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
      dispatch(
        employeeActions.addNewEmployee({
          name,
          department,
          salary,
          jobTitle,
        }),
      )
    },
    [dispatch],
  )

  return {
    ...employeeState,
    addEmployee,
    getEmployeeData,
  }
}
