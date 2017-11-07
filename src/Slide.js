// Used to mange the slide display for the Slide Show app 
// Adam Starr 2017 - 06 - 30



import React, { Component } from 'react';
import * as Actions from './actions/index.js';
import { connect } from 'react-redux';


class Slide extends Component {

    componentDidMount(){
        this.props.dispatch(Actions.setNumSlides(this.numSlides));
        this.props.dispatch(Actions.reset());
    }
    //props will have fileType  
    //get numSlides
    getNumSlides(path) {
        var request = new XMLHttpRequest();
        request.open("GET", path, false);
        request.send(null)
        var slideInfo = JSON.parse(request.responseText);
        return slideInfo.numSlides
    }
    numSlides = this.getNumSlides('/Slides/'+this.props.slideName+'/slideInfo.json')
    pad(num, size) {
        var s = "0000" + num;
        return s.substr(s.length - size)
    }
    handleClick() {
        this.props.dispatch(Actions.nextSlide(this.props.slideNum, this.props.numSlides));
    }
    handleClick = this.handleClick.bind(this);
    render() {
        return ( <img id = {
                this.props.slideNum
            }
            src = {
                "./Slide_" + (this.pad(this.props.slideNum,2)) + this.props.fileType
            }
            onClick = {
                this.handleClick
            }
            style={{width:"3500px"}}
            alt = {this.props.slideName+" "+this.props.slideNum} />
        );

    }
}



const mapStateToProps = (state) => {
    return {
        slideNum: state.slideNum,
        numSlides: state.numSlides
    };
};


export default connect(mapStateToProps)(Slide);