import React, {useState, useEffect} from 'react'
import './menu.scss'

const Menu = props => {
  const contentMenu = props.list || null
  let menuList = ''
  if (contentMenu ) {
    menuList = contentMenu.map((item, index) => {
      return (
        <li className="menu__item" key={index}>
          <a href="#" className={`menu__link ${item.active?'menu__link--active':''}`} title={item.title}>{item.text}</a>
        </li>
      )
    })
  } else {
    menuList = `
      <li className="menu__item">
        <a href="#" className="menu__link" title="Главная">Главная</a>
      </li>
    `
  }

  const [activeMenu , setActiveMenu] = useState(false)
  let classMenu = ''

  const handleClic = () => {
    const newStatusMenu = !activeMenu
    setActiveMenu(newStatusMenu)
  }
  
  useEffect(() => {

  }, [activeMenu])
console.log(classMenu)
  return (
    <>
      <a href="#" className="open-menu" onClick={handleClic}><span></span></a>
      <nav className={`menu ${activeMenu ? 'menu--active':''}`}>
        <ul className="menu__list">{menuList}</ul>
      </nav>
    </>
  )
}
export default Menu