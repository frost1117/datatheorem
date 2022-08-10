import { combineReducers } from '@reduxjs/toolkit'

import { reducer as employeeReducer } from './employee/slice'

const rootReducer = combineReducers({
  employee: employeeReducer,
})

export default rootReducer
