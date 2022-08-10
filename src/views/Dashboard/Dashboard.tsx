import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ScaleLoader from 'react-spinners/ScaleLoader'

import Avatar from 'assets/avatar.png'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { useEmployee } from 'redux/employee/hooks'
import { ROUTES } from 'settings/constants'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { employeeData, isLoading, getEmployeeData } = useEmployee()

  useEffect(() => {
    if (employeeData.length === 0) getEmployeeData()
  }, [employeeData, getEmployeeData])

  const onHandleDetails = useCallback(
    (employeeIdx: number) => {
      navigate(`/details/${(employeeIdx + 1).toString()}`)
    },
    [navigate],
  )

  const onHandleAdd = useCallback(() => {
    navigate(ROUTES.Add)
  }, [navigate])

  return (
    <div className="p-8">
      <Box className="w-full" alignCenter justify="between">
        <span className="text-2xl font-medium font-primary">All Users</span>
        <Button onClick={onHandleAdd}>Add New User</Button>
      </Box>
      <div className="w-full">
        {isLoading && true ? (
          <Box mt={6} center>
            <ScaleLoader color="rgb(56, 160, 250)" loading />
          </Box>
        ) : (
          <Box
            className="grid w-full gap-4 max-w-7xl sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
            mt={4}
            col
          >
            {employeeData.map((item, index) => {
              return (
                <Box
                  className="w-full rounded-lg bg-sidebar"
                  key={`${item.name}${item.jobTitle}`}
                  my={2}
                  py={4}
                  col
                  alignCenter
                >
                  <img
                    className="w-20 h-20 rounded-full"
                    src={Avatar}
                    alt="avatar"
                  />
                  <div className="flex-1 mt-4 text-sm font-semibold font-primary">
                    <span>{item.name}</span>
                  </div>
                  <div className="flex-1 mb-4 text-xs font-primary">
                    <span>{item.jobTitle}</span>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => onHandleDetails(index)}
                  >
                    View Details
                  </Button>
                </Box>
              )
            })}
          </Box>
        )}
      </div>
    </div>
  )
}
