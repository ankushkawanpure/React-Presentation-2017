/**
 * Created by Ankush on 4/1/17.
 */
import React from 'react';

import ReactRouter, {Link} from 'react-router';

export default class JoinSpeaker extends React.Component{

    start = () => {
        var speakerName = this.refs.name.value;
        var title = this.refs.title.value;

        this.props.emit('start', {name: speakerName, title: title});
    }


    render () {
        return (
            <form action="javascript:void(0)" onSubmit = {this.start}>

                <label> Presentation Title </label>
                <input ref = "title" className="form-control" placeholder="Enter Title..." required />

                <label> Your Name </label>
                <input ref = "name" className="form-control" placeholder="Enter your name..." required />

                <button className="btn btn-primary"> Join </button>

                <Link to="/"> Join as Guest </Link>
                <Link to="/board"> Go to the board </Link>
            </form>
        );
    }
}
