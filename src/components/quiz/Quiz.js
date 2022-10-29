import React from "react";
import { Button } from 'antd';

const Quiz = (props) => {
    return (
        <div className="quizcontainer">
        <h1>Quiz App</h1>
        <Button
          type="primary"
          
          onClick={() => props.quizStart()}
        >
         Play
        </Button>    
      </div>
    )
}

export default Quiz