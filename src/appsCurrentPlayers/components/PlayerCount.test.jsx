import React from 'react';
import { shallow } from 'enzyme';

import PlayerCount from './PlayerCount';

function setup({ appId = '74933', playerCount = 200, ...props } = {}) {
  const wrapper = shallow(<PlayerCount appId={appId} playerCount={playerCount} {...props} />);

  return {
    wrapper,
  };
}

test('should render ', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});
