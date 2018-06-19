import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { Article } from './Article';
import * as News from '../../getNews.js';
import { ARTICLE_STUB } from '../../../test/stub/newsStub';

configure({ adapter: new Adapter() });

let sinonStub;

beforeAll(() => {
  sinonStub = sinon.stub(News, 'getNewsArticle').returns(ARTICLE_STUB);
});

afterAll(() => {
  sinonStub.restore();
});

it('should update state with articles', async () => {
  const props = {
    match: {
      params: {
        id: 123
      }
    },
    classes: {
      container: 'class'
    }
  }

  const wrapper = mount(<Article {...props}/>);
  await wrapper.update();

  expect(wrapper.text()).toContain('People celebrate world peace as new stub article is released.');
});