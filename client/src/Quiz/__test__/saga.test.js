import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchQuestionsAsync, watchFetchQuestion } from '../saga';
import {
  FETCH_QUESTIONS,
  // FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from '../constant';
import {
// fetchQuestions,
// fetchQuestionsSuccess,
// fetchQuestionsFailure,
} from '../action';
import getQuestions from '../service/api';


describe('fetchQuestionsAsync Saga', () => {
  // const questions = [{
  //   question: 'What is best language?',
  //   answer: 'JS',
  // },
  // {
  //   question: 'What is this?',
  //   answer: 'Kaka',
  // }];
  // const action = {
  //   type: FETCH_QUESTIONS,
  // };

  let gen;
  let next;

  // const next = gen.next({data: questions});

  beforeEach(() => {
    gen = fetchQuestionsAsync();
    next = gen.next();
  });

  test('Must yield API', () => {
    expect(next.value).toEqual(call(getQuestions));
  });

  // test('Must yield action FETCH_QUESTIONS_SUCCESS', () => {
  //     expect(gen.next().value).toEqual(put(fetchQuestionsSuccess()));
  // });

  test('Correct reacts to the failure', () => {
    const error = 'Oooops!';

    expect(gen.throw(error).value).toEqual(put({ type: FETCH_QUESTIONS_FAILURE, error }));
  });
});

describe('watch FetchQuestion', () => {
  const gen = watchFetchQuestion();

  test('should wait for the FETCH_QUESTIONS action', () => {
    expect(gen.next().value).toEqual(takeEvery(FETCH_QUESTIONS, fetchQuestionsAsync));
  });
});
