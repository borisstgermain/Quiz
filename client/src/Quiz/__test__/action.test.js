import {
  fetchQuestions,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  removeQuestion,
} from '../action';
import {
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  REMOVE_QUESTION,
} from '../constant';


describe('Quiz Action creators', () => {
  describe('fetchQuestions', () => {
    test('Correct type', () => {
      const expectedAction = { type: FETCH_QUESTIONS };
      expect(fetchQuestions()).toEqual(expectedAction);
    });
  });

  describe('fetchQuestionsSuccess', () => {
    test('Correct type', () => {
      const expectedAction = { type: FETCH_QUESTIONS_SUCCESS };
      expect(fetchQuestionsSuccess()).toEqual(expectedAction);
    });

    test('Correct payloads', () => {
      const questions = [{
        question: 'What is best language?',
        answer: 'JS',
      },
      {
        question: 'What is this?',
        answer: 'Kaka',
      }];

      const expectedAction = {
        type: FETCH_QUESTIONS_SUCCESS,
        questions,
      };

      expect(fetchQuestionsSuccess(questions)).toEqual(expectedAction);
    });
  });

  describe('fetchQuestionsFailure', () => {
    test('Correct type', () => {
      const expectedAction = { type: FETCH_QUESTIONS_FAILURE };

      expect(fetchQuestionsFailure()).toEqual(expectedAction);
    });

    test('Correct payloads', () => {
      const error = 'Ooops, Something went wrong!';

      const expectedAction = {
        type: FETCH_QUESTIONS_FAILURE,
        error,
      };

      expect(fetchQuestionsFailure(error)).toEqual(expectedAction);
    });
  });

  describe('remove question', () => {
    test('Correct type', () => {
      const expectedAction = { type: REMOVE_QUESTION };

      expect(removeQuestion()).toEqual(expectedAction);
    });
  });
});
