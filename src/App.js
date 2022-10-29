
import './App.css';
import Question from './components/question/Question';
import Quiz from './components/quiz/Quiz';
import React, { useState } from "react";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const quizstart = () => {
    setIsQuizStarted(true);
  }

  return (
    <>
    <div className='App'>
      
      {isQuizStarted ? <Question/> : <Quiz quizstart={quizstart}/>}
    </div>
    </>
  );
}

export default App;
