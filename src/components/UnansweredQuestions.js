import React, { Component } from 'react';
import QuestionPreview from './QuestionPreview';
// import { connect } from 'react-redux'

class UnansweredQuestions extends Component {
    render() {
        return (
            <div>
                <QuestionPreview />
                <QuestionPreview />
                <QuestionPreview />
            </div>
        )
    }
}

export default UnansweredQuestions;