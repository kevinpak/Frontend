import React from 'react'
import './logo.scss'
import LogoImg from './../../../../images/svg/logo.svg'

const Logo = () => {
  return (
    <div className="logo">
      <a href="#" className="logo__link" alt="Logo">
        <img src={LogoImg} alt="logo"/>
      </a>
    </div>
  )
}

export default Logo