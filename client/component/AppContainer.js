/**
 * Created by Ankush on 3/25/17.
 */
import React from 'react';
var io = require('socket.io-client');

import Header from 'partials/Header';

export default class AppContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            status: 'disconnected',
            title: '',
            member: {},
            audience: [],
            speaker: '',
            questions: [],
            slides: [],
            currentQuestion: false,
            currentSlide: false,
            results: {}
        };
        this.socket = io('http://localhost:3000');
    }

    componentWillMount() {

        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.updateState);
        this.socket.on('joined', this.joined);
        this.socket.on('audience',this.updateAudience);
        this.socket.on('start', this.start);
        this.socket.on('end', this.updateState);
        this.socket.on('ask', this.ask);
        this.socket.on('display', this.displaySlide);
        this.socket.on('results', this.updateResult);
    }

    emit = (eventName, payload) => {
        this.socket.emit(eventName, payload);
    };

    connect = () => {
        var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member): null;

        if(member && member.type ==='audience') {
            this.emit('join', member);

        } else if(member && member.type ==='speaker') {
            this.emit('start', {name : member.name, title: sessionStorage.title});
        }
        this.setState({status : 'connected'});
    };

    disconnect = () => {
        this.setState({
            status : 'disconnected',
            title : 'disconnected',
            speaker : ''
        });

    };

    updateState = (serverState) => {
        this.setState(serverState);
    };

    joined = (member) => {
        sessionStorage.member = JSON.stringify(member);
        this.setState({member: member});
    };

    updateAudience = (newAudience) => {
        this.setState({audience: newAudience});
    };

    start = (presentation) => {
        if(this.state.member.type === 'speaker') {
            sessionStorage.title = presentation.title;
        }
        this.setState(presentation);
    };

    ask = (question) => {
        sessionStorage.answer = '';
        this.setState({currentQuestion: question});
    };

    displaySlide = (slide) => {
        sessionStorage.answer = '';
        this.setState({currentSlide : slide});
    };

    updateResult = (data) => {
        this.setState({results: data});
    };

    render () {
        return(
            <div>
                <Header/>
                ANKUSH ANKUSH
            </div>
        );
    }
}

