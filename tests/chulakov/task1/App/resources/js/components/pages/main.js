import React from 'react'
import './main.scss'
import PageHead from './page-head'
import Pay from './pay/pay'
import PageFooter from './page-footer'

const Main = props => {
  return (
    <div className="main">
      <PageHead/>
      <div className="main__container">
        <Pay/>
      </div>
      <PageFooter/>
    </div>
  )
}

export default Main