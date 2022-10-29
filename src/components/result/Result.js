import React from "react";
import { Button } from 'antd';

const Result = (props) => {
    return (
        <div className="quizcontainer">
        <h1>Result</h1>
        <Button
          type="primary"
          onClick={() => props.quizStart()}
        >
         Start quiz
        </Button>
        <Button
          type="primary"
          onClick={() => props.quizStop()}
        >
         back to home
        </Button>
      </div>
    )
}

export default Result