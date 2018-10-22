import React from 'react';
import PropTypes from 'prop-types';

export default function GameInfoContainer({ name, status }) {
  return (
    <div>
      {name} | {status}
    </div>
  );
}

GameInfoContainer.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
