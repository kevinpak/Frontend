import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonMUI from '@material-ui/core/Button'


const useStyles = makeStyles({
  Btn:{
    backgroundColor: '#607d8b',
    padding: '2px 10px',
    color:'#ffffff',
    '&.big':{
      padding: '8px 35px',
      fontSize: '1.5rem'
    },
    '&.med':{
      padding: '8px 30px',
      fontSize: '1rem'
    },
    '&:hover':{
      backgroundColor: '#49636f',
    },
    '& .smallText':{
      fontSize:'0.8rem',
      letterSpacing:'0.6px',
      paddingRight:'8px'
    }
  }
})


function Button(props){
  const classesMUI = useStyles()
  return(
    <ButtonMUI 
      variant="contained" 
      className={`${classesMUI.Btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonMUI>
  )
}

export default Button