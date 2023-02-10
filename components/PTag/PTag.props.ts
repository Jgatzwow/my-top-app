import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface PTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}