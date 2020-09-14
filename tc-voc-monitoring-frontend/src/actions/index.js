// import axios from 'axios';

export const FETCH_PERIOD  = 'FETCH_PERIOD';
export const FETCH_CLASS2 = 'FETCH_CLASS2';
export const FETCH_CLASS3 = 'FETCH_CLASS3';

// const ROOT_URL = 'http://localhost:3000/api';

export function fetchPeriod(value) {
    return {
        type: FETCH_PERIOD,
        payload: value
    };
}

export function fetchClass2(){ // Hardcoding ver.
    console.log("Action Creator is called!");

    return {
        type: FETCH_CLASS2,
        payload: ''
    };
}

export function fetchClass2_api(){ // API ver.
    // const request = axios.get(`${ROOT_URL}/posts`);
   
    return {
        type: 'FETCH_CLASS2_API',
        payload: ''
    };
}

export function fetchClass3(){ // Hardcoding ver.
    console.log("Action Creator is called!");

    return {
        type: FETCH_CLASS3,
        payload: ''
    };
}
