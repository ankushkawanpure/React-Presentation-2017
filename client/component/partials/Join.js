/**
 * Created by Ankush on 3/31/17.
 */
import React from 'react';
import ReactRouter, { Link } from 'react-router';


export  default class Join  extends React.Component{

    constructor (props) {
        super(props);
    }

    join = () => {
        var memberName = this.refs.name.value;
        this.props.emit('join', {name : memberName});
    };


    render () {
        return (
            <form action="javascript:void(0)" onSubmit = {this.join}>
                <label>Name </label>
                <input ref = "name" className="form-control" placeholder="Enter your name..." required />
                <button className="btn btn-primary"> Join </button>
                <Link to="/speaker"> Join as Speaker </Link>
                <Link to="/board"> Go to the board </Link>
            </form>
        );
    }
}

module.exports = Join;