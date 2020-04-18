import React, { Component } from 'react';
import UnansweredQuestions from './UnansweredQuestions';
import AnsweredQuestions from './AnsweredQuestions';
// import { connect } from 'react-redux'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

class Home extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Unanswered Questions" key="1">
                        <UnansweredQuestions />
                    </TabPane>
                    <TabPane tab="Answered Questions" key="2">
                        <AnsweredQuestions />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Home;