import React from 'react'
import './page.scss'



const Page = props => {
  return (
    <div className="page">
      <div className="page__container page__container--flex">
        {props.children}
      </div>
    </div>
  )
}

export default Page