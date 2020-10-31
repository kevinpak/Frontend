import React from 'react'
import List from '@material-ui/core/List'
import Classes from './quizAnswers.module.scss'
import ListItem from '../../UI/li/li'


function QuizAnswers (props){
  const listITEMS = props.list
  return(
    <List className={Classes.quizAnswers}>
      {
        listITEMS?
          props.list.map((item, index)=>{
            return(
              <ListItem key={index} itemId={index} type={item.right} userAnswers={props.userAnswers}> 
                {item.text}
              </ListItem>
            )
          })
        :'No find list'
      } 
    </List>
  )
}
export default QuizAnswers
