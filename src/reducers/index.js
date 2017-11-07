// Redux reducer code for slide show

//Adam Starr 
// 2017-07-05

import {NEXT_SLIDE, RESET, NEW_SLIDE_STATE, SERVER, SET_NUM_SLIDES} from '../actions/index.js';


function reducer(state = {}, action){
  var newState = JSON.parse(JSON.stringify(state));
  var newSlideNum =1;
  switch(action.type){
    case NEW_SLIDE_STATE:
      return Object.assign(newState, {slideNum:action.data.slideNum});
    case SERVER+NEXT_SLIDE:
     newSlideNum = state.slideNum + 1;
      newSlideNum = (newSlideNum >= state.numSlides) ? (newSlideNum - state.numSlides) : newSlideNum;
      return Object.assign(newState, {slideNum:newSlideNum});
    case NEXT_SLIDE:
     newSlideNum = state.slideNum + 1;
      newSlideNum = (newSlideNum >= state.numSlides) ? (newSlideNum - state.numSlides) : newSlideNum;
      return Object.assign(newState, {slideNum:newSlideNum});
    case SERVER+RESET:
      return Object.assign(newState, {slideNum: 0});
    case RESET:
      return Object.assign(newState, {slideNum: 0});
    case SET_NUM_SLIDES:
      return Object.assign(newState, {numSlides: action.data.numSlides});
    default:
      return state;
  }
}

export default reducer;