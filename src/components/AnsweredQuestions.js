import React, { Component } from 'react'
import QuestionPreview from './QuestionPreview';

// import { connect } from 'react-redux'

class AnsweredQuestions extends Component {
    render() {
        return (
            <div>
                <QuestionPreview />
                <QuestionPreview />
                <QuestionPreview />
                <QuestionPreview />
            </div>
        )
    }
}

export default AnsweredQuestions;