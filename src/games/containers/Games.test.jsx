import React from 'react';
import { shallow } from 'enzyme';
import Games from './Games';

it('should render', () => {
  const wrapper = shallow(<Games />);
  expect(wrapper.getElement).not.toBe(null);
});
