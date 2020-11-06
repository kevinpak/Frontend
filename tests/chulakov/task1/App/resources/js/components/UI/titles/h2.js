import React from 'react'
import './h2.scss'

const H2 = props => {
  return (
    <>
      <h2 className="page-block-title">{props.children}</h2>
    </>
  )
}

export default H2