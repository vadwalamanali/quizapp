import React from "react";
import { Button,Row,Col,Space } from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';
import './Result.css';

const Result = (props) => {
  
    return (
        <div className="quizcontainer">
          <Space>
            <CheckCircleOutlined className="rightresult"/>
          </Space>
          <h1 className="result">Result</h1>
          <div className="score">Your Score {Math.floor(props.score/props.totalque*100)}%</div>
          <div className="score">Total Number Of Question: {props.totalque}</div>
          <div className="score">Total Number Of Correct Answer : {props.score}</div>
        <Row>
          <Col span={6}>
          <Space>
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
            </Space>
          </Col>
        </Row>
      </div>
    )
}

export default Result