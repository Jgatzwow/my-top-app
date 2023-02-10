import React from 'react'
import { PTagProps } from '@/components/PTag/PTag.props'
import styles from './PTag.module.css'
import cn from 'classnames'

export const PTag = ({
  size = 'medium',
  children,
  className,
  ...props
}: PTagProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium'
      })}
      {...props}
    >
      {children}
    </p>
  )
}
