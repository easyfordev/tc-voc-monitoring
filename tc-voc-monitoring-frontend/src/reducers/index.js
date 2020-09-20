import { combineReducers } from 'redux';
import PeriodReducer from './reducer_period';
import Class2Reducer from './reducer_class2';
import Class3Reducer from './reducer_class3';
import TotalKeywordReducer from './reducer_total_keyword';
import TotalTopicReducer from './reducer_total_topic';
import ExcelDataReducer from './reducer_excel_data';
import SelectedClass2Reducer from './reducer_selected_class2';
import AnalysisDataReducer from './reducer_analysis_data';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    period: PeriodReducer,
    class2: Class2Reducer,
    class3: Class3Reducer,
    totalKeyword: TotalKeywordReducer,
    totalTopic: TotalTopicReducer,
    excelData: ExcelDataReducer,
    selectedClass2: SelectedClass2Reducer,
    analysisData: AnalysisDataReducer,
    form : formReducer
});

export default rootReducer;
