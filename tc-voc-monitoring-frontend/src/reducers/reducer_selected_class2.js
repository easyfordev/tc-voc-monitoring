import {FETCH_SELECTED_CLASS2} from '../actions/index';

export default function(state='HDVoice품질', action) {
    switch (action.type) {
        case FETCH_SELECTED_CLASS2:
            return action.payload;
        default :
            return state;
    }
}