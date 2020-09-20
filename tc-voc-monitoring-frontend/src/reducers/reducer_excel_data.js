// import {FETCH_PERIOD} from '../actions/index';

// Hardcoding ver.
export default function(state=null, action) {
    // 여기 원래 switch 문 들어가서, request 받아온 값으로 넘겨줘야 함

    return {
        keyword: '카카오톡',
        voclist: [ // 여기는 유형재분류 row가 그대로 들어온다. 컬럼 130개?그거
            {key: 'imsi+time', phone: 'ewew', class2: 'dsds', class3: 'sdkfa', memo: '안된다구요 안되요'},
            {key: 'sdfdfafae+time', phone: 'ewew', class2: 'dsds', class3: 'sdkfa', memo: '안된다구요 안되요'},
            {key: '32egergkopk+time', phone: 'ewew', class2: 'dsds', class3: 'sdkfa', memo: '안된다구요 안되요'},
            {key: 'po0fi9s+time', phone: 'ewew', class2: 'dsds', class3: 'sdkfa', memo: '안된다구요 안되요'},
            {key: '03i2p9jrflglk+time', phone: 'ewew', class2: 'dsds', class3: 'sdkfa', memo: '안된다구요 안되요'}
        ]
    }
}

