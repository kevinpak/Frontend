import React, {useState, useEffect} from 'react'
import Classes from './mainHead.module.scss'

function MainHead({title='',activeQuiz=0, totalQuiz=0}){

  const [QtimerS, SetQtimerS] = useState(0)
  const [QtimerM, SetQtimerM] = useState(0)
  const [QtimerH, SetQtimerH] = useState(0)
  


  useEffect(()=>{
    const QuizTimer = ()=>{
      setTimeout(()=>{ 
        //Second & Minute
        if(QtimerS===59){
          SetQtimerS(0)
          SetQtimerM(QtimerM + 1)
        }else{
          SetQtimerS(QtimerS + 1)
        }
        //Minute & Hour
        if(QtimerM===59&&QtimerS===59){
          SetQtimerM(0)
          SetQtimerH(QtimerH + 1)
        }
      }, 1000)
    }
  
    QuizTimer()
  }, [QtimerS,QtimerM,QtimerH])

  
  const formatTimer = (x)=> (x<10)? `0${x}`:x


  return(
    <div className={Classes.MainHead}>
      <div className={Classes.MainHeadLeft}> 
        <h1 className={Classes.MainHeadTitle}> 
          {title}
        </h1>
        <span className={Classes.quizLevel+ ' hourglass-3icon-'}> 
          {activeQuiz} / {totalQuiz}
        </span>
      </div>
      <div className={Classes.MainHeadRight}> 
        <span className={Classes.quizTime+ ' clockicon-'}> 
        {formatTimer(QtimerH)}:{formatTimer(QtimerM)}:{formatTimer(QtimerS)}
        </span>
      </div>
    </div>
  )
}
export default MainHead