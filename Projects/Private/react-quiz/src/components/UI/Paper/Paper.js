import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PaperMUI from '@material-ui/core/Paper'

const useStyles = makeStyles({
  Paper:{
    padding: '15px 20px 15px ',
    color:'#ffffff',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    marginBottom: '30px',
    '&.red':{
      backgroundColor: '#ec3b77',
    },
    '&.black':{
      backgroundColor: '#3a3a3a',
    },
    '&.blue':{
      background: 'linear-gradient(270deg, #686b6d 0%, #4a7184 101.06%)'
    }
  }
})

function  Paper(props){
  const classesMUI = useStyles()
  return(
    <PaperMUI 
      className={`${classesMUI.Paper} ${props.className}`}
    >
      {props.children}
    </PaperMUI>
  )
}
export default Paper