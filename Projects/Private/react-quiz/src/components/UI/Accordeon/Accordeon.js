import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import classes from './Accordeon.module.scss'
import { nodeName } from 'jquery'



const useStyles = makeStyles((theme) => ({
  Accordeon:{
    
  },
  root: {
    width: '100%',
    border:'solid 1px #ddd',
    boxShadow: 'none',
    borderRadius: '0 0 0 0 !important',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    '&>[class*="MuiPaper-elevation"]':{
      boxShadow:'none',
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },

}))


function Accordeon(props){
  const classesMUI = useStyles();
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return(
    <div className={`${classes.Accordeon} ${classesMUI.root}`}>
      <Accordion expanded={expanded === props.id} onChange={handleChange(props.id)}>
      
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${props.id}bh-content`}
            id={`${props.id}bh-header`}
          >
            <Typography className={classes.heading}> {props.activeQuestion} {props.answer? <i className={classes.trueAnswer+' okicon-'}></i>:<i className={classes.falseAnswer+' cancelicon-'}></i>}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.listAnwers} 
        </AccordionDetails>
      </Accordion>
    </div>
  )
}


export default Accordeon