import React from 'react';
import { render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Button } from '../index';

describe('Button', () => {
    it('render', () => {
        const wrapper = render(<Button>foo</Button>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('type', () => {
        const wrapper = render(<Button type="primary">foo</Button>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('disabled', () => {
        const wrapper = render(<Button disabled>foo</Button>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('size', () => {
        const wrapper = render(<Button size="lg">foo</Button>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('onClick', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Button onClick={onClick}>foo</Button>);
        wrapper.simulate('click');
        expect(onClick).toBeCalled();
    });
});