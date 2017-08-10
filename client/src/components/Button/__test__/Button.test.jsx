import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';


describe('Button', () => {
  describe('Smoke tests', () => {
    test('Render without crashing', () => {
      shallow(<Button />);
    });
  });


  describe('Component test', () => {
    let props;
    let wrapper;

    beforeEach(() => {
      props = {
        label: 'Button <+>',
        fullWidth: true,
        onClickHandler: jest.fn(),
      };
      wrapper = shallow(<Button {...props} />);
    });

    test('Correct props', () => {
      expect(wrapper.instance().props.label).toEqual(props.label);
      expect(wrapper.instance().props.fullWidth).toEqual(props.fullWidth);
      expect(wrapper.instance().props.onClickHandler).toEqual(props.onClickHandler);
    });

    test('onClick handler', () => {
      const fn = wrapper.instance().props.onClickHandler;
      wrapper.find('button').simulate('click');

      expect(fn).toHaveBeenCalled();
    });

    test('Snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
