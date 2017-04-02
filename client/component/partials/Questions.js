/**
 * Created by Ankush on 4/1/17.
 */
import React from 'react';

export default class Questions extends React.Component{

    addquestion = (question, index) => {

        return (
            <div key={index} className="col-xs-12 col-sm-6 col-lg-3">
                <span onClick={this.ask.bind(null, question)}>{question.q}</span>
            </div>
        );
    };

    ask = (question) => {
        this.props.emit('ask', question);
    };

    render() {
        return (
            <div id = "questions" className="col-xs-12 col-md-12">
                <h2>Question</h2>
                <div className="line"></div>
                <div className="row">
                    {this.props.questions.map(this.addquestion)}
                </div>
            </div>
        );
    }

}