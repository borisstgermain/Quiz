import { takeEvery, put, call } from 'redux-saga/effects';

import getQuestions from './service/api';
import {
  // fetchQuestions,
  fetchQuestionsFailure,
  fetchQuestionsSuccess,
} from './action';
import { FETCH_QUESTIONS } from './constant';
import toJson from './utils/parser';
import formatQuestion from './utils/format';


export function* fetchQuestionsAsync() {
  try {
    const res = yield call(getQuestions);
    const data = toJson(res.data);
    const questions = formatQuestion(data);
    yield put(fetchQuestionsSuccess(questions));
  } catch (e) {
    yield put(fetchQuestionsFailure(e));
  }
}

export function* watchFetchQuestion() {
  yield takeEvery(FETCH_QUESTIONS, fetchQuestionsAsync);
}
