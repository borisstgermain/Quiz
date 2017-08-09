import React from 'react';
import { shallow } from 'enzyme';
import Question from '../Question';

describe('Question component', () => {
  describe('Smoke tests', () => {
    const props = {
      question: 'What is this?',
      answer: 'JS',
      comment: '',
      clickHandler: jest.fn(),
      isShown: false,
    };

    test('Render without crashing', () => {
      shallow(<Question {...props} />);
    });
  });

  describe('Component testing', () => {
    let wrapper = null;
    let props = null;

    beforeEach(() => {
      props = {
        question: 'What is this?',
        answer: 'JS',
        comment: '',
        clickHandler: jest.fn(bool => !bool),
        isShown: false,
      };
      wrapper = shallow(<Question {...props} />);
    });

    test('Contains elements, correct text / Snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('Correct props', () => {
      expect(wrapper.instance().props).toEqual(props);
    });

    test('Click handler changes prop – isShow ', () => {
      expect(wrapper).toMatchSnapshot();

      props.isShown = wrapper.instance().props.clickHandler(props.isShown);
      const wrapperAfterClick = shallow(<Question {...props} />);

      expect(wrapperAfterClick).toMatchSnapshot();
      expect(wrapperAfterClick.instance().props.isShown).toEqual(true);
    });
  });
});
