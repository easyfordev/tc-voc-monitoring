// import {FETCH_PERIOD} from '../actions/index';

// Hardcoding ver.
export default function(state=null, action) {
    return {
        'HDVoice품질': [
            {name: '발수신불량', past: 1000, now: 1300 },
            {name: '음질불량', past: 233, now: 21 },
            {name: '발신불가', past: 1214, now: 63 },
            {name: '수신불가', past: 1000, now: 3423 },
            {name: '호단절', past: 2222, now: 110 },
            {name: '어쩌고', past: 1000, now: 3423 },
            {name: '저쩌고', past: 2222, now: 110 }
        ],
        '음성품질': [
            {name: '발수신불량', past: 1000, now: 2900 },
            {name: '음질불량', past: 233, now: 21 },
            {name: '발신불가', past: 1214, now: 63 }
        ],
        '데이터품질': [
            {name: '발수신불량', past: 1000, now: 2900 },
            {name: '음질불량', past: 233, now: 21 },
            {name: '발신불가', past: 1214, now: 63 },
            {name: '수신불가', past: 1000, now: 3423 },
            {name: '호단절', past: 2222, now: 110 }
        ],
        '기타안내': [
            {name: '발수신불량', past: 1000, now: 2900 },
            {name: '음질불량', past: 233, now: 21 }
        ],
        '단말/설정': [
            {name: '발수신불량', past: 1000, now: 2900 }
        ],
        'Application': [
            {name: '발수신불량', past: 1000, now: 2900 },
            {name: '음질불량', past: 233, now: 21 },
            {name: '발신불가', past: 1214, now: 63 },
            {name: '수신불가', past: 1000, now: 3423 },
            {name: '호단절', past: 2222, now: 110 },
            {name: '어쩌고', past: 1000, now: 3423 },
            {name: '저쩌고', past: 2222, now: 110 }
        ],
        '영상품질': [
            {name: '발수신불량', past: 1000, now: 2900 },
            {name: '음질불량', past: 233, now: 21 },
            {name: '발신불가', past: 1214, now: 63 },
            {name: '수신불가', past: 1000, now: 3423 },
            {name: '호단절', past: 2222, now: 110 }
        ],
        '부가서비스오류': [
            {name: '발수신불량', past: 1000, now: 2900 },
            {name: '음질불량', past: 233, now: 21 }
        ],
        '제도/프로세스': [
            {name: '발수신불량', past: 1000, now: 2900 },
            {name: '음질불량', past: 233, now: 21 }
        ],
        'WIFI품질': [
            {name: '발수신불량', past: 1000, now: 2900 },
            {name: '음질불량', past: 233, now: 21 },
            {name: '발신불가', past: 1214, now: 63 }
        ]
    }
}

// API ver.
