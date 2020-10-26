import React, { Children } from 'react'
import './section.scss'

const Section = (props) => {
  return (
    <>
      <section className={`section ${props.className}`}>
        <div className="section__container">
          <h2 className="section__title">{props.title}</h2>
          <div className={`section__inner ${props.innerClassName}`}>
            {props.children}
          </div>
        </div>
      </section>
    </>
  )
}

export default Section
