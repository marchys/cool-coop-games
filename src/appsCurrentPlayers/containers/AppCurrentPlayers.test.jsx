import React from 'react';
import { shallow } from 'enzyme';

import Loading from 'components/Loading';
import { AppCurrentPlayers } from './AppCurrentPlayers';

function setup({ appId = '74933', getCurrentPlayers = jest.fn(), ...props } = {}) {
  const wrapper = shallow(
    <AppCurrentPlayers appId={appId} getCurrentPlayers={getCurrentPlayers} {...props} />,
  );

  return {
    wrapper,
    get loading() {
      return wrapper.find(Loading);
    },
  };
}

it('should render', () => {
  const { wrapper } = setup();
  expect(wrapper.getElement()).not.toBe(null);
});

test('should show loading if currentPlayers is undefined', () => {
  const wrapper = setup({ currentPlayers: void 0 });

  expect(wrapper.loading).toExist();
});

test('should show loading if currentPlayers is not loaded', () => {
  const wrapper = setup({ currentPlayers: { id: '74933', loading: true, loaded: false } });

  expect(wrapper.loading).toExist();
});

test('should render structure', () => {
  const currentPlayers = { id: '74933', loading: false, loaded: true, playerCount: 2000 };
  const { wrapper } = setup({ currentPlayers });

  expect(wrapper).toMatchSnapshot();
});
