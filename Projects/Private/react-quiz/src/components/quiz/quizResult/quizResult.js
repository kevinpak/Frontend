import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MainHead from './../../layout/mainHead/mainHead'
import Paper from '../../UI/Paper/Paper'
import Accordeon from '../../UI/Accordeon/Accordeon'
import classes from './quizResult.module.scss'
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
          'right': true,
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
          'right': true,
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

function QuizResult(){
  const [activeQuiz, SetActiveQuiz] = useState(0)
  const [answersQuiz, SetAnswersQuiz] = useState([
    {
      'userAnswers':[0,2,3],
      'startTieme':'00:00:23',
      'finishTieme':'00:02:33'
    },
    {
      'userAnswers':[3],
      'startTieme':'00:00:23',
      'finishTieme':'00:02:33'
    },
    {
      'userAnswers':[0,1,2,3],
      'startTieme':'00:00:23',
      'finishTieme':'00:02:33'
    },
    {
      'userAnswers':[2],
      'startTieme':'00:00:23',
      'finishTieme':'00:02:33'
    },
    {
      'userAnswers':[3],
      'startTieme':'00:00:23',
      'finishTieme':'00:02:33'
    }
  ])

  const nextActiveQuiz = ()=>{
    const actvieQ = activeQuiz
    if(actvieQ<TotalQuiz){
      SetActiveQuiz(activeQuiz+1)
    }
    console.log(activeQuiz)
  }

  const ActiveQuestion = Quiz.list[activeQuiz].question
  const listAnswer = Quiz.list[activeQuiz].Answers
  const TotalQuiz = Quiz.list.length

  return(
    <div className={classes.QuizResult}>
      <Container>
        <Grid>
          <MainHead title="Title Quiz"
            activeQuiz={0}
            totalQuiz={0}
          />
        </Grid>
        <Grid className={classes.QRHead}>
          <h2>Result Quiz</h2>
          <div className="QRHeadScore">
            <span className={`${classes.QRHeadItem} ${classes.TrueAnswer} okicon-`}>: 02</span>
            <span className={`${classes.QRHeadItem} ${classes.FalseAnswer} cancelicon-`}>: 01</span>
            <span className={`${classes.QRHeadItem} ${classes.TimeAnswer} clockicon-`}>: 00:08:56</span>
          </div>
        </Grid>

        <Grid>
          <Paper>
            <Accordeon id="panel1" listAnwers={<QuizAnswers list={listAnswer} userAnswers={answersQuiz[0]}/>}  activeQuestion={ActiveQuestion} answer={true} />
            <Accordeon id="panel2" activeQuestion={ActiveQuestion} answer={false}/>
            <Accordeon id="panel3" activeQuestion={ActiveQuestion} answer={true}/>
          </Paper>
        </Grid>

      </Container>
    </div>
  )
}

export default QuizResult