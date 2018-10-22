import React from 'react';
import PropTypes from 'prop-types';

export default function GameContainerInfo({ name, status }) {
  return (
    <div>
      {name} | {status}
    </div>
  );
}

GameContainerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
