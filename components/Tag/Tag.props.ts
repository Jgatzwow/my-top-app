import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium'
  children: React.ReactNode
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
  href?: string
}
