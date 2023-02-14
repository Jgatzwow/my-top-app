import React, { useContext } from 'react'
import styles from './Menu.module.css'
import { AppContext } from '@/context/App.context'

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)
  return (
    <div>
      {menu.map(m => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
    </div>
  )
}
