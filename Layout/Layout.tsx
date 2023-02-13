import React, { FunctionComponent } from 'react'
import { LayoutProps } from '@/Layout/Layout.props'
import { Header } from '@/Layout/Header/Header'
import { Sidebar } from '@/Layout/Sidebar/Sidebar'
import { Footer } from '@/Layout/Footer/Footer'

const Layout = ({ children }: LayoutProps): JSX.Element => {
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

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
