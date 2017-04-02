/**
 * Created by Ankush on 4/1/17.
 */
import React from 'react';

export default class Slides extends React.Component {

    addSlide = (slide, index) => {

        return (
            <div key={index} className="col-xs-12 col-sm-6 col-lg-3">
                <span onClick={this.display.bind(null, slide)}>{slide.t}</span>
            </div>
        );
    };

    display = (slide) => {
        this.props.emit('display', slide);
    };


    render() {
        return (
            <div id = "slides" className="col-xs-12 col-md-12">
                <h2>Slides</h2>
                <div className="line"></div>
                <div className="row">
                    {this.props.slides.map(this.addSlide)}
                </div>
            </div>
        )
    }
}