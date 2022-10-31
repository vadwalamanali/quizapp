import React,{ useEffect, useState } from "react";
import './Question.css';
import { Button,Radio,Row,Col,Space,Spin } from 'antd';
import axios from "axios";

const Question = (props) => {
    console.log(props)
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
            setData(res);
            props.totalque(res.data.results.length);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      
    if (data === undefined) {
        return <div><Spin className="loadingdata"/></div>
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
                        <Row  gutter={[24, 16]} justify="center">
                            <Col  span={24}>
                                <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                                    {data?.data?.results?.[currentIndex].question}
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                                    <Radio.Group onChange={onChange} value={value} >
                                    {data?.data?.results?.[currentIndex].incorrect_answers.map((inc, index) => {
                                    return (
                                        <Radio.Button key = {index} value={inc}>{inc}</Radio.Button> 
                                    );
                                    })}

                                    <Radio.Button value={data?.data?.results?.[currentIndex].correct_answer}>{data?.data?.results?.[currentIndex].correct_answer}</Radio.Button> 
                                        
                                    </Radio.Group>
                                </Space>
                            </Col>
                        <Col span={6}> 
                        <Space>

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
                            </Space> 
                        </Col>
                </Row>
               
            </div>
        )


}

export default Question