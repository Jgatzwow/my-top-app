import React from 'react'
import { SidebarProps } from '@/Layout/Sidebar/Sidebar.props'
import { Menu } from '@/Menu/Menu'

export const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  )
}
