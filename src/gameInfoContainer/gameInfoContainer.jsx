import React from 'react';
import PropTypes from 'prop-types';
import AppCurrentPlayers from '../appsCurrentPlayers/containers/AppCurrentPlayers';

export default function GameInfoContainer({ name, status, steamId }) {
  return (
    <div>
      {name} | {status} | <AppCurrentPlayers appId={steamId} />
    </div>
  );
}

GameInfoContainer.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  steamId: PropTypes.string.isRequired,
};
