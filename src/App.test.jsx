import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should render', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.getElement).not.toBe(null);
});
