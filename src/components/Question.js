import React, { useState } from "react";
import './Question.css';

const Question = () => {
    return (
        <div className="questionbox">
            <h1 className="quetitle">Question</h1>
           <div className="queline">
                 <span>4 of 5</span>
                <p>Which is the </p>
            </div>
        </div>
    )
}

export default Question