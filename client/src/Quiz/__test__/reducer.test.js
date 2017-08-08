import reducer from '../reducer';
import {
    FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE,
    REMOVE_QUESTION
} from '../constant';

const initialState = {
    questions: [],
    isFetching: false,
    error: ''
}

describe('Quiz reducer', () => {
    test('Should return the initial state', () => {
        const expectedState = initialState;
        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    test('Should handle FETCH_QUESTIONS', () => {
        const expectedState = {
            questions: [],
            error: '',
            isFetching: true
        };
        const action = {
            type: FETCH_QUESTIONS
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    test('Should handle FETCH_QUESTIONS_FAILURE', () => {
        const expectedState = {
            questions: [],
            isFetching: false,
            error: 'Ooops, Something went wrong!'
        };
        const action = {
            type: FETCH_QUESTIONS_FAILURE,
            error: 'Ooops, Something went wrong!'
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    test('Should handle FETCH_QUESTIONS_SUCCESS', () => {
        const expectedState = {
            error: '',
            isFetching: false,
            questions: [{
                question: 'What is your name?',
                answer: 'JS'
            },
            {
                question: 'How are you?',
                answer: 'ok'
            }]
        };
        const action = {
            type: FETCH_QUESTIONS_SUCCESS,
            questions: [{
                question: 'What is your name?',
                answer: 'JS'
            },
            {
                question: 'How are you?',
                answer: 'ok'
            }]
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    test('Should handle REMOVE_QUESTION', () => {
        const state = {
            error: '',
            isFetching: false,
            questions: [{
                question: 'What is your name?',
                answer: 'JS'
            },
            {
                question: 'How are you?',
                answer: 'ok'
            }]
        };
        const action = {
            type: REMOVE_QUESTION
        };
        const expectedState = {
            error: '',
            isFetching: false,
            questions: [
            {
                question: 'How are you?',
                answer: 'ok'
            }]
        };
        expect(reducer(state, action)).toEqual(expectedState);
    });
});
