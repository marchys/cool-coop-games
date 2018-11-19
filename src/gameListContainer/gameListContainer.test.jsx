import React from 'react';
import { shallow } from 'enzyme';
import gameList from './gameListContainer';

it('should render', () => {
  const wrapper = shallow(<gameList />);
  expect(wrapper.getElement).not.toBe(null);
});
