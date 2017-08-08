import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    describe('Smoke tests', () => {
        test('Render', () => {
            shallow(<App />);
        });
    });

    describe('Component testing', () => {
        let wrapper = null;

        beforeEach(() => {
            wrapper = shallow(<App />);
        });

        test('Contains components', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
