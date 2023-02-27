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
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const buildFirstLevel = () => {
    return (
      <>
        {firstLVLMenu.map(menu => {
          return (
            <div key={menu.route}>
              <a href={`/${menu.route}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menu.id === firstCategory
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
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
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map(p => (
      <a
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false
        })}
      >
        {p.category}
      </a>
    ))
  }
  return <div className={styles.menu}>{buildFirstLevel()}</div>
}
