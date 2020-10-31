import React  from 'react'
import {Redirect, withRouter, useHistory} from 'react-router-dom'
import MainHead from './../../layout/mainHead/mainHead'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from './../../UI/button/Button'
import Typography from '@material-ui/core/Typography'
import Classes from './quizStart.module.scss'

function QuizStart(props){
  const history = useHistory()
  console.log(props)
  return(
    <>
      <Container>
        <Grid>
          <MainHead title="Quiz Start"/>
        </Grid>
        <Grid className={Classes.BlocBtn} >
         <span onClick={()=> props.history.push('/quiz')}>
          <Button className="big" >Start</Button>
         </span>
        </Grid>
      </Container>

    </>
  )
}
export default withRouter(QuizStart)