import { createAction } from 'redux-actions';
import steamClient from 'libs/steamClient';

const fetchCurrentPlayersRequest = createAction('FETCH_CURRENT_PLAYERS_REQUEST');
const fetchCurrentPlayersSuccess = createAction('FETCH_CURRENT_PLAYERS_SUCCESS');
const fetchCurrentPlayersFailure = createAction('FETCH_CURRENT_PLAYERS_FAILURE');

// TODO: not call api if already game in store

const getCurrentPlayers = appId => async dispatch => {
  dispatch(fetchCurrentPlayersRequest({ appId }));

  const { data, error } = await steamClient.get(
    '/ISteamUserStats/GetNumberOfCurrentPlayers/v0001/',
    { params: { appId } },
  );

  if (error) {
    dispatch(fetchCurrentPlayersFailure({ appId, error }));
    return;
  }

  dispatch(fetchCurrentPlayersSuccess({ appId, data: data.response }));
};

export const consts = {
  fetchCurrentPlayersRequest,
  fetchCurrentPlayersSuccess,
  fetchCurrentPlayersFailure,
};

export default {
  getCurrentPlayers,
};
