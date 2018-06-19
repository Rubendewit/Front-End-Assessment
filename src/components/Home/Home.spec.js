import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Home from './Home';
import * as News from '../../getNews.js';
import { NEWS_STUB, LAST_NEWS_STUB } from '../../../test/stub/newsStub';

configure({ adapter: new Adapter() });

let shallow;
let sinonStub;

beforeAll(() => {
  shallow = createShallow({ dive: true });
  sinonStub = sinon.stub(News, 'getNewsArticles').returns(NEWS_STUB);
});

afterAll(() => {
  sinonStub.restore();
});

it('should update state with articles', async () => {
  const wrapper = shallow(<Home />);
  await wrapper.update();

  const expectedArticles = wrapper.state('newsArticles');
  const hasNextPage = wrapper.state('hasNextPage');

  expect(hasNextPage).toBe(true);
  expect(expectedArticles.length).toBe(10);
  expect(Object.keys(expectedArticles[0])).toEqual(["title", "slug", "imageUrl", "id"]);
});