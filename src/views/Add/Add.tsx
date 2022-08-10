import { useCallback, useState } from 'react'

import { toast } from 'react-toastify'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { useEmployee } from 'redux/employee/hooks'

export const AddEmployee = () => {
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [salary, setSalary] = useState<number>()
  const [jobTitle, setJobTitle] = useState('')

  const { addEmployee } = useEmployee()

  const onHandleAdd = useCallback(() => {
    if (!name || !department || !salary || !jobTitle) {
      toast('Some informations are missing', {
        type: 'error',
      })

      return
    }

    addEmployee({ name, department, salary, jobTitle })
  }, [name, department, salary, jobTitle, addEmployee])

  return (
    <div className="p-8">
      <Box className="w-full" alignCenter justify="between">
        <span className="text-2xl font-medium font-primary">New Employee</span>
      </Box>
      <Box className="w-full" center col>
        <Box
          className="w-full max-w-3xl p-8 space-y-4 rounded-lg bg-typo-primary bg-opacity-20"
          mt={4}
          col
        >
          <input
            className="p-2 rounded-md bg-sidebar"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-2 rounded-md bg-sidebar"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            className="p-2 rounded-md bg-sidebar"
            placeholder="Annual Salary"
            type="number"
            value={salary}
            onChange={(e) => setSalary(parseInt(e.target.value))}
          />
          <input
            className="p-2 rounded-md bg-sidebar"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <Button onClick={onHandleAdd}>Add</Button>
        </Box>
      </Box>
    </div>
  )
}
