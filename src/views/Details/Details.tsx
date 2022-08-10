import { useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { FcPrevious } from 'react-icons/fc'

import Avatar from 'assets/avatar.png'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { useEmployee } from 'redux/employee/hooks'
import { ROUTES } from 'settings/constants'

export const ProfileDetails = () => {
  const { isLoading, employeeData, getEmployeeData } = useEmployee()
  const navigate = useNavigate()

  const { employeeId: employeeIdStr } = useParams<{ employeeId: string }>()
  const employeeId = parseInt(employeeIdStr || '1') - 1

  useEffect(() => {
    if (employeeData.length === 0 && !isLoading) {
      getEmployeeData()
    }
  }, [employeeData, isLoading, getEmployeeData])

  const onHandleBack = useCallback(() => {
    navigate(ROUTES.Dashboard)
  }, [navigate])

  const onHandlePrev = useCallback(() => {
    navigate(`/details/${employeeId}`)
  }, [employeeId, navigate])

  const onHandleNext = useCallback(() => {
    navigate(`/details/${employeeId + 2}`)
  }, [employeeId, navigate])

  return (
    <div className="p-8">
      <Box className="w-full space-x-2" alignCenter>
        <div
          className="p-2 cursor-pointer hover:bg-[#eee] rounded-md"
          onClick={onHandleBack}
        >
          <FcPrevious className="w-6 h-6" />
        </div>
        <span className="text-2xl font-medium font-primary">
          Employee Details
        </span>
      </Box>
      <div className="w-full">
        <Box className="max-w-7xl" mt={4} center col>
          {employeeId < employeeData.length && (
            <div className="flex flex-col items-center">
              <img
                className="w-40 h-40 rounded-full"
                src={Avatar}
                alt="avatar"
              />
              <Box className="space-y-2" mt={2} center col>
                <div className="flex-1 mt-4 text-sm font-semibold font-primary">
                  <span>{employeeData[employeeId].name}</span>
                </div>
                <div className="flex-1 px-2 py-1 mb-4 text-xs text-white rounded-full font-primary bg-typo-primary">
                  <span>{employeeData[employeeId].jobTitle}</span>
                </div>
                <div className="flex-1 mb-4 text-xs font-primary">
                  <span>${employeeData[employeeId].annualSalary}</span>
                </div>
              </Box>
            </div>
          )}
          <Box className="w-full" justify="between">
            <Button
              className={
                employeeId === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
              }
              disabled={employeeId === 0}
              onClick={onHandlePrev}
            >
              Prev
            </Button>
            <Button
              className={
                employeeId === employeeData.length - 1
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer'
              }
              disabled={employeeId === employeeData.length - 1}
              onClick={onHandleNext}
            >
              Next
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  )
}
