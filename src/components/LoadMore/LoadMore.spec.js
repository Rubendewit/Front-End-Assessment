import React from 'react';
import { configure, mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import LoadMore from './LoadMore';

configure({ adapter: new Adapter() });

it('should render the component', async () => {
  const spy = sinon.spy();

  const offset = 10;

  const props = {
    classes: {},
    onClick: spy,
    offset
  }

  const wrapper = mount(<LoadMore {...props}/>);
  wrapper.simulate('click');
  
  expect(spy.calledWith(offset)).toBe(true);
  expect(wrapper.text()).toBe('Load more');
});
