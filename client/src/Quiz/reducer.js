// @flow

import type { Action, State } from './types';
import {
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTIONS_SUCCESS,
  REMOVE_QUESTION,
} from './constant';

const initialState = {
  questions: [],
  isFetching: false,
  error: '',
};

export default function quizReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [...action.questions],
        isFetching: false,
      };

    case REMOVE_QUESTION:
      return {
        ...state,
        questions: [...state.questions.slice(1)],
      };

    default:
      return state;
  }
}
