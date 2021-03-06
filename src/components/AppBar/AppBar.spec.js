import React from 'react';
import { StaticRouter } from 'react-router'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Bar } from './AppBar';

configure({ adapter: new Adapter() });

it('should render the component', async () => {
  const props = {
    location: {
      pathname: '/'
    },
    classes: {}
  }

  const wrapper = mount(<StaticRouter context={{}}>
    <Bar {...props}/>
  </StaticRouter>);
  await wrapper.update();

  expect(wrapper.text()).toContain('Fashion News');
  expect(wrapper.find('IconButton').length).toBe(0);
});

it('should render the component with back button', async () => {
  const props = {
    location: {
      pathname: '/article/1/stub-title'
    },
    classes: {}
  }

  const wrapper = mount(<StaticRouter context={{}}>
    <Bar {...props}/>
  </StaticRouter>);

  await wrapper.update();

  expect(wrapper.text()).toContain('Fashion News');
  expect(wrapper.find('IconButton').length).toBe(1);
});