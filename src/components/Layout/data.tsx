import { FcConferenceCall, FcAddDatabase } from 'react-icons/fc'
import { ROUTES } from 'settings/constants'

export const sidebarData = [
  {
    path: ROUTES.Dashboard,
    icon: <FcConferenceCall className="w-6 h-6 text-typo-primary" />,
    title: 'Users',
  },
  {
    path: ROUTES.Add,
    icon: <FcAddDatabase className="w-6 h-6 text-typo-primary" />,
    title: 'Add new user',
  },
]
