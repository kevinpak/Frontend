import React from 'react'
import './h1.scss'

const H1 = props => {
  return (
    <>
      <h1 className="page-title">{props.children}</h1>
    </>
  )
}

export default H1