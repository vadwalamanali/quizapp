import React from "react";
import { Button,Row,Col,Space } from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons'

const Result = (props) => {
  
    return (
        <div className="quizcontainer">
          <Space>
            <CheckCircleOutlined/>
          </Space>
        <h1>Result</h1>
        Your Score {props.score} %
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