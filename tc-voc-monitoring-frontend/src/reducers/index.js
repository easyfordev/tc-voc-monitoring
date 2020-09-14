import { combineReducers } from 'redux';
import PeriodReducer from './reducer_period';
import Class2Reducer from './reducer_class2';
import Class3Reducer from './reducer_class3';
import TotalKeywordReducer from './reducer_total_keyword';
import TotalTopicReducer from './reducer_total_topic';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    period: PeriodReducer,
    class2: Class2Reducer,
    class3: Class3Reducer,
    totalKeyword: TotalKeywordReducer,
    totalTopic: TotalTopicReducer,
    form : formReducer
});

export default rootReducer;
