import React from 'react'
import { LayoutProps } from '@/Layout/Layout.props'
import { Header } from '@/Layout/Header/Header'
import { Sidebar } from '@/Layout/Sidebar/Sidebar'
import { Footer } from '@/Layout/Footer/Footer'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )
}
