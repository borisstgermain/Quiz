import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    // let wrapper = null;

    // beforeEach(() => {
    //     wrapper = shallow(<App />);
    // });

    test('Render', () => {
        shallow(<App />)
    });

    // test('Contains Header', () => {
    //     expect(wrapper.find(Header).exists()).toBe(true);
    // });
    //
    // test('Contains BoardContainer', () => {
    //     expect(wrapper.find(BoardContainer).exists()).toBe(true);
    // })
});
