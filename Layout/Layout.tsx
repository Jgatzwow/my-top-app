import React, { FunctionComponent } from 'react'
import { LayoutProps } from '@/Layout/Layout.props'
import { Header } from '@/Layout/Header/Header'
import { Sidebar } from '@/Layout/Sidebar/Sidebar'
import { Footer } from '@/Layout/Footer/Footer'
import styles from './Layout.module.css'
import { AppContextProvider, IAppContext } from '@/context/App.context'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
