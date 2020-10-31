import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import QuizStart from './components/quiz/quizStart/quizStart'
import QuizList from './components/quiz/quizList/quizList'
import NotFound from './components/404/404.js'
import './librairies/fontello/css/fontello.css'
import Classes from './styles/App.module.scss'
import QuizResult from './components/quiz/quizResult/quizResult';

function App() {
  return (
    <div className={Classes.App}>
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path="/" component={QuizStart}></Route>
            <Route exact path="/quiz" component={QuizList}></Route>
            <Route exact path="/quiz/result" component={QuizResult}></Route>
            <Route  component={NotFound}></Route>
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
