import produce from 'immer';
import { handleActions } from 'redux-actions';

import { consts } from './actions';

const initialState = {
  loading: false,
  error: false,
  loaded: false,
  apps: [],
};

// TODO: add top loading state validating sub-states

/* eslint-disable no-param-reassign */

export default handleActions(
  {
    [consts.fetchCurrentPlayersRequest]: produce((draft, { payload: { appId } }) => {
      draft.loading = true;
      draft.loaded = false;
      const foundApp = draft.apps.find(app => app.id === appId);
      if (foundApp) {
        foundApp.loading = true;
        foundApp.loaded = false;
        return;
      }
      draft.apps.push({
        id: appId,
        loading: true,
        error: null,
        loaded: false,
      });
    }),
    [consts.fetchCurrentPlayersSuccess]: produce((draft, { payload: { appId, data } }) => {
      const currApp = draft.apps.find(app => app.id === appId);

      currApp.data = data;
      currApp.loading = false;
      currApp.error = null;
      currApp.loaded = true;

      draft.loading = draft.apps.some(app => app.loading);
      draft.loaded = draft.apps.every(app => app.loaded);
    }),
    [consts.fetchCurrentPlayersFailure]: produce((draft, { payload: { appId, error } }) => {
      const currApp = draft.apps.find(app => app.id === appId);

      currApp.error = error;
      currApp.loading = false;
      currApp.loaded = true;

      draft.loading = draft.apps.some(app => app.loading);
      draft.loaded = draft.apps.every(app => app.loaded);
    }),
  },
  initialState,
);

/* eslint-enable no-param-reassign */

export const name = 'appsCurrentPlayers';
