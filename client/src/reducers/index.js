import { combineReducers } from 'redux';
import questionReducer from './question_reducer';

const rootReducer = combineReducers({
    question: questionReducer
});

export default rootReducer;
