import React from 'react'
import Classes from './quizQuestion.module.scss'

function QuizQuestion (props){
  return(
    <div className={Classes.quizQuestion}>
      {props.children}
    </div>
  )
}
export default QuizQuestion
