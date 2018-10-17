import { createSelector } from 'reselect';
import { name } from './reducer';

const appMapper = ({ data: { player_count: playerCount } = {}, ...rest }) => ({
  ...rest,
  ...(playerCount && { playerCount }),
});

const currentPlayersSelector = state => state[name] || {};

export const loadingSelector = createSelector(currentPlayersSelector, ({ loading }) => loading);

export const appsSelector = createSelector(currentPlayersSelector, ({ apps }) =>
  apps.map(appMapper),
);

export const currentPlayersByAppIdSelector = appId =>
  createSelector(appsSelector, apps => apps.find(app => app.id === appId));

export default {
  loading: loadingSelector,
  apps: appsSelector,
  currentPlayersByAppId: currentPlayersByAppIdSelector,
};
