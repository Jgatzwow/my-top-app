import React from 'react'
import { FooterProps } from '@/Layout/Footer/Footer.props'
import cn from 'classnames'
import styles from './Footer.module.css'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Owl top 2020 - {format(new Date(), 'yyyy')} All rights reserved</div>
      <a href='#'>User Agreement</a>
      <a href='#'>Policy of Confidentiality</a>
    </footer>
  )
}
