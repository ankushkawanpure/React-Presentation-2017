/**
 * Created by Ankush on 4/1/17.
 */
import React from 'react';
import Display from './partials/Display';
import JoinSpeaker from './partials/JoinSpeaker';
import Attendance from './partials/Attendance';
import Questions from './partials/Questions';
import Slides from './partials/Slides';

export default class Speaker extends React.Component {

    render () {
        return(
            <div className="row" id ="speakerpanal">

                <Display if={this.props.status === 'connected'}>

                    <Display if={this.props.member.name && this.props.member.type === 'speaker'}>

                        <Questions questions={this.props.questions} emit={this.props.emit}/>
                        <Slides slides = {this.props.slides} emit={this.props.emit}/>
                        <Attendance audience = {this.props.audience} />

                    </Display>

                    <Display if={!this.props.member.name}>

                        <div className="col-md-12 audiance">
                            <h2> Start the presentation</h2>
                            <div className="line"></div>
                            <JoinSpeaker emit={this.props.emit} />
                        </div>
                    </Display>
                </Display>
            </div>

        );
    }
}
