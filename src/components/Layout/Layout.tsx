import classNames from 'classnames'

import { Box } from 'components/Box'
import Logo from 'assets/logo.png'
import { sidebarData } from './data'
import { useLocation } from 'react-router-dom'
import { Link } from 'components/Link'

export type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-sidebar bg-opacity-100 text-white">
      <div className="flex flex-row min-h-screen">
        <div
          className={classNames(
            'hidden bg-sidebar sticky top-0 sm:flex flex-col items-center w-[240px] pt-12',
          )}
        >
          <div className="w-full h-full mt-6">
            {sidebarData.map((item) => (
              <Link key={item.path} to={item.path}>
                <Box
                  className={classNames(
                    '!my-2 w-full py-3 cursor-pointer px-4 text-white hover:bg-typo-primary hover:bg-opacity-10 hover:rounded-r-3xl',
                    {
                      'border-l-4 border-solid border-typo-primary bg-sidebar rounded-r-3xl':
                        pathname === item.path,
                    },
                  )}
                  row
                >
                  {item.icon}
                  <span
                    className={classNames('ml-2', {
                      'font-primary font-semibold text-typo-primary':
                        pathname === item.path,
                    })}
                  >
                    {item.title}
                  </span>
                </Box>
              </Link>
            ))}
          </div>
        </div>
        <Box className="w-full" justifyCenter>
          <div className="w-full p-4 max-w-7xl">{children}</div>
        </Box>
      </div>
    </div>
  )
}
