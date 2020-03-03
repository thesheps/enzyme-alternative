import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import dumbFunction from './dumbFunction';
import Dumb from './Dumb';

jest.mock('./dumbFunction');

Enzyme.configure({ adapter: new Adapter() })

describe('A Dumb Enzyme Test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    describe('mount rendering', () => {
        it('calls dumbFunction from useEffect', () => {
            const wrapper = mount(<Dumb value='hello' />);
            wrapper.setProps({ value: 'world' });

            expect(dumbFunction).toHaveBeenCalledWith('hello');
            expect(dumbFunction).toHaveBeenCalledWith('world');
        })
    })

    describe('shallow rendering', () => {
        it('doesnt work with useEffect', () => {
            const wrapper = shallow(<Dumb value='hello' />);
            wrapper.setProps({ value: 'world' });

            expect(dumbFunction).toHaveBeenCalledWith('hello');
            expect(dumbFunction).toHaveBeenCalledWith('world');
        })

        it('works if you mock useEffect', () => {
            const useEffect = jest.spyOn(React, "useEffect");

            useEffect.mockImplementation(f => {
                f();
            });

            const wrapper = shallow(<Dumb value='hello' />)
            wrapper.setProps({ value: 'world' })

            expect(dumbFunction).toHaveBeenCalledWith('hello');
            expect(dumbFunction).toHaveBeenCalledWith('world');
        })
    })
})