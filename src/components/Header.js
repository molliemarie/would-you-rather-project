import React, { Component } from 'react';
import BoardProfile from './BoardProfile';
import NewQuestion from './NewQuestion';
import Home from './Home';
// import { connect } from 'react-redux'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

class Header extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="home" key="1">
                        <Home />
                    </TabPane>
                    <TabPane tab="New Question" key="2">
                        <NewQuestion />
                    </TabPane>
                    <TabPane tab="Leader Board" key="3">
                        <BoardProfile />
                        <BoardProfile />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Header;