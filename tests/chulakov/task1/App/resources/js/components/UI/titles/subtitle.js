import React from 'react'
import './subtitle.scss'


const SubTitle = props => {
  return (
    <>
      <div className="sub-title">{props.children}</div>
    </>
  )
}

export default SubTitle