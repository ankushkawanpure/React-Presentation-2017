/**
 * Created by Ankush on 4/1/17.
 */
import React from 'react';

export default class Attendance extends React.Component{

    addMemberRow = (member ,i) => {

        return (
            <tr key ={i}>
                <td>{member.name}</td>
                <td>{member.id}</td>
            </tr>
        );
    }

    render() {
        return (
            <div className="col-xs-12 col-md-12" id="attendance">
                <h2> Attendance - {this.props.audience.length} Members </h2>
                <div className="line"></div>
                <table className="table" >
                    <thead>
                    <tr>
                        <th> Audience Member </th>
                        <th> Member ID </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.audience.map(this.addMemberRow)}
                    </tbody>
                </table>
            </div>

        )
    }

}