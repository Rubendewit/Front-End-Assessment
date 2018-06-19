import React from 'react';
import { configure, mount } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import NewsCard from './components/NewsCard/NewsCard';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import App from './App';
import * as News from './getNews.js';

import { NEWS_STUB, LAST_NEWS_STUB } from '../test/stub/newsStub';

configure({ adapter: new Adapter() });

let sinonStub;
const DELAY_MS = 2000

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

beforeAll(() => {
  sinonStub = sinon.stub(News, 'getNewsArticles');
  sinonStub.withArgs({ limit: 10, offset: 0, keywords: ['hunkemoller']}).returns(NEWS_STUB);
  sinonStub.returns(LAST_NEWS_STUB);
});

afterAll(() => {
  sinonStub.restore();
});

it('should load articles', async () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(NewsCard).length).toBe(0);
   
  await sleep(100);
  await wrapper.update();

  // Articles should be loaded, and load more button should still exist
  expect(wrapper.find(NewsCard).length).toBe(10);
  expect(wrapper.find('LoadMore').length).toBe(1);
  
  wrapper.find('LoadMore').simulate('click');
  
  await sleep(100);
  await wrapper.update();

  // Load more button should not exist anymore
  expect(wrapper.find(NewsCard).length).toBe(11);
  expect(wrapper.find('LoadMore').length).toBe(0);
});
