import React from 'react'
import './sidebar.scss'
import Logo from './logo/logo'
import Menu from './menu/menu'

const menuContent = [
  {
    text: 'Первая ссылка',
    title: 'Первая ссылка',
    active: false
  },
  {
    text: 'Вторая ссылка (активная)',
    title: 'Вторая ссылка (активная)',
    active: true
  },
  {
    text: 'Третья ссылка',
    title: 'Третья ссылка',
    active: false
  },
  {
    text: 'Личный кабинет',
    title: 'Личный кабинет',
    active: false
  },
  {
    text: 'Выйти',
    title: 'Выйти',
    active: false
  }
]

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
          <Logo/>
          <Menu list={menuContent}/>
      </div>
    </aside>
  )
}
export default Sidebar