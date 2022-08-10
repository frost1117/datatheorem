import { forwardRef } from 'react'

import classNames from 'classnames'

// TODO: need to add some more props to support accessbility, colors, etc
type Props = React.ComponentProps<'button'>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={classNames(
        'inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
        'bg-typo-primary text-gray-700 hover:bg-gray-50 dark:bg-gray-300 dark:text-gray-100 dark:hover:bg-opacity-80 text-white',
        'hover:bg-gray-50 outline-none',
      )}
    >
      {children}
    </button>
  ),
)
