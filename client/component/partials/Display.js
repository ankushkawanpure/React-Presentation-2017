/**
 * Created by Ankush on 3/31/17.
 */
import React from 'react';

export default class Display extends React.Component{
    render() {
        return (this.props.if) ? <div> {this.props.children}</div>: null;
    }
}
