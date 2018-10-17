import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import steamClient from 'libs/steamClient';

import reducer, { name } from '../reducer';
import actions from '../actions';
import selectors from '../selectors';

jest.mock('libs/steamClient');

function setup(initialState = {}) {
  const middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(
    combineReducers({ [name]: reducer }),
    initialState,
    compose(...enhancers),
  );

  return {
    store,
  };
}

test('should have initial state', async () => {
  const { store } = setup();

  expect(store.getState()).toMatchSnapshot();
});

describe('get CurrentPlayers', () => {
  beforeEach(async () => {
    steamClient.get.mockClear();
  });

  test('should show loading', async () => {
    steamClient.get.mockReturnValueOnce(new Promise(() => {}));
    const { store } = setup();

    store.dispatch(actions.getCurrentPlayers());

    expect(selectors.loading(store.getState())).toBe(true);
  });

  describe('success', () => {
    const currentPlayers = {
      response: {
        player_count: 22553,
        result: 1,
      },
    };

    const appId = '23451345';

    function setupSuccess(response) {
      steamClient.get.mockImplementationOnce(async () => ({
        data: response,
      }));
    }

    test('should store apps in store', async () => {
      setupSuccess(currentPlayers);
      const { store } = setup();

      await store.dispatch(actions.getCurrentPlayers(appId));

      expect(selectors.apps(store.getState())).toEqual([
        {
          playerCount: 22553,
          error: null,
          id: '23451345',
          loaded: true,
          loading: false,
        },
      ]);
    });

    test('should hide loading', async () => {
      setupSuccess(currentPlayers);
      const { store } = setup();

      await store.dispatch(actions.getCurrentPlayers(appId));

      expect(selectors.loading(store.getState())).toBe(false);
    });
  });

  describe('failure', () => {
    const customError = { error: 'custom error' };

    const appId = '23451345';

    function setupFailure(error) {
      steamClient.get.mockImplementationOnce(async () => ({
        error,
      }));
    }

    beforeEach(async () => {
      steamClient.post.mockClear();
    });

    test('should store error in corresponding app', async () => {
      setupFailure(customError);
      const { store } = setup();

      await store.dispatch(actions.getCurrentPlayers(appId));

      expect(selectors.currentPlayersByAppId(appId)(store.getState()).error).toEqual(customError);
    });

    test('should hide loading', async () => {
      setupFailure(customError);
      const { store } = setup();

      await store.dispatch(actions.getCurrentPlayers(appId));

      expect(selectors.loading(store.getState())).toBe(false);
    });
  });
});
