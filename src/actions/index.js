// Redux action code for slide show

//Adam Starr 
// 2017-07-05
export const SERVER = 'server/';
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const RESET = 'RESET_SLIDESHOW';
export const NEW_SLIDE_STATE = 'NEW_SLIDE_STATE';
export const SET_NUM_SLIDES = 'SET_NUM_SLIDES';

export const nextSlide = (slideNum, numSlides, showName) => {
    return {
        type: SERVER + NEXT_SLIDE,
        data: {}
    };
}

export const reset = (showName) => {
    return {
        type: SERVER + RESET,
        data: {
            slideNum: 1,
        }
    }
}

export const newState = (slideNum) => {
    return {
        type: NEW_SLIDE_STATE,
        data: {
            slideNum: slideNum,
        }
    };
}


export const setNumSlides = (numSlides) => {
    return {
        type: SET_NUM_SLIDES,
        data: {
            numSlides: numSlides,
        }
    };
}

export default nextSlide;