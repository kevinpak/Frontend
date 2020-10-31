import React, {useState,useRef} from  'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import Classes from './header.module.scss'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuListe from './../../UI/menuList/menuList'

function Header(){

  

  

  return(
    <AppBar color="inherit" className={Classes.header}>
      <Toolbar>
        <IconButton edge="start" className={Classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link to="/" className={Classes.title}>QUIZ-V0.1</Link>
        <MenuListe id="menuListUserHeader" btnTitle="User Name"/>
      </Toolbar>
    </AppBar>
  )
}

export default Header