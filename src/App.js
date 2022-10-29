
import './App.css';
import Question from './components/question/Question';
import Quiz from './components/quiz/Quiz';
import React, { useState } from "react";
import Result from './components/result/Result';
import "antd/dist/antd.min.css";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [showResult,setShowResult] = useState(false);

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
  if(showResult) {
    return <Result quizStart={quizStart} quizStop={quizStop}/>
  } else if (isQuizStarted) {
    return <Question quizResult={quizResult}/>
  } else {
    return <Quiz quizStart={quizStart}/>
  }
}

export default App;
