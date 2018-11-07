import { combineReducers } from 'redux';
import * as appsCurrentPlayers from 'appsCurrentPlayers/redux/reducer';
import visibilityFilter from 'filterSelector/redux/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    [appsCurrentPlayers.name]: appsCurrentPlayers.default,
    visibilityFilter: visibilityFilter.default,
    ...asyncReducers,
  });
}
