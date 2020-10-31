import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItemMUI from '@material-ui/core/ListItem';
import Classes from './li.module.scss';

const useStyles = makeStyles({
  ListItem:{
    color: '#434343',
    borderBottom: 'solid 1px #00695c',
    fontSize: '0.9rem',
    lineHeight: '1.5rem',
    textTransform: 'none',
    paddingTop: '18px',
    paddingBottom: '18px',
    cursor:'pointer',
    transition:'.5s linear',
    '&:last-child':{
      borderBottom:'none'
    },
    '&:hover':{
      color:'#ffffff',
      backgroundColor:'#758288'
    },
    '&.colorGreen':{
      backgroundColor: '#cbdad4',
      color: '#3e3a3a'
    },
    
  }
})



  


function  ListItem(props){
  const classesMUI = useStyles()
  const UserAnswers = props.userAnswers
  let listUserAnswer = []
  if(UserAnswers){
    listUserAnswer = UserAnswers.userAnswers
  }
  let userChecked = false
  if(props.itemId&&listUserAnswer.includes(props.itemId)){
    userChecked = true
  }

  //console.log(props)

  return(
    <ListItemMUI 
      className={`
        ${classesMUI.ListItem} 
        ${Classes.ListItem} ${props.className? props.className:''} 
        ${props.type? 'colorGreen':''} 
        ${(userChecked)? Classes.isChecked +' checkicon-' : 'check-emptyicon-'} 
        ${(userChecked&&props.type)? Classes.yesTrue:''}
      `}
    >
      {props.children}
    </ListItemMUI>
  )
}
export default ListItem