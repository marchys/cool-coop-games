import React from 'react';
import { shallow } from 'enzyme';
import gameList from './gameList';

it('should render', () => {
  const wrapper = shallow(<gameList />);
  expect(wrapper.getElement).not.toBe(null);
});
