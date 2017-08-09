// @flow

import { combineReducers } from 'redux';
import quizReducer from '../Quiz/reducer';

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export default rootReducer;
