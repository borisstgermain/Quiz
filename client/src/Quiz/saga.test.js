import { call, put } from 'redux-saga/effects';
import { fetchQuestionsAsync } from './saga';
import {
    FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE }
from './constant';
import { fetchQuestions, fetchQuestionsSucces, fetchQuestionsFailure } from './action';
import { getQuestions } from './service/api';

describe('fetchQuestionsAsync Saga', () => {
    const questions = [{
        question: 'What is best language?',
        answer: 'JS'
    },
    {
        question: 'What is this?',
        answer: 'Kaka'
    }];
    const action = {
        type: FETCH_QUESTIONS
    };
    const gen = fetchQuestionsAsync(action);
    const next = gen.next({data: questions});

    test('Must yield API', () => {
        expect(next.value).toEqual(call(getQuestions));
    });

    // test('Must yield action FETCH_QUESTIONS_SUCCESS', () => {
    //     expect(gen.next().value).toEqual(put({ type: FETCH_QUESTIONS_SUCCESS, questions }));
    // });

    test('Correct reacts to the failure', () => {
        const error = 'Oooops!'
        expect(gen.throw(error).value).toEqual(put({ type: FETCH_QUESTIONS_FAILURE, error }));
    });
});
