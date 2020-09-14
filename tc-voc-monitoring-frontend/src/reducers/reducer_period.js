import {FETCH_PERIOD} from '../actions/index';

export default function(state='3h', action) {
    switch (action.type) {
        case FETCH_PERIOD:
            const newState = action.payload;
            state = newState;

            return state;
        default :
            return state;
    }
}

