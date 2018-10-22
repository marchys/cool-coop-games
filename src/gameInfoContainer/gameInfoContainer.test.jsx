import React from 'react';
import { shallow } from 'enzyme';
import gameInfoContainer from './gameInfoContainer';

it('should render', () => {
  const wrapper = shallow(<gameInfoContainer />);
  expect(wrapper.getElement).not.toBe(null);
});
