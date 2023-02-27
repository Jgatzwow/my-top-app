import React, { useContext } from 'react'
import { AppContext } from '@/context/App.context'
import { FirstLVLMenuItem, PageItem } from '@/interfaces/menu.interface'
import { CoursesIcon } from '@/Menu/IconComponents/CoursesIcon'
import { TopLevelCategory } from '@/interfaces/topPage.interface'
import { ServicesIcon } from '@/Menu/IconComponents/ServicesIcon'
import { BooksIcon } from '@/Menu/IconComponents/BooksIcon'
import { ProductsIcon } from '@/Menu/IconComponents/ProductsIcon'
import styles from './Menu.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

const firstLVLMenu: FirstLVLMenuItem[] = [
  {
    route: 'courses',
    name: 'Courses',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses
  },
  {
    route: 'services',
    name: 'Services',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services
  },
  {
    route: 'books',
    name: 'Books',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books
  },
  {
    route: 'products',
    name: 'Products',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products
  }
]

export const Menu = () => {
  const router = useRouter()
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map(m => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened
          }
          return m
        })
      )
  }

  const buildFirstLevel = () => {
    return (
      <>
        {firstLVLMenu.map(menu => {
          return (
            <div key={menu.route}>
              <Link href={`/${menu.route}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menu.id === firstCategory
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </Link>

              {menu.id === firstCategory && buildSecondLevel(menu)}
            </div>
          )
        })}
      </>
    )
  }
  const buildSecondLevel = (menuItem: FirstLVLMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map(p => (
      <Link
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
        })}
        href={`/${route}/${p.alias}`}
        key={p._id}
      >
        {p.category}
      </Link>
    ))
  }
  return <div className={styles.menu}>{buildFirstLevel()}</div>
}
