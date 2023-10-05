https://opentdb.com/api.php?amount=1
import './App.css';
import Question from './components/question/Question';
import Quiz from './components/quiz/Quiz';
import React, { useState } from "react";
import Result from './components/result/Result';
import "antd/dist/antd.min.css";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [showResult,setShowResult] = useState(false);
  const [score,setScore] = useState(0);
  const [totalque,setTotalQue] = useState(0);

  const quizStart = () => {
    setShowResult(false);
    setIsQuizStarted(true);
  }
  const quizResult = () => {
    setShowResult(true);
  }
  const quizStop = () => {
    setShowResult(false);
    setIsQuizStarted(false);
  }

  const saveScore = (answer,value) => {
    let correctans = answer
    if(value === correctans) {
        setScore(score+1);
    }
    
}
  if(showResult) {
    return <Result quizStart={quizStart} quizStop={quizStop} score={score} totalque={totalque} />
  } else if (isQuizStarted) {
    return <Question quizResult={quizResult} saveScore={saveScore}  totalque={setTotalQue}/>
  } else {
    return <Quiz quizStart={quizStart}/>
  }
}

export default App;
