import React from 'react'
import './page-head.scss'
import H1 from './../UI/titles/h1';
import SubTitle from './../UI/titles/subtitle';


const PageHead = props => {
  return (
    <div className="page-head">
      <div className="page-head__container">
        <H1>Заголовок страницы</H1>
        <SubTitle>
          В отличие от пылевого и ионного хвостов, направление поступает
          в лимногляциальный часовой угол
        </SubTitle>
      </div>
    </div>
  )
}

export default PageHead