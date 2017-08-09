// @flow

import type { Action, Question } from './types';
import {
  FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE,
  REMOVE_QUESTION,
} from './constant';

export function fetchQuestions(): Action {
  return {
    type: FETCH_QUESTIONS,
  };
}

export function fetchQuestionsSuccess(questions: Array<Question>): Action {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    questions,
  };
}

export function fetchQuestionsFailure(error: string): Action {
  return {
    type: FETCH_QUESTIONS_FAILURE,
    error,
  };
}

export function removeQuestion(): Action {
  return {
    type: REMOVE_QUESTION,
  };
}
