import React,{ useEffect, useState } from "react";
import '/Users/mardesai1/quizapp/src/components/question/Question.css';
import { Button,Radio } from 'antd';
import axios from "axios";

const Question = (props) => {

    const [data, setData] = React.useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [value, setValue] = useState();

    const onChange = (e) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        axios
          .get("https://opentdb.com/api.php?amount=20")
          .then((res) => {
            //console.log(res);
            setData(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      
    if (data === undefined) {
        return <div>Loading...</div>
    }

    const next = () => {
        if(currentIndex !== data.data.results.length-1 ){
            setCurrentIndex(currentIndex + 1);
            props.saveScore(data?.data?.results?.[currentIndex].correct_answer,value);
        }
    }
    const prev = () => {
        if(currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1)
        }
        
    }
        return (

            <div className="questionbox">
                <h1 className="quetitle">Question</h1>
                    <span>{currentIndex + 1}/{data.data.results.length}</span>
                    {data?.data?.results?.[currentIndex].question}
                    <Radio.Group onChange={onChange} value={value} >
                    {data?.data?.results?.[currentIndex].incorrect_answers.map((inc, index) => {
                    return (
                        <Radio key = {index} value={inc}>{inc}</Radio> 
                    );
                    })}

                    <Radio value={data?.data?.results?.[currentIndex].correct_answer}>{data?.data?.results?.[currentIndex].correct_answer}</Radio> 
                        
                    </Radio.Group>
                <div>
                {currentIndex !== data.data.results.length-1 && ( 
                    <Button
                        type="primary"
                        onClick={() => props.quizResult()}
                        >
                        Quit
                    </Button>   
                )}
                {currentIndex !== data.data.results.length-1 ? 
                    (
                        <Button
                            type="primary"
                            onClick={() => next()}
                            >
                            Next
                        </Button>   
                    ) : (
                        <Button
                            type="primary"
                            onClick={() => props.quizResult()}
                            >
                            SUBMIT
                        </Button>   
                    )
                }
                <Button
                    disabled={currentIndex === 0 ? true : false}
                    type="primary"
                    onClick={() => prev()}
                    >
                    prev
                </Button>  
                </div> 
            </div>
        )


}

export default Question