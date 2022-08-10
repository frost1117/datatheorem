export type ApiEmployeeData = {
  name: string
  job_titles: string
  department: string
  employee_annual_salary: string
}

export type EmployeeData = {
  name: string
  jobTitle: string
  department: string
  annualSalary: string
}

export type State = {
  isLoading: boolean
  employeeData: EmployeeData[]
  error: boolean
}
