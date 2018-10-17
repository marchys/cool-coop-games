import { combineReducers } from 'redux';
import * as appsCurrentPlayers from 'appsCurrentPlayers/redux/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    [appsCurrentPlayers.name]: appsCurrentPlayers.default,
    ...asyncReducers,
  });
}
