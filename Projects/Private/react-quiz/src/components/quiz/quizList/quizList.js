import React, { useState } from 'react'
import {Link, Redirect, withRouter, useHistory}  from 'react-router-dom'
import Classes from './quizList.module.scss'
import MainHead from './../../layout/mainHead/mainHead'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from './../../UI/button/Button'
import Paper from '../../UI/Paper/Paper'
import QuizQuestion from './../quizList/quizQuestion'
import QuizAnswers from './../quizList/quizAnswers'


const Quiz = {
  'activeQuestion':0,
  'quizTile':"Test for first project witch React",
  'User': 'Kevin',
  'list':[
    {
      'question': `1 - Lorem ipsum dolor sit amet, consectetur, adipisicing elit. 
      Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
      sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus ?`,
      'Answers':[
        {
          'id':1,
          'text': ` ANSWER - 1 Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
          sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus`,
          'right': false,
          'maxTime': '20',
        },
        {
          'id':2,
          'text': ` ANSWER - 2 Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
          sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus`,
          'right': false,
          'maxTime': '20',
        },
        {
          'id':3,
          'text': ` ANSWER - 3Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
          sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus`,
          'right': false,
          'maxTime': '20',
        },
        {
          'id':4,
          'text': ` ANSWER - 5 Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
          sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus`,
          'right': false,
          'maxTime': '20',
        },
        {
          'id':5,
          'text': ` ANSWER - 5 Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
          sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus`,
          'right': false,
          'maxTime': '20',
        }

      ]
    },
    {
      'question': `2 - Lorem ipsum dolor sit amet, consectetur, adipisicing elit. 
      Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
      sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus?`,
      'Answers':[
        {
          'id':1,
          'text': ' ANSWER - 2-1',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':2,
          'text': ' ANSWER - 2-2',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':3,
          'text': ' ANSWER - 2-3',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':4,
          'text': ' ANSWER - 2-4',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':5,
          'text': ' ANSWER - 2-5',
          'right': false,
          'maxTime': '20',
        }

      ]
    },
    {
      'question': `3 - Lorem ipsum dolor sit amet, consectetur, adipisicing elit. 
      Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
      sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus?`,
      'Answers':[
        {
          'id':1,
          'text': ' ANSWER - 3-1',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':2,
          'text': ' ANSWER - 3-2',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':3,
          'text': ' ANSWER - 3-4',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':4,
          'text': ' ANSWER - 3-5',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':5,
          'text': ' ANSWER - 1',
          'right': false,
          'maxTime': '20',
        }

      ]
    },
    {
      'question': `4 - Lorem ipsum dolor sit amet, consectetur, adipisicing elit. 
      Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
      sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus?`,
      'Answers':[
        {
          'id':1,
          'text': ' ANSWER - 4-1',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':2,
          'text': ' ANSWER - 4-2',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':3,
          'text': ' ANSWER - 4-3',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':4,
          'text': ' ANSWER - 4-4',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':5,
          'text': ' ANSWER - 4-5',
          'right': false,
          'maxTime': '20',
        }

      ]
    },
    {
      'question': `5 - Lorem ipsum dolor sit amet, consectetur, adipisicing elit. 
      Laborum illum deleniti dicta, commodi reprehenderit nobis blanditiis, molestias delectus, unde corporis 
      sequi adipisci illo officia animi sapiente recusandae eius natus, accusamus?`,
      'Answers':[
        {
          'id':1,
          'text': ' ANSWER - 5-1',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':2,
          'text': ' ANSWER - 5-2',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':3,
          'text': ' ANSWER - 5-3',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':4,
          'text': ' ANSWER - 5-4',
          'right': false,
          'maxTime': '20',
        },
        {
          'id':5,
          'text': ' ANSWER - 5-5',
          'right': false,
          'maxTime': '20',
        }

      ]
    },

  ]
}



function QuizList(props){
  const history = useHistory()
  const [activeQuiz, SetActiveQuiz] = useState(0)
  const listAnswer = Quiz.list[activeQuiz].Answers
  const TotalQuiz = Quiz.list.length


  const nextActiveQuiz = ()=>{
    const actvieQ = activeQuiz
    const NewTotalQuiz = TotalQuiz - 1


    if(actvieQ<NewTotalQuiz){
      SetActiveQuiz(activeQuiz+1)
    }else{
      props.history.push('/quiz/result')
    }
    
    
  }


  


  return(
    <div className={Classes.QuizList}>
      <Container>
        <Grid>
          <MainHead title="Title Quiz"
          activeQuiz={activeQuiz+1}
          totalQuiz={TotalQuiz}
          />
        </Grid>
        <Grid >
          <Paper className="blue">
            <QuizQuestion>
              {Quiz.list[activeQuiz].question}
            </QuizQuestion>
          </Paper>

          <Paper>
            <QuizAnswers list={listAnswer}/>
          </Paper>
          <Grid className={Classes.BlocBtn}>
            <Button variant="contained" className="med" onClick={nextActiveQuiz}><span className="smallText">({activeQuiz+1}/{TotalQuiz})</span>Next </Button>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}
export default QuizList