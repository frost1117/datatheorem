import { lazy, memo, Suspense } from 'react'

import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { IoRefresh } from 'react-icons/io5'

import { Box } from 'components/Box/Box'
import { Layout } from 'components/Layout/Layout'
import { ROUTES } from 'settings/constants'

const Dashboard = lazy(() => import('views/Dashboard'))
const ProfileDetails = lazy(() => import('views/Details'))
const AddEmployee = lazy(() => import('views/Add'))

export type RouteType = {
  path: string
  element: React.FC
}[]

const routes: RouteType = [
  {
    path: ROUTES.Dashboard,
    element: Dashboard,
  },
  {
    path: ROUTES.Details,
    element: ProfileDetails,
  },
  {
    path: ROUTES.Add,
    element: AddEmployee,
  },
]

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Component = route.element

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Suspense
                    fallback={
                      <Box flex={1} className="p-10" center>
                        <IoRefresh className="w-8 h-8 animate-spin" />
                      </Box>
                    }
                  >
                    <Component />
                  </Suspense>
                </Layout>
              }
            />
          )
        })}

        <Route path="*" element={<Navigate to={ROUTES.Dashboard} />} />
      </Routes>
    </Router>
  )
}

export default memo(PublicRoutes)
