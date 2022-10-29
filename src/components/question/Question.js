import React from "react";
import '/Users/mardesai1/quizapp/src/components/question/Question.css';
import { Button } from 'antd';

const Question = (props) => {
    return (
        <div className="questionbox">
            <h1 className="quetitle">Question</h1>
           
                <span>4 of 5</span>
                <p>Which is the </p>
            
            <Button
                type="primary"
                onClick={() => props.quizResult()}
                >
                Quit
            </Button>   
        </div>
    )
}

export default Question