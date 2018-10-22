import React from 'react';
import { shallow } from 'enzyme';
import gameContainerInfo from './gameContainerInfo';

it('should render', () => {
  const wrapper = shallow(<gameContainerInfo />);
  expect(wrapper.getElement).not.toBe(null);
});
