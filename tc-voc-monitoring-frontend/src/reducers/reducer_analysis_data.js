// import {FETCH_PERIOD} from '../actions/index';

// Hardcoding ver.
export default function(state=null, action) {
    return [
        { 
            basis: '본부', 
            data: [
                {name: '수도권', past: 1000, now: 1300 },
                {name: '중부', past: 233, now: 21 },
                {name: '서부', past: 1214, now: 63 },
                {name: '동부', past: 1000, now: 3423 }
            ]
        },
        {
            basis: '지역(시도)',
            data: [
                {name: '경기', past: 1000, now: 2900 },
                {name: '서울', past: 233, now: 21 },
                {name: '대전', past: 1214, now: 63 },
                {name: '대구', past: 233, now: 21 },
                {name: '충북', past: 233, now: 21 }
            ],
        },
        {
            basis: '지역(읍면동)',
            data: [
                {name: '중앙동', past: 1000, now: 2900 },
                {name: '서정동', past: 233, now: 21 },
                {name: '봉천동', past: 1214, now: 63 },
                {name: '서천동', past: 1000, now: 3423 },
                {name: '장안동', past: 2222, now: 110 },
                {name: '서천동', past: 1000, now: 3423 },
                {name: '장안동', past: 2222, now: 110 },
                {name: '서천동', past: 1000, now: 3423 },
                {name: '장안동', past: 2222, now: 110 },
                {name: '서천동', past: 1000, now: 3423 },
                {name: '장안동', past: 2222, now: 110 }
            ],
        },
        {
            basis: '요금제',
            data: [
                {name: '5GX프라임', past: 1000, now: 2900 },
                {name: 'T플랜에센스', past: 233, now: 21 }
            ]
        },
        {
            basis: '단말기',
            data: [
                {name: 'SM N978N 258GB', past: 1000, now: 2900 }
            ]
        },
        {
            basis: 'MME',
            data: [
                {name: '#31', past: 1000, now: 2900 },
                {name: '#32', past: 233, now: 21 },
                {name: '#81', past: 1214, now: 63 },
                {name: '#14', past: 1000, now: 3423 },
                {name: '#11', past: 2222, now: 110 },
                {name: '#42', past: 1000, now: 3423 },
                {name: '#22', past: 2222, now: 110 }
            ]
        },
        {
            basis: 'MSS',
            data: [
                {name: '#21', past: 1000, now: 2900 },
                {name: '#25', past: 233, now: 21 },
                {name: '#255', past: 1214, now: 63 },
                {name: '#55', past: 1000, now: 3423 },
                {name: '#92', past: 2222, now: 110 }
            ]
        },
        {
            basis: 'TAS',
            data: [
                {name: '#23', past: 1000, now: 2900 },
                {name: '#22', past: 233, now: 21 },
                {name: '#21', past: 1000, now: 2900 },
                {name: '#92', past: 1000, now: 2900 },
                {name: '#13', past: 1000, now: 2900 },
                {name: '#43', past: 1000, now: 2900 }
            ]
        },
        {
            basis: 'SMSC',
            data: [
                {name: '#23', past: 1000, now: 2900 },
                {name: '#22', past: 233, now: 21 },
                {name: '#21', past: 1000, now: 2900 },
                {name: '#92', past: 1000, now: 2900 },
                {name: '#13', past: 1000, now: 2900 },
                {name: '#43', past: 1000, now: 2900 }
            ]
        },
        {
            basis: 'PFX',
            data: [
                {name: '0109413', past: 1000, now: 2900 },
                {name: '0103971', past: 233, now: 21 },
                {name: '0107240', past: 1214, now: 63 }
            ]
        }
    ]
}

// API ver.
