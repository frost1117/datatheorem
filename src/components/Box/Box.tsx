import { forwardRef } from 'react'

import classNames from 'classnames'
import { Box as RebassBox } from 'rebass'

import { alignClasses, BoxProps, justifyClasses } from './types'

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      className,
      children,
      col,
      center,
      alignCenter,
      justifyCenter,
      align,
      justify,
      row,
      hasBorder = false,
      hasBg = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <RebassBox
        {...rest}
        ref={ref}
        className={classNames(
          'flex',
          {
            'flex-col': col,
            'flex-row': row,
            'items-center': alignCenter || center,
            'justify-center': justifyCenter || center,
          },
          {
            'p-4 border border-white border-solid rounded-md border-opacity-10':
              hasBorder,
          },
          {
            'bg-white bg-opacity-5': hasBg,
          },
          align && alignClasses[align],
          justify && justifyClasses[justify],
          className,
        )}
      >
        {children}
      </RebassBox>
    )
  },
)
