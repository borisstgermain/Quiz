import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedQuiz, { Quiz, mapStateToProps } from '../Quiz';


describe('Quiz', () => {
  let wrapper;
  const questions = [{
    question: 'What is best language?',
    answer: 'JS',
  },
  {
    question: 'What is this?',
    answer: 'Kaka',
  }];
  const removeQuestion = jest.fn();
  const props = {
    questions,
    removeQuestion,
  };


  describe('Smoke tests', () => {
    test('Render', () => {
      shallow(<Quiz {...props} />);
    });
  });

  describe('Component testing', () => {
    beforeEach(() => {
      wrapper = shallow(<Quiz {...props} />);
    });

    test('Contains components', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('Props', () => {
      expect(wrapper.instance().props.questions).toEqual(questions);
    });

    test('State');
    test('Click hanler');
  });
});


describe('Connected Quiz', () => {
  describe('Smoke', () => {
    const mockStore = configureStore();
    const initialState = {
      quiz: {
        questions: [{
          question: 'What is best language?',
          answer: 'JS',
        },
        {
          question: 'What is this?',
          answer: 'Kaka',
        }],
        isFetching: '',
        error: '',
      },
    };
    const store = mockStore(initialState);

    test('Render without crashing', () => {
      shallow(<ConnectedQuiz store={store} />);
    });
  });

  describe('Component testing', () => {
    let mockStore;
    let store;
    let initialState;
    let wrapper;

    beforeEach(() => {
      mockStore = configureStore();
      initialState = {
        quiz: {
          questions: [{
            question: 'What is best language?',
            answer: 'JS',
          },
          {
            question: 'What is this?',
            answer: 'Kaka',
          }],
          isFetching: '',
          error: '',
        },
      };
      store = mockStore(initialState);
      wrapper = shallow(<ConnectedQuiz store={store} />);
    });


    test('Contains / Snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('Check Prop matches with initialState', () => {
      expect(wrapper.props().questions).toEqual(initialState.quiz.questions);
    });

    test('Correct MapStateToProps', () => {
      const expectedProps = {
        questions: [{
          question: 'What is best language?',
          answer: 'JS',
        },
        {
          question: 'What is this?',
          answer: 'Kaka',
        }],
        isFetching: '',
        error: '',
        hasQuestions: true,
      };
      const state = wrapper.instance().store.getState();

      expect(mapStateToProps(state)).toEqual(expectedProps);
    });
  });
});
