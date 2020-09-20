// import axios from 'axios';

export const FETCH_PERIOD  = 'FETCH_PERIOD';
export const FETCH_CLASS2 = 'FETCH_CLASS2';
export const FETCH_CLASS3 = 'FETCH_CLASS3';
export const FETCH_EXCEL_DATA = 'FETCH_EXCEL_DATA';
export const FETCH_SELECTED_CLASS2 = 'FETCH_SELECTED_CLASS2';
export const FETCH_ANALYSIS_DATA = 'FETCH_ANALYSIS_DATA';

// const ROOT_URL = 'http://localhost:18080/api';

export function fetchPeriod(value) {
    return {
        type: FETCH_PERIOD,
        payload: value
    };
}

export function fetchSelectedClass2(value, callback) {
    callback(value);
    return {
        type: FETCH_SELECTED_CLASS2,
        payload: value
    };
}

export function fetchExcelData(type, keyword, dt, callback ){ // 하드코딩버전 starttime, endtime도 붙여야 함
    console.log("엑셀에서 데이터를 가져오자!");
    console.log("타입:" + type + " keyword:" +keyword + "dt: " + dt);

    if (type === 'keyword') {
        // const url = `${ROOT_URL}&q=${city},us`; // 여기에 파라미터 가져온거 다 붙이면 된다
        // const request = axios.get(url);
        // const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        //     .then( () => callback() );

        // console.log('Requests:', request);
        callback();
    } else if (type === 'topic') {

    }
    

    return {
        type: FETCH_EXCEL_DATA,
        payload: '' // request
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

export function fetchAnalysisData(){ // Hardcoding ver.
    return {
        type: FETCH_ANALYSIS_DATA,
        payload: ''
    };
}
